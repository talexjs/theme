<template>
  <Layout v-if="!page.isNotFound">
    <template #aside-outline-before> My custom sidebar top content </template>
  </Layout>
  <div v-else>Custom 404ss page!</div>
</template>
<script lang="ts" setup>
import Theme from 'vitepress/theme';
import { useData } from 'vitepress';
const { Layout } = Theme;
const { page, frontmatter } = useData();
console.log('page', page, frontmatter);
</script>
