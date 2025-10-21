<script setup lang="ts">
import { ArrowRight, Calendar } from 'lucide-vue-next';

</script>

<template>
  <div
    class="w-full bg-gradient-cta min-h-[400px] text-white text-center flex flex-col justify-center items-center gap-4 px-4">
    <div class="container text-white text-center flex flex-col justify-center items-center gap-4 max-w-2xl">
      <h1 class="text-2xl md:text-3xl font-bold" data-aos="fade-up">
        Ready to Transform Your Business?
      </h1>
      <p class="text-lg md:text-xl" data-aos="fade-up">
        Schedule a free consultation with our experts and discover how we can help your business thrive in the digital
        age.
      </p>
      <br />
      <Button size="lg" @click="navigateTo('/booking')" variant="secondary" class="text-primary" data-aos="fade-up">
        <Calendar />
        Book Your Free Consultation
        <ArrowRight />
      </Button>
    </div>
  </div>
</template>