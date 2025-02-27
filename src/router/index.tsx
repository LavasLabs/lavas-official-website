import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        lazy: () => import('../pages/Home'),
      },
      {
        path: '/corporate-card',
        lazy: () => import('../pages/CorporateCard'),
      },
      {
        path: '/travel',
        lazy: async () => {
          const { default: Component } = await import('../pages/Travel');
          return { Component };
        },
      },
      {
        path: '/expense',
        lazy: () => import('../pages/Expense'),
      },
      {
        path: '/advertising',
        lazy: () => import('../pages/Advertising'),
      },
    ],
  },
]);

export default router;