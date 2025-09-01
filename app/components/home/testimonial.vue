<script setup lang="ts">
import type { Testimonials } from '~/types';

const header = {
  title: 'What Our Clients Say',
  subtitle: 'Real stories from our satisfied customers',
}
defineProps<{ testimonials?: Testimonials }>()
</script>
<template>
  <NuxtLayout name="section" v-bind="header">
    <div class="flex flex-col sm:grid grid-cols-2 gap-7 my-8">
      <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          v-bind="testimonial"
          data-aos="fade-up"
      />
  </div>
  </NuxtLayout>
</template>