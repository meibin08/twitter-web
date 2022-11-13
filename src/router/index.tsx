import React from 'react';
import { useAsyncEffect } from 'ahooks';
import { RouteObject, useRoutes, useMatch, useLocation, useNavigate } from 'react-router-dom';
import cookie from '@/utils/cookie';
import { uuid } from '@/utils/tools';
import { RoutesObject } from '@/domains/routes';
import rootRouter from './routes';

function routerFlat(routes: RoutesObject[], path = '') {
  return routes.reduce((result, route: RoutesObject) => {
    const nextRoute = { ...route, uid: uuid() };
    if (path && nextRoute.path) {
      nextRoute.path = `${path}/${nextRoute.path}`.replace(/\/\//g, '/');
    }

    const { children = [], ...other } = nextRoute;
    // @ts-ignore
    result.push(other);
    if (children.length) {
      const childrenResult = routerFlat(children, nextRoute.path) || [];
      result = result.concat(childrenResult);
    }
    return result;
  }, []);
}
const routerFlatMap = routerFlat(rootRouter);
// console.log('route1 ', routerFlatMap);
const RoutesConfig = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMatch = useMatch(location.pathname);
  const toFriendlyPage = () => navigate(`/explore/for-you`, { replace: true });
  useAsyncEffect(async () => {
    const token = cookie.get('token');
    if (isMatch) {
      /* ---------!!!!!!- 默认 auth：true, 都要授权,不授权，请在路由中指定 auth = false ---------- */
      const { auth = true } = routerFlatMap.find((k: RouteObject) => k.path === isMatch.pathname) || { auth: true };
      if (auth && !token) {
        return toFriendlyPage();
      }
    } else {
      return toFriendlyPage();
    }
  }, [navigate]);
  return useRoutes(rootRouter);
};
export default RoutesConfig;
