import React from 'react';
import { Result } from 'antd';
import { useSearchParams } from 'react-router-dom';

const Index = () => {
  const [params] = useSearchParams();
  const msg = params.get('msg') || '';

  return (
    <div style={{ marginTop: 60 }}>
      <Result status="500" title="" subTitle={<p>抱歉, {msg && `[ ${msg}模块 ] `}功能正在开发中...</p>} />
    </div>
  );
};

export default Index;
