<script setup lang="ts">
import { stats } from './data';
</script>

<template>
  <Section class="grid md:grid-cols-4 sm:grid-cols-2 gap-3" >
      <div v-for="stat in stats" class="flex flex-col items-center justify-center gap-2" data-aos="fade-up" >
          <h2 class="font-bold text-3xl text-primary" >{{ stat.title }}</h2>
          <h3 class="text-2xl"> {{ stat.value }} </h3>
      </div>
  </Section>
</template>