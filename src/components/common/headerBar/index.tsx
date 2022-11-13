import React from 'react';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import './headerBar.scss';

const prefixCls = 'headerbar-component';
interface PorpsType {
  className?: string;
  onBack?: () => void;
  hasBack?: boolean;
  title: string;
}
const HeaderComponent = ({ className = '', onBack = undefined, hasBack = true, title = '' }: PorpsType) => {
  const navigate = useNavigate();
  const goBack = () => {
    if (onBack && typeof onBack === 'function') {
      onBack();
      return;
    }
    navigate(-1);
  };
  return (
    <Row className={classnames(prefixCls, { [`${className}`]: !!className })} align="middle">
      {hasBack && (
        <Col flex="50px" className="return">
          <ArrowLeftOutlined onClick={goBack} />
        </Col>
      )}
      <Col flex={1}>
        <h2 className={classnames('header-title',{ align: !hasBack })}>{title}</h2>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
