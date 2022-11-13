import React from 'react';
import { Menu, Dropdown, Row, Col, Avatar, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, EllipsisOutlined, MessageOutlined, UploadOutlined, ShareAltOutlined, HeartOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ListOptions } from '@/store/news/type';
import { deleteNews } from '@/store/news';
import './singleTwitter.scss';

const prefixCls = 'singlett-component';
interface PorpsType {
  className?: string;
  data: ListOptions;
}
const SingleTwitterComponent = ({ className = '', data }: PorpsType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUserId = useAppSelector((states) => {
    const {
      users: { userInfo },
    } = states;
    return userInfo.id || '';
  });
  const { evaluateNum = 0, retweetNum = 0, shareNum = 0, likeNum = 0, summary = '', id, user: { loginName = '', id: userId = '' } = {}, date } = data;
  const nameLetter = loginName.slice(0, 1).toLocaleUpperCase();
  const goTo = (id: string) => {
    navigate(`/tweet/${id}`);
  };
  const onTap = () => {
    message.info('暂不能操作，功能开发中…');
  };
  const onDelete = (e: any) => {
    let { key = '' } = e;
    if (key === 'delete') {
      dispatch(deleteNews(data));
    }
  };
  return (
    <Row className={classnames(prefixCls, { [`${className}`]: !!className })} align="top" key={id}>
      <Col flex={'60px'}>
        <Avatar style={{ backgroundColor: '#ccd6dd' }} size={48} icon={nameLetter || <UserOutlined />} />
      </Col>
      <Col className="col-flex">
        <div onClick={() => goTo(id)}>
          <Row align="middle">
            <Col>
              <h5 className="user-name">{loginName}</h5>
            </Col>
            <Col>
              <span className="date">{date}</span>
            </Col>
          </Row>
          <div className="twitter-content">{summary}...</div>
        </div>
        <Row className="twitter-handle" align="middle">
          <Col span={6} onClick={onTap}>
            <MessageOutlined /> {evaluateNum}
          </Col>
          <Col span={6} onClick={onTap}>
            <ShareAltOutlined /> {shareNum}
          </Col>
          <Col span={6} onClick={onTap}>
            <HeartOutlined /> {likeNum}
          </Col>
          <Col span={6} onClick={onTap}>
            <UploadOutlined /> {retweetNum}
          </Col>
        </Row>
      </Col>
      {currentUserId === userId && (
        <Col className="operate">
          <Dropdown
            overlay={
              <Menu onClick={(e) => onDelete(e)}>
                <Menu.Item key="delete">删除</Menu.Item>
              </Menu>
            }
          >
            <EllipsisOutlined />
          </Dropdown>
        </Col>
      )}
    </Row>
  );
};

export default SingleTwitterComponent;
