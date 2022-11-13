import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { clsPrefix } from '@/utils/tools';
import skinThemeChange from '@/utils/skinTheme';
import cookies from '@/utils/cookie';

import './theme.scss';
const prefixCls = 'theme-component';
const clsName = clsPrefix(prefixCls);

const colors = ['#1d9bf0', '#00bc70', '#f5222d', '#fa541b', '#13c2c2', '#2f54ec', '#712fd1'];
const ThemeComponent = () => {
  const [curentTheme, setCurrentTheme] = useState(decodeURIComponent(cookies.get('themeColor') || ''));
  const onTap = (color: string) => {
    skinThemeChange(color);
    cookies.set('themeColor', color);
    setCurrentTheme(color);
  };

  return (
    <div className={prefixCls}>
      <h2 className={clsName('title')}>主题切换</h2>
      <Row className={clsName('colors')} justify="space-between">
        {colors.map((k) => (
          <Col
            key={k}
            className={curentTheme === k ? 'active' : ''}
            onClick={() => onTap(k)}
            style={{
              backgroundColor: k,
            }}
          ></Col>
        ))}
      </Row>
    </div>
  );
};

export default ThemeComponent;
