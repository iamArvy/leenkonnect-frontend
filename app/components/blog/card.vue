<script setup lang="ts">
import { ArrowRight, Calendar } from 'lucide-vue-next';
import type { Post } from '~/types';

defineProps<Post>()
</script>
<template>
  <article
    class="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300"
  >
    <div class="relative overflow-hidden">
      <NuxtImg 
        :src="image" 
        :alt="title"
        class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    
    <div class="p-6">
      <div class="flex items-center text-muted-foreground font-inter text-sm mb-3">
        <Calendar class="w-4 h-4 mr-2" />
        {{ createdAt }}
      </div>
      
      <h3 class="font-playfair text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
        {{ title }}
      </h3>
      
      <p class="font-inter text-muted-foreground leading-relaxed mb-4">
        {{ description }}
      </p>
      <NuxtLink :to="'blog/'+ slug" >
        <Button variant="ghost" class="p-0 text-primary h-auto font-medium group">
          Read More
          <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </NuxtLink>
    </div>
  </article>
</template>