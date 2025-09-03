<script setup lang="ts" >
defineProps<{content: string}>()
</script>
<template>
  <NuxtLayout name="section" >
    <article v-html="content" class="prose min-w-full lg:prose-lg xl:prose-xl mx-auto my-10" ></article>
  </NuxtLayout>
</template>