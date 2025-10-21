<script setup lang="ts">
import { ArrowRight, Calendar } from 'lucide-vue-next';
import type { Post } from '~/interfaces';
defineProps<Post>()
</script>
<template>
  <Card
    class="py-0 overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group animate-fade-in">
    <div class="relative overflow-hidden aspect-video">
      <img :src="image" :alt="title" loading="lazy"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <Badge
        class="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        {{ category?.name }}
      </Badge>
    </div>
    <div class="pb-3 px-3">
      <h3 class="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
        {{ title }}
      </h3>
      <p class="text-muted-foreground mb-4 line-clamp-2">
        {{ excerpt }}
      </p>
      <div class="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div class="flex items-center">
          <Calendar class="w-4 h-4 mr-1" />
          {{ createdAt }}
        </div>
      </div>
      <NuxtLink :to="`/blog/${id}`"
        class="text-primary hover:text-primary-hover inline-flex items-center font-medium group/link">
        Read More
        <ArrowRight class="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
      </NuxtLink>
    </div>
  </Card>
</template>