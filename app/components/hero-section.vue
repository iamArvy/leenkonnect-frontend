<script setup lang="ts">
import { computed } from 'vue';

interface Hero {
    title: string;
    description: string;
    bg: string;
};
const {title, description, bg} = defineProps<Hero>();
const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('${bg}')`
}));
</script>
<template>
  <section
    class="w-full bg-primary bg-no-repeat bg-cover bg-opacity-10 bg-center min-h-[70svh] flex flex-col justify-center items-center text-white"
    :style="backgroundStyle"
    >
    <div class="container mx-auto px-6">
        <div class="text-center mb-8 max-w-4xl mx-auto">
            <h1 class="font-playfair text-4xl md:text-5xl font-semibold  mb-4">
                {{ title }}
            </h1>
            <p class="font-inter text-lg max-w-2xl mx-auto">
                {{ description }}
            </p>
        </div>
    </div>
</section>
</template>
