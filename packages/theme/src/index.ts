import { Config } from './config/DefineConfig';
import type { UserConfig, DefaultTheme } from 'vitepress';
export const defineConfig = (options: UserConfig<DefaultTheme.Config> = {}) => {
  return Config(options);
};

// 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