<script setup lang="ts">
import { mockFetchPost } from '~/mocks/blog';

const {params} = useRoute();
const { data: post } = await useAsyncData(
  `post-${params.slug}`,
  () => mockFetchPost(params.slug as string)
);
const heroData = {
    title: post.value?.title ?? '',
    description: post.value?.description ?? '',
    bg: post.value?.image ?? ''
}
</script>
<template>
  <main>
    <HeroSection
      v-if="post"
      v-bind="heroData"
    />
    <BlogArticle :content="post?.content ?? ''" />
  </main>
</template>