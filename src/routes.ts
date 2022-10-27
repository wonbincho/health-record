import { lazy } from 'react';

export const ROUTE_PATH: {
  [key: string]: any;
} = {
  HOME: {
    path: '/',
    url: '/',
    name: 'home',
    title: '홈',
  },
  ROUTINE: {
    path: '/routine',
    url: '/',
    name: 'routine',
    title: '루틴',
  },
};

export const routes = [
  {
    ...ROUTE_PATH.HOME,
    exact: true,
    component: lazy(() => import('@src/pages/Home')),
  },
  {
    ...ROUTE_PATH.ROUTINE,
    exact: true,
    component: lazy(() => import('@src/pages/Routine')),
  },
];
