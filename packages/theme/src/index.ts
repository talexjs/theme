import { Config } from './config/DefineConfig';
import type { UserConfig, DefaultTheme } from 'vitepress';
export const defineConfig = (options: UserConfig<DefaultTheme.Config> = {}) => {
  return Config(options);
};
