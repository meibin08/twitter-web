import React from 'react';
import loadable from '@loadable/component';
import { DevTips } from '@/components/common';
import { RoutesObject } from '@/domains/routes';
const ExploreLayout = loadable(() => import(/* webpackPrefetch: true */ './components/layout'));
const ExplorePage = loadable(() => import(/* webpackPrefetch: true */ './index'));

const routes: RoutesObject[] = [
  {
    path: 'explore',
    name: 'Explore',
    element: <ExploreLayout />,
    children: [
      { index: true, element: <ExplorePage /> },
      {
        path: 'for-you',
        element: <ExplorePage />,
        name: '为你推荐',
        auth: false,
      },
      {
        path: 'sporty',
        element: <DevTips />,
        name: '体育',
        auth: false,
      },
      {
        path: 'trending',
        element: <DevTips />,
        name: '趋势',
        auth: false,
      },
      {
        path: 'news',
        element: <DevTips />,
        name: '新闻',
        auth: false,
      },
      {
        path: 'entertainment',
        element: <DevTips />,
        name: '娱乐',
        auth: false,
      },
    ],
    auth: false,
  },
];
export default routes;
