<template>
  <div class="flex items-center" >
    <Star v-for="n in rating" :key="n" color="#ffd900" fill="#ffd900" :size="15" />
    <span class="ml-2 text-yellow-500">({{ total }})</span>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';

defineProps<{
  rating: number,
  total: number
}>()
</script>
