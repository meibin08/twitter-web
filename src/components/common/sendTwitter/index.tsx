import React, { useState } from 'react';
import { Button, Row, Col, Avatar, Input, message } from 'antd';
import { PictureOutlined, FileGifOutlined, UserOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { pushNews } from '@/store/news';
import classnames from 'classnames';

import './sendTwitter.scss';

const prefixCls = 'send-component';
interface PorpsType {
  className?: string;
  onClose?: () => void;
}
const SendTwitterComponent = ({ className = '', onClose }: PorpsType) => {
  const dispatch = useAppDispatch();
  const [sendConent, setSend] = useState('');
  const userInfo = useAppSelector((states) => {
    const {
      users: { userInfo },
    } = states;
    return userInfo;
  });
  const addNew = () => {
    dispatch(
      pushNews({
        content: sendConent,
        id: '',
        date: '',
        user: userInfo,
      }),
    );
    setSend('');
    message.success('太棒了，你的动态发送成功..');
    onClose && onClose();
  };
  return (
    <div className={classnames(prefixCls, { [`${className}`]: !!className })}>
      <Row align="top">
        <Col flex="60px" className="user-avatar">
          <Avatar src={userInfo.avatar} icon={<UserOutlined />} size={50} />
        </Col>
        <Col flex={1}>
          <Input.TextArea value={sendConent} onChange={(e) => setSend(e.target.value)} autoSize={{ minRows: 3, maxRows: 5 }} className="textarea" placeholder="有什么新鲜事？" />
          <Row className="handler" justify="space-between" align="middle">
            <Col flex={1}>
              <Button type="primary" shape="circle" disabled size="small" icon={<PictureOutlined size={20} />} />
              <Button type="primary" shape="circle" style={{ marginLeft: 10 }} disabled size="small" icon={<FileGifOutlined size={20} />} />
            </Col>
            <Col>
              <Button type="primary" onClick={addNew} disabled={!sendConent} shape="round">
                发推
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SendTwitterComponent;
