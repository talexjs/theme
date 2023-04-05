import * as esbuild from 'esbuild';
import sass from 'esbuild-plugin-sass';
import esbuildPluginTsc from 'esbuild-plugin-tsc';
import vuePlugin from 'esbuild-plugin-vue3';
import { resolve } from 'path';
const build = async () => {
  await esbuild.build({
    entryPoints: [resolve(__dirname, '../src/index.ts')],
    plugins: [sass(), esbuildPluginTsc(), vuePlugin()],
    bundle: true,
    minify: true,
    sourcemap: true,
    keepNames: true,
    treeShaking: true,
    packages: 'external',
    chunkNames: 'chunks/[name]-[hash]',
    loader: { '.js': 'tsx' },
    tsconfig: 'tsconfig.json',
    mainFields: ['module', 'main'],
    resolveExtensions: ['.ts', '.js', '.vue'],
    drop: ['debugger', 'console'],
    outdir: 'dist',
    format: 'esm',
  });
};

build();
