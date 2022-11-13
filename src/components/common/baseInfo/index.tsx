import React from 'react';
import './base.scss';

const prefixCls = 'newbase-component';

const BaseInfoComponent = ({ className = '', data }: { className?: string; data: { name?: string; date?: string } }) => {
  return (
    <div className={`${prefixCls} ${className}`}>
      <p className="avatar-icon" style={{ backgroundImage: `url(https://pbs.twimg.com/profile_images/1419704144026296333/ms3D5ipo_normal.jpg)` }}></p>
      <span className="name">{data.name || '苏北'}</span>
      <span className="nbsp">·</span>
      <span className="date">{data.date || '-'}</span>
    </div>
  );
};

export default BaseInfoComponent;
