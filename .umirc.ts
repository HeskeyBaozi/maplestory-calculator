import { defineConfig } from 'umi';
import { routes } from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    chrome: 49,
  },
  routes,
  fastRefresh: {},
  links: [
    {
      rel: 'shortcut icon',
      href: '/images/logo.png',
      type: 'image/x-icon',
    },
  ],
  layout: {
    name: 'MapleStory Calculator',
    layout: 'mix',
    locale: true,
    navTheme: 'light',
    headerTheme: 'light',
    breakpoint: 'xl',
    // splitMenus: true,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
  },
  theme: {
    '@primary-color': '#2f54eb',
  },
});
