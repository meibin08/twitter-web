import type { RouteObject } from 'react-router-dom';

export type RoutesObject = {
  auth?: boolean;
  name?: string;
  uid?: string;
  path?: string;
  children?: RoutesObject[];
} & RouteObject;
