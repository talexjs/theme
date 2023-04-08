import { defineConfig as DefaultConfig } from 'vitepress';
import type { UserConfig, DefaultTheme } from 'vitepress';

const _defaultConfig = {
  title: '@talexjs/theme',
  description: '@talexjs/theme的使用说明',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
};

export const Config = (options: UserConfig<DefaultTheme.Config>) =>
  DefaultConfig(Object.assign(_defaultConfig, options));
