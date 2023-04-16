import { Config } from './config/defineConfig';
import type { UserConfig, DefaultTheme } from 'vitepress';
export const defineConfig = (options: UserConfig<DefaultTheme.Config> = {}) => {
  return Config(options);
};
