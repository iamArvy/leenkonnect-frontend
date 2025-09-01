<template>
  <div class="flex" >
    <Star v-for="n in rating" :key="n" color="#ffd900" fill="#ffd900" :size="15" />
    <!-- <Icon icon="material-symbols:star" width="16" height="16"  style="color: #ffd900" v-for="n in rating" :key="n" /> -->
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';

const props = defineProps<{
  rating: number // Rating out of 5
}>()
</script>
