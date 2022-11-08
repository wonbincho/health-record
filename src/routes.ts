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
  HEALTH: {
    path: '/health',
    url: '/',
    name: 'health',
    title: '운동',
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
  {
    ...ROUTE_PATH.HEALTH,
    exact: true,
    component: lazy(() => import('@src/pages/Health')),
  },
];
