import React from 'react';
import { Avatar, Row, Col, Button, Typography, Result } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/store/hooks';
import { clsPrefix } from '@/utils/tools';
import { SingleTwitter, PageHeaderBar, SendTwitter } from '@/components/common';
import './mine.scss';

const prefixCls = 'mine-page';
const clsName = clsPrefix(prefixCls);
const { Title } = Typography;
const MinePage = () => {
  const { newList, userInfo } = useAppSelector((states) => {
    const {
      news: { userTweets = {} },
      users: { userInfo },
    } = states;
    return { newList: userTweets[userInfo.id] || [], userInfo };
  });
  return (
    <div className={prefixCls}>
      <PageHeaderBar title={userInfo.loginName} />
      <p className={clsName('bg')}></p>
      <div className={clsName('baseintro')}>
        <Row className="avatar-column" justify="space-between" align="middle">
          <Col>
            <Avatar className="user-icon" style={{ backgroundColor: '#ccd6dd' }} size={126} src={userInfo.avatar} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Button shape="round" disabled>
              设置头像
            </Button>
          </Col>
        </Row>
        <h3 className="user-name">{userInfo.loginName}</h3>
        <p className="user-desc">这家伙很懒，什么都没有留下～～～</p>
      </div>
      <SendTwitter />
      <div className={clsName('body')}>
        <Title level={3}>最近动态</Title>
        {newList.map((item) => {
          return <SingleTwitter key={item.id} data={item} />;
        })}
        {!newList.length && <Result status="info" subTitle="暂无数据." />}
      </div>
    </div>
  );
};

export default MinePage;
