import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import LayoutPage from './components/LayoutPage.vue';
import TimelinePage from './components/TimelinePage.vue';
export const RecoTheme: Theme = {
  ...DefaultTheme,
  Layout: LayoutPage,
  // eslint-disable-next-line
  enhanceApp(ctx: { app: { component: (arg0: string, arg1: any) => void } }) {
    ctx.app.component('TimelinePage', TimelinePage);
  },
};
export default RecoTheme;
