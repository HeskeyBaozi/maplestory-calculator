export const routes = [
  { path: '/', redirect: '/calculator' },
  {
    path: '/calculator',
    name: 'calculator',
    icon: 'calculator',
    routes: [
      {
        path: '/calculator',
        redirect: '/calculator/profile',
      },
      {
        path: '/calculator/profile',
        name: 'profile',
        icon: 'idcard',
        component: '@/pages/Calculator/Profile/form',
      },
    ],
  },
];
