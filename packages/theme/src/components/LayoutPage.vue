<template>
  <Layout>
    <template #layout-top>111</template>
    <template #layout-bottom>222</template>
    <template #nav-bar-title-before>333</template>
    <template #nav-bar-title-after>444</template>
    <template #nav-bar-content-before>555</template>
    <template #nav-bar-content-after>666</template>
    <template #nav-screen-content-before>777</template>
    <template #nav-screen-content-after>888</template>
  </Layout>
</template>
<script lang="ts" setup>
import Theme from 'vitepress/theme';
import { useData } from 'vitepress';
const { Layout } = Theme;
const { page, frontmatter } = useData();
console.log('page', page, frontmatter);
</script>
