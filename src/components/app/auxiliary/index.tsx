import React from 'react';
import { Button, Row, Col, message, Avatar } from 'antd';
import { clsPrefix } from '@/utils/tools';
import { useNavigate } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { userLogout } from '@/store/user';
import NotloginComponent from '@/components/notLogin';
import ThemeComponent from '@/components/theme';
import './auxiliary.scss';
const prefixCls = 'auxiliary-component';
const clsName = clsPrefix(prefixCls);

const AuxiliaryComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list, isLogin } = useAppSelector((states) => {
    const {
      follows: { list = [] } = {},
      users: { userInfo: { loginName = '' } = {} },
    } = states;
    return { list, isLogin: !!loginName };
  });
  const onTap = () => {
    message.info('功能开发中…');
  };
  const onLogout = () => {
    dispatch(userLogout(''));
    navigate('explore?msg=探索');
  };
  return (
    <div className={prefixCls}>
      <ThemeComponent />
      {isLogin ? (
        <div className={clsName('follow')}>
          <h2 className="title">推荐关注</h2>
          {list.map((item) => {
            return (
              <Row className={clsName('follow-row')} align="middle" key={item.id}>
                <Col flex={'60px'}>
                  <Avatar size={48} src={item.avatar} />
                </Col>
                <Col className="content">
                  <h5>{item.name}</h5>
                  <p className="desc">{item.desc}</p>
                </Col>
                <Col offset={1}>
                  <Button onClick={onTap} type="primary" ghost shape="round" size="small">
                    关注
                  </Button>
                </Col>
              </Row>
            );
          })}
        </div>
      ) : (
        <NotloginComponent />
      )}
      <Button style={{ marginTop: 20 }} type="default" icon={<GithubOutlined />} size="large" block shape="round" href="https://github.com/meibin08/twitter-app">
        demo 源码入口
      </Button>
      {isLogin && (
        <Button onClick={onLogout} style={{ marginTop: 20 }} danger size="large" block shape="round">
          退出
        </Button>
      )}
    </div>
  );
};

export default AuxiliaryComponent;
