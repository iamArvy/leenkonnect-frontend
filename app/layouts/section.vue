<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>
<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold"> {{ title }} </h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">{{ subtitle }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>