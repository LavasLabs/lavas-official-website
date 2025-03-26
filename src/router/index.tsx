import { createBrowserRouter, Navigate } from 'react-router-dom';
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
      // volcano-card 重定向到首页
      {
        path: '/volcano-card',
        element: <Navigate to="/" replace />,
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
        path: '/services-terms',
        lazy: async () => {
          const { default: Component } = await import('../pages/Term');
          return { Component };
        }
      },
      {
        path: '/blog',
        lazy: async () => {
          const { default: Component } = await import('../pages/Blog');
          return { Component };
        }
      },
      {
        path: '/contact',
        lazy: async () => {
          const { default: Component } = await import('../pages/Contact');
          return { Component };
        }
      },
      {
        path: '/partner',
        lazy: async () => {
          const { default: Component } = await import('../pages/Partner');
          return { Component };
        }
      },
      {
        path: '/credit',
        lazy: async () => {
          const { default: Component } = await import('../pages/Credit');
          return { Component };
        }
      },
      // 处理 404，将所有未匹配的路由重定向到首页
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;