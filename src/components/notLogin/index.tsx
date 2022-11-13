import React from 'react';
import { message, Modal, Button, Row, Col, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { clsPrefix } from '@/utils/tools';
import { setLoginModal, createUser } from '@/store/user';
import { UserInfoType, LoginFormData } from '@/store/user/type';
import { useSafeState } from 'ahooks';
import { AppleFilled } from '@ant-design/icons';
import './notlogin.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

type FormDataType = {
  autoRegister?: boolean;
  id?: string;
} & LoginFormData;
const prefixCls = 'notlogin-component';
const clsName = clsPrefix(prefixCls);

const termsList: string[] = ['服务信息', '隐私政策', 'Cookie政策', '辅助功能', '© 2022 Twitter, Inc.'];
const NotloginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginModalVisible, usesList } = useAppSelector((states) => {
    const { users: { usesList = [], loginModalVisible = false } = {} } = states;
    return {
      loginModalVisible,
      usesList,
    };
  });
  const [state, setData] = useSafeState({
    title: '登录',
    type: 1, //1：登录，2：注册
  });
  const closeModal = () => dispatch(setLoginModal(false));
  const openModal = () => dispatch(setLoginModal(true));
  const onRegister = () => {
    setData({
      title: '注册',
      type: 2,
    });
    openModal();
  };
  const onLogin = () => {
    setData({
      title: '登录',
      type: 1,
    });
    openModal();
  };
  const onSave = (values: FormDataType) => {
    dispatch(createUser(values as UserInfoType));
    closeModal();
    message.success(`您好 ${values.loginName}，欢迎回来～`);
    navigate(`/mine/${values.loginName}`);
  };
  const onFinish = (values: FormDataType) => {
    let autoRegister = true;
    let user: UserInfoType = usesList.find((k) => k.loginName === values.loginName) || { loginName: '', password: '', id: '' };
    if (user.loginName && user.password !== values.password) {
      message.error('密码错误，请重新输入');
      return;
    }
    user.loginName && (autoRegister = false);
    onSave({ ...values, autoRegister });
  };
  const onTap = () => {
    message.info('功能开发中…');
  };
  return (
    <>
      <div className={prefixCls}>
        <div className={clsName('body')}>
          <h2 className="login-title">初到 Twitter？</h2>
          <p className="guide-tips">立即注册，获取你自己的个性化时间线！</p>
          <Button className="login-btn" shape="round" size="large" block icon={<AppleFilled />} onClick={onLogin}>
            登录
          </Button>
          <Button className="login-btn" shape="round" size="large" block onClick={onLogin}>
            使用手机号码或电子邮箱注册
          </Button>
          <p className="agreement-tips">
            注册即表示同意
            <a rel="noopener noreferrer" href="#" onClick={onTap}>
              服务条款
            </a>
            及
            <a rel="noopener noreferrer" href="#" onClick={onTap}>
              隐私政策
            </a>
            ，其中包括{' '}
            <a rel="noopener noreferrer" href="#" onClick={onTap}>
              Cookie 使用条款
            </a>
            。
          </p>
        </div>
        <div className={clsName('terms')}>
          {termsList.map((k, i) => (
            <a key={`term${i}`} onClick={onTap} rel="noopener noreferrer" href="#">
              {k}
            </a>
          ))}
        </div>
      </div>
      <footer className={clsName('footer')}>
        <Row className="main-heart" justify="space-between" align="middle">
          <Col className="slogan">
            <h3>新鲜事一网打尽</h3>
            <p>在 Twitter 上的人会第一时间知道。</p>
          </Col>
          <Col>
            <Button className="login-btn" shape="round" ghost onClick={onLogin}>
              登录
            </Button>
            <Button className="login-btn" shape="round" type="default" onClick={onRegister}>
              注册
            </Button>
          </Col>
        </Row>
      </footer>
      <Modal open={loginModalVisible} onCancel={closeModal} title={state.title} footer={null}>
        <Form name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
          <Form.Item label="用户名" name="loginName" rules={[{ required: true, message: '请输入您的用户名' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入您的密码' }]}>
            <Input.Password placeholder="请输入" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit" size="large" block>
              {state.title}
            </Button>
            <p className="login-tips">温馨提示：当账号不存在时，则自动注册并登录</p>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NotloginComponent;
