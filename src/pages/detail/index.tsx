import React from 'react';
import { Avatar, Row, Col, Input, Button } from 'antd';
import { UserOutlined, PictureOutlined, FileGifOutlined } from '@ant-design/icons';
import { getNewDataDetail } from '@/store/news';
import { useParams } from 'react-router-dom';
import { useMount } from 'ahooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clsPrefix } from '@/utils/tools';
import { ExploreBaseInfo, PageHeaderBar } from '@/components/common';

import './detail.scss';

const prefixCls = 'detail-page';
const clsName = clsPrefix(prefixCls);

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const newDetail = useAppSelector((states) => {
    const {
      news: { newDetail },
    } = states;
    return newDetail;
  });
  useMount(() => {
    dispatch(getNewDataDetail(id as string));
  });
  return (
    <div className={prefixCls}>
      <PageHeaderBar title="推文" />
      <div className={clsName('cover')} style={{ backgroundImage: `url(https://pbs.twimg.com/media/FglSaREWYAInXps?format=jpg&name=medium)` }}>
        <img src="https://pbs.twimg.com/semantic_core_img/1585691812475305994/tTb2yctr?format=jpg&name=medium" alt="" />
      </div>
      <div className={clsName('content')}>
        <ExploreBaseInfo className={clsName('base')} data={{ date: newDetail.date, name: newDetail?.user?.loginName }} />
        <div className="detail">{newDetail.content}</div>
        <div className="intro"></div>
      </div>
      <Row className={clsName('comment')} align="middle">
        <Col>
          <Avatar size={50} icon={<UserOutlined />} />
        </Col>
        <Col flex={1} className="input">
          <Input size="large" placeholder="Tweet about #Election2022" disabled />
        </Col>
        <Col flex="40px">
          <Button type="primary" shape="circle" icon={<PictureOutlined size={22} />} />
        </Col>
        <Col flex="40px">
          <Button type="primary" shape="circle" ghost icon={<FileGifOutlined size={22} />} />
        </Col>
      </Row>
    </div>
  );
};

export default DetailPage;
