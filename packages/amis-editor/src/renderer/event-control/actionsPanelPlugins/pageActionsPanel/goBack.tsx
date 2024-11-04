import React from 'react';
import {registerActionPanel} from '../../actionsPanelManager';

registerActionPanel('goBack', {
  label: '回退页面',
  tag: '页面',
  description: '浏览器回退',
  descDetail: (info: any) => {
    return <div>返回上一页</div>;
  }
});
