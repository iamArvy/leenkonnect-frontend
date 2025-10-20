<template>
  <div class="flex items-center">
    <Star v-for="n in 5" :key="n" class="w-3.5 h-3.5"
      :class="n <= rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-400 text-gray-400'" />
    <span class="ml-2 text-xs">({{ total }})</span>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';

defineProps<{
  rating: number,
  total: number
}>()
</script>
