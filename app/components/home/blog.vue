<script setup lang="ts">
import type { Posts } from '~/types';


const header = {
  title: "Our Blog",
  subtitle: "Latest Tech Updates",
}
defineProps<{
    blog: Posts | [];
}>();
</script>
<template>
  <NuxtLayout name="section" v-bind="header" >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <BlogCard
        v-for="item in blog"
        :key="item.title"
        v-bind="item"
      />
    </div>
    
    <div class="text-center">
      <Button size="lg">
        View All Articles
      </Button>
    </div>
  </NuxtLayout>
</template>