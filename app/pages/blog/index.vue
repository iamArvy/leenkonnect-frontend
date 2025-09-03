<script setup lang="ts" >
import { getMockedPosts } from '~/mocks/blog';
import type { Posts } from '~/types';

const { query } = useRoute();
const { data: posts } = await useAsyncData<Posts>(
  async () => getMockedPosts(),
  { watch: [() => query] } // refetch whenever query changes
)
</script>
<template>
  <main class="container mx-auto my-4 px-4 space-y-5" >
    <BlogControl />
    <BlogCatalogue :posts="posts ?? []" />
  </main>
</template>