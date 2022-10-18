const routes = [
  {
    path: '/',
    component: '@/layouts/AppLayout',
    routes: [
      {
        path: '/login',
        wrappers: ['@/layouts/LoginLayout'],
        component: 'login',
      },
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          { path: '/', redirect: '/dashboard' },
          { path: '/dashboard', component: 'dashboard' },
          { path: '/404', component: '404' },
          { path: '*', component: '404' },
        ],
      },
    ],
  },
];

export default routes;
