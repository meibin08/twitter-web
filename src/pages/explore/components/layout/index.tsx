import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// import { useMount } from 'ahooks';
// import cookie from '@/utils/cookie';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clsPrefix } from '@/utils/tools';
import './layout.scss';

const prefixCls = 'explore-layout';
const clsName = clsPrefix(prefixCls);

const navList = [
  {
    title: '为您推荐',
    url: '/explore/for-you',
  },
  {
    title: '趋势',
    url: '/explore/trending',
  },
  {
    title: '新闻',
    url: '/explore/news',
  },
  {
    title: '体育',
    url: '/explore/sporty',
  },
  {
    title: '娱乐',
    url: '/explore/entertainment',
  },
];
const ExploreLayout = () => {
  return (
    <div className={prefixCls}>
      <header className={clsName('hd')}>
        <div className={clsName('bar')}>
          <Input className={clsName('bar-search')} placeholder="搜索 Twitter" prefix={<SearchOutlined />} />
        </div>
        <nav className={clsName('nav')}>
          {navList.map((item, i) => {
            return (
              <NavLink caseSensitive={true} key={`explore${i}`} to={item.url}>
                {item.title}
              </NavLink>
            );
          })}
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default ExploreLayout;
