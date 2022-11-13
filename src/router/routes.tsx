import React from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesObject } from '@/domains/routes';
import PagesRouter from '@/src/pages/route';
import RootComponent from '../components/app/index';

const routes: RoutesObject[] = [
  {
    path: '/',
    element: <RootComponent />,
    children: [{ index: true, element: <Navigate to={'/explore'} replace /> }, ...PagesRouter],
  },
];
export default routes;
