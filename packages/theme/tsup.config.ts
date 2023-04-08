import { defineConfig } from 'tsup';
// import vuePlugin from 'esbuild-plugin-vue3';
export default defineConfig({
  entry: ['src/index.ts'],
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
});
