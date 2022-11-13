import React from 'react';
import { Row, Col } from 'antd';
import { clsPrefix } from '@/utils/tools';
import { ExploreBaseInfo } from '@/components/common';
import { getExploreData } from '@/utils/mockData';
import './explore.scss';

const prefixCls = 'explore-page';
const clsName = clsPrefix(prefixCls);

const lists = Array.from({ length: 10 }).map(() => getExploreData());
const ExplorePage = () => {
  return (
    <div className={prefixCls}>
      <div className={clsName('focalpoint')} style={{ backgroundImage: `url(https://pbs.twimg.com/media/FglSaREWYAInXps?format=jpg&name=medium)` }}>
        <img src="https://pbs.twimg.com/media/FglSaREWYAInXps?format=jpg&name=medium" alt="" />
        <div className={clsName('focalpoint-core')}>
          <ExploreBaseInfo className="user-base" data={{ name: '苏北', date: '11-11 22:00' }} />
          <h4>What causes Alzheimer's? Study puts leading theory to 'ultimate test'</h4>
        </div>
      </div>
      <div className={clsName('list')}>
        {lists.map((k) => {
          return (
            <Row className="row-single" justify="space-between" key={`k${k.id}`}>
              <Col className="explore-info">
                <ExploreBaseInfo className="user-base" data={k} />
                <h6>{k.summary}...</h6>
              </Col>
              <Col className="thumbnail">
                <p style={{ backgroundImage: `url(${k.thumbnail})` }}>
                  <img src={k.thumbnail} alt="" />
                </p>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
