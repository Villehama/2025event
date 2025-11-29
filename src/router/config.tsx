
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const EventPage = lazy(() => import('../pages/event/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/event',
    element: <EventPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
