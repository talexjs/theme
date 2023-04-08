import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import LayoutPage from './theme/LayoutPage.vue';
import TimelinePage from './theme/TimelinePage.vue';
export const Themes: Theme = {
  ...DefaultTheme,
  Layout: LayoutPage,
  // eslint-disable-next-line
  enhanceApp(ctx: { app: { component: (arg0: string, arg1: any) => void } }) {
    ctx.app.component('TimelinePage', TimelinePage);
  },
};
export default Themes;
