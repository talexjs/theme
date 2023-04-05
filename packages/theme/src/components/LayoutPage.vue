<template>
  <h1>Custom Layout!</h1>
  <Layout>
    <template #aside-outline-before> My custom sidebar top content </template>
  </Layout>
  <div v-if="frontmatter.layout === 'home'">Custom home page!</div>
  <div v-if="page.isNotFound">Custom 404 page!</div>
  <Content v-else />
</template>
<script lang="ts" setup>
import Theme from 'vitepress/theme';
import { useData } from 'vitepress';
const { Layout } = Theme;
const { page, frontmatter } = useData();
</script>
