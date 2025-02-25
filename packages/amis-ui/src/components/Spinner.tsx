/**
 * @file Spinner
 * @description
 * @author fex
 * @date 2017-11-07
 */

import React from 'react';
import {themeable, ThemeProps} from 'amis-core';
import Transition, {ENTERED, ENTERING} from 'react-transition-group/Transition';
import {Icon, hasIcon} from './icons';
import {generateIcon} from 'amis-core';
import {types} from 'mobx-state-tree';
import {observable, reaction} from 'mobx';

const fadeStyles: {
  [propName: string]: string;
} = {
  [ENTERED]: 'in',
  [ENTERING]: 'in'
};

// Spinner Props
export interface SpinnerProps extends ThemeProps {
  show: boolean; // 控制Spinner显示与隐藏
  className?: string; // 自定义最外层元素class
  spinnerClassName?: string; // spin图标位置包裹元素的自定义class
  /**
   * @deprecated 已废弃，没有作用
   */
  mode?: string;
  size?: 'sm' | 'lg' | ''; // spinner Icon 大小
  icon?: string | React.ReactNode; // 自定义icon
  tip?: string; // spinner文案
  tipPlacement?: 'top' | 'right' | 'bottom' | 'left'; // spinner文案位置
  delay?: number; // 延迟显示
  overlay?: boolean; // 是否显示遮罩层，有children属性才生效
}

const SpinnerSharedStore = types
  .model('SpinnerSharedStore', {})
  .volatile(self => {
    return {
      // 保存所有可以进入 loading 状态（props.show = true）的 Spinner 的父级容器
      spinningContainers: observable.set([] as HTMLElement[], {
        deep: false
      })
    };
  })
  .actions(self => {
    return {
      push: (spinnerContainer: HTMLElement) => {
        if (self.spinningContainers.has(spinnerContainer)) {
          return;
        }
        self.spinningContainers.add(spinnerContainer);
      },
      remove: (spinnerContainer: HTMLElement) => {
        if (self.spinningContainers.has(spinnerContainer)) {
          self.spinningContainers.delete(spinnerContainer);
        }
      },
      /**
       *  判断当前 Spinner 是否可以进入 loading 状态
       * @param spinnerContainerWillCheck 待检查的 Spinner 父容器
       * @returns {boolean} 是否可以进入 loading
       */
      checkLoading: (spinnerContainerWillCheck: HTMLElement | null) => {
        if (self.spinningContainers.has(spinnerContainerWillCheck)) {
          if (!self.spinningContainers.size) {
            return false;
          }

          let loading = true;

          // 检查缓存的容器中是否有当前容器的父级元素
          self.spinningContainers.forEach(container => {
            if (
              container.contains(spinnerContainerWillCheck) &&
              container !== spinnerContainerWillCheck
            ) {
              loading = false;
            }
          });

          return loading;
        }

        return false;
      }
    };
  });

const store = SpinnerSharedStore.create({});

export class Spinner extends React.Component<
  SpinnerProps,
  {spinning: boolean; showMarker: boolean}
> {
  static defaultProps = {
    show: true,
    className: '',
    spinnerClassName: '',
    size: '' as '',
    icon: '',
    tip: '',
    tipPlacement: 'bottom' as 'bottom',
    delay: 0,
    overlay: false
  };

  state = {
    spinning: false,
    showMarker: true
  };

  parent: HTMLElement | null = null;

  /**
   * 解决同级（same parent node） spinner 的 show 不全为 true 时
   * 标记 loading 是由当前组件触发的
   */
  loadingTriggered: boolean = false;

  spinnerRef = (dom: HTMLElement) => {
    if (dom) {
      this.parent = dom.parentNode as HTMLElement;
    }
  };

  componentDidUpdate() {
    if (this.parent) {
      if (this.props.show) {
        this.loadingTriggered = true;
        store.push(this.parent);
      } else if (this.state.spinning && this.loadingTriggered) {
        this.loadingTriggered = false;
        store.remove(this.parent);
      }
    }
  }

  componentDidMount() {
    if (this.parent && this.state.showMarker) {
      this.setState({showMarker: false});
    }
  }

  componentWillUnmount() {
    // 卸载 reaction
    this.loadingChecker();
    // 删除 当前 parent 元素
    store.remove(this.parent!);
  }

  /**
   * 监控着 spinningContainers 的变化
   */
  loadingChecker = reaction(
    () => store.spinningContainers.size,
    () => {
      this.setState({
        spinning: store.checkLoading(this.parent) && this.loadingTriggered
      });
    }
  );

  render() {
    const {
      classnames: cx,
      className,
      spinnerClassName,
      size = '',
      overlay,
      delay,
      icon,
      tip,
      tipPlacement = ''
    } = this.props;
    const isCustomIcon = icon && React.isValidElement(icon);
    const timeout = {enter: delay, exit: 0};

    return (
      <>
        {this.state.showMarker && (
          <span className={cx('Spinner-mark')} ref={this.spinnerRef as any} />
        )}
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.spinning}
          timeout={timeout}
        >
          {(status: string) => {
            return (
              <>
                {/* 遮罩层 */}
                {overlay ? (
                  <div className={cx(`Spinner-overlay`, fadeStyles[status])} />
                ) : null}

                {/* spinner图标和文案 */}
                <div
                  data-testid="spinner"
                  className={cx(
                    `Spinner`,
                    tip && {
                      [`Spinner-tip--${tipPlacement}`]: [
                        'top',
                        'right',
                        'bottom',
                        'left'
                      ].includes(tipPlacement)
                    },
                    {[`Spinner--overlay`]: overlay},
                    fadeStyles[status],
                    className
                  )}
                >
                  <div
                    className={cx(
                      `Spinner-icon`,
                      {
                        [`Spinner-icon--${size}`]: ['lg', 'sm'].includes(size),
                        [`Spinner-icon--default`]: !icon,
                        [`Spinner-icon--simple`]: !isCustomIcon && icon,
                        [`Spinner-icon--custom`]: isCustomIcon
                      },
                      spinnerClassName
                    )}
                  >
                    {icon ? (
                      isCustomIcon ? (
                        icon
                      ) : hasIcon(icon as string) ? (
                        <Icon icon={icon} className="icon" />
                      ) : (
                        generateIcon(cx, icon as string, 'icon')
                      )
                    ) : null}
                  </div>
                  {tip ? <span className={cx(`Spinner-tip`)}>{tip}</span> : ''}
                </div>
              </>
            );
          }}
        </Transition>
      </>
    );
  }
}

export default themeable(Spinner);
