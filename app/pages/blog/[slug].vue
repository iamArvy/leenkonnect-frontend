<script setup lang="ts">
const { params } = useRoute();
const { data: post } = await useFetch('/api/blog/:id', { params })
const heroData = {
  title: post.value?.title ?? '',
  description: post.value?.excerpt ?? '',
  bg: post.value?.image ?? ''
}
</script>
<template>
  <main>
    <HeroSection v-if="post" v-bind="heroData" />
    <section class="container mx-auto">
      <article v-html="post?.content" class="prose min-w-full lg:prose-lg xl:prose-xl mx-auto my-10"></article>
    </section>
  </main>
</template>