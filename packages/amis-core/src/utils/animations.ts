import styleManager from '../StyleManager';

export interface AnimationsProps {
  enter?: {
    type: string;
    duration?: number;
    delay?: number;
    repeat?: boolean;
    inView?: boolean;
  };
  attention?: {
    type: string;
    duration?: number;
    repeat?: string;
    delay?: number;
  };
  hover?: {
    type: string;
    duration?: number;
    delay?: number;
  };
  exit?: {
    type: string;
    duration?: number;
    delay?: number;
    repeat?: boolean;
    outView?: boolean;
  };
}

function generateStyleByAnimation(
  className: string[],
  animation: {
    name: string;
    duration?: number;
    iterationCount?: string | number;
    delay?: number;
    fillMode?: string;
    timingFunction?: string;
  }
) {
  return {
    [className.join(',')]: {
      animationName: animation.name,
      animationDuration: `${animation.duration || 1}s`,
      animationIterationCount: animation.iterationCount || 1,
      animationDelay: `${animation.delay || 0}s`,
      animationTimingFunction: animation.timingFunction || 'ease',
      animationFillMode: animation.fillMode || 'none'
    }
  };
}

function generateStyleByHover(
  className: string[],
  animation: {
    name: string;
    duration?: number;
    delay?: number;
  }
) {
  return {
    [className.join(',')]: {
      transition: `all ${animation.duration || 1}s ease ${
        animation.delay || 0
      }s`
    }
  };
}

export function createAnimationStyle(
  id: string,
  animationsConfig: AnimationsProps
) {
  let styleConfig = {};
  Object.keys(animationsConfig).forEach((key: keyof AnimationsProps) => {
    if (!animationsConfig[key]) {
      return;
    }
    const animationConfig = animationsConfig[key];
    styleConfig = Object.assign(
      styleConfig,
      key === 'hover'
        ? generateStyleByHover([`.${animationConfig.type}-${id}-${key}`], {
            name: animationConfig.type,
            duration: animationConfig.duration,
            delay: animationConfig.delay
          })
        : generateStyleByAnimation([`.${animationConfig.type}-${id}-${key}`], {
            name: animationConfig.type,
            duration: animationConfig.duration,
            iterationCount: key === 'attention' ? 'infinite' : 1,
            delay: animationConfig.delay,
            fillMode: key === 'attention' ? 'none' : 'forwards'
          })
    );
  });

  styleManager.updateStyle({
    [id]: styleConfig
  });
}
