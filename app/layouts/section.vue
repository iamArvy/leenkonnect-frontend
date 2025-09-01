<script setup lang="ts" >
defineProps<{
    title: string;
    subtitle?: string;
}>();
</script>
<template>
  <section>
    <div class="container mx-auto py-15 min-h-100vh flex flex-col gap-6">
      <div class="text-center">
        <h2 class="text-md md:text-lg font-bold" > {{ title }} </h2>
        <p class="text-2xl md:text-4xl font-bold text-primary">{{ subtitle }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>