import { defineConfig } from 'tsup';
import pluginVue from 'esbuild-plugin-vue-next';
export default defineConfig({
  entry: ['./src/index.ts', './src/theme.ts'],
  external: ['vitepress', 'vue'],
  format: ['cjs', 'esm'],
  shims: true,
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  bundle: true,
  target: 'esnext',
  esbuildPlugins: [pluginVue()],
});
