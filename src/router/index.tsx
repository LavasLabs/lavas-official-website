import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Component } = await import('../pages/Home');
          return { Component };
        },
      },
      {
        path: '/corporate-card',
        lazy: async () => {
          const { default: Component } = await import('../pages/CorporateCard');
          return { Component };
        },
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
        lazy: async () => {
          const { default: Component } = await import('../pages/Expense');
          return { Component };
        },
      },
      {
        path: '/advertising',
        lazy: async () => {
          const { default: Component } = await import('../pages/Advertising');
          return { Component };
        }
      },
      {
        path: '/term',
        lazy: async () => {
          const { default: Component } = await import('../pages/Term');
          return { Component };
        }
      },
    ],
  },
]);

export default router;