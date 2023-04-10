<template>
  {{ frontmatter.layout }}
  <Layout>
    <!-- ===========总是============== -->
    <template #layout-top>1010</template>
    <template #layout-bottom>222</template>
    <template #nav-bar-title-before>333</template>
    <template #nav-bar-title-after>444</template>
    <template #nav-bar-content-before>555</template>
    <template #nav-bar-content-after>666</template>
    <template #nav-screen-content-before>777</template>
    <template #nav-screen-content-after>888</template>
    <!-- ===========layout: 'page'============== -->
    <template #page-top>999</template>
    <template #page-bottom>aaa</template>
    <!-- ===========layout: 'home'============== -->
    <template #home-hero-before>bbb</template>
    <template #home-hero-info>ccc</template>
    <template #home-hero-image>ddd</template>
    <template #home-hero-after>eee</template>
    <template #home-features-before>fff</template>
    <template #home-features-after>ggg</template>
    <!-- ===========layout: 'doc'============== -->
    <template #doc-top>hhh</template>
    <template #doc-bottom>iii</template>
    <template #doc-footer-before>jjj</template>
    <template #doc-before>kkk</template>
    <template #doc-after>lll</template>
    <template #sidebar-nav-before>mmm</template>
    <template #sidebar-nav-after>nnn</template>
    <template #aside-top>ooo</template>
    <template #aside-bottom>ppp</template>
    <template #aside-outline-before>qqq</template>
    <template #aside-outline-after>rrr</template>
    <template #aside-ads-before>sss</template>
    <template #aside-ads-after>ttt</template>
  </Layout>
</template>
<script lang="ts" setup>
import Theme from 'vitepress/theme';
import { useData } from 'vitepress';
const { Layout } = Theme;
const { page, frontmatter } = useData();
console.log('page', page, frontmatter);
</script>
