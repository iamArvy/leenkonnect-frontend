<script setup lang="ts">
import { hero, section } from './data';
</script>

<template>
    <NuxtLayout name="section" >
      <div class="mt-6 flex flex-col gap-6 sm:grid grid-cols-2 sm:gap-6 ">
          <div class="flex flex-col gap-4">
              <h2 class="text-2xl font-bold" data-aos="fade-up">{{ section.header }}</h2>
              <p data-aos="fade-up">{{ section.description }}</p>
              <figure data-aos="fade-right">
                  <img :src="section.image" alt="" class="w-full h-full" />
              </figure>
          </div>
          <ConsultationForm data-aos="fade-left" />
      </div>
    </NuxtLayout>
</template>

<style>
/* Add your styles here */
</style>
