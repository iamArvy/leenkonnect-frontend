<script setup lang="ts">
import type { Services } from '.';

defineProps<{
    services: Services
}>()
</script>


<template>
  <NuxtLayout name="section">
    <div
      class="container md:flex my-4 gap-2 even:flex-row-reverse"
      v-for="{id, name, content, image} in services"
      :key="id"
      :id="name" >
      <div
          data-aos="fade-right"
          class="hidden md:flex items-center text-center justify-center bg-primary md:w-1/2 bg-cover bg-center text-white"
          :style="{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url('${image}')` }">
          <h1 class="text-2xl font-bold" >{{ name }}</h1>
      </div>
      <h1 class="text-center md:hidden font-bold text-2xl" data-aos="fade-down">{{ name }}</h1>
      <p class="p-2 md:w-1/2" data-aos="fade-left">{{ content }}</p>
    </div>
  </NuxtLayout>
</template>
