import React from 'react';
import { Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import { RoutesObject } from '@/domains/routes';
import ExploreRoute from './explore/route';
import { DevTips } from '@/components/common';
import cookie from '@/utils/cookie';

const DetailPage = loadable(() => import(/* webpackPrefetch: true */ './detail'));
const HomePage = loadable(() => import(/* webpackPrefetch: true */ './home'));
const MinePage = loadable(() => import(/* webpackPrefetch: true */ './mine'));

const createTipsRoute = ['notice', 'email', 'bookmark', 'list', 'more', 'setting'].map((item) => ({ path: item, element: <DevTips />, name: item, auth: false }));
const routes: RoutesObject[] = [
  ...ExploreRoute,
  ...createTipsRoute,
  {
    path: 'tweet/:id',
    element: <DetailPage />,
    name: '详情',
  },
  {
    path: 'home',
    element: <HomePage />,
    name: '首页',
  },
  {
    path: 'mine',
    auth: false,
    name: '个人中心',
    children: [
      { index: true, element: <Navigate to={`/mine/${cookie.get('loginName') || ''}`} replace /> },
      {
        path: ':id',
        auth: false,
        element: <MinePage />,
        name: '个人中心',
      },
    ],
  },
];
export default routes;
