<script setup lang="ts" >
import { about } from './data';

</script>
<template>
  <NuxtLayout name="section" v-for="data in about" >
    <div class="md:grid grid-cols-4"> </div>
    <h1 class=" font-bold text-xl text-right justify-self-center items-center flex capitalize w-fit flex-1 bg-gradient-cta bg-clip-text text-transparent" data-aos="fade-right" >
        {{ data.title }}
    </h1>
    <p class="col-span-3" data-aos="fade-left" >
        {{ data.description }}
    </p>
  </NuxtLayout>
</template>