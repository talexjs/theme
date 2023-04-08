import { defineConfig as DefaultConfig } from 'vitepress';

export const Config = () =>
  DefaultConfig({
    title: 'docs',
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
  });
