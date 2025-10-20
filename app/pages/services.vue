<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next';

useAppTitle('Services')
const hero = {
  title: "Our Services",
  description: "Discover the range of services we offer to help you achieve your goals",
  bg: "/images/consultationimg.png"
};
const { data: services } = useFetch('/api/services');
</script>
<template>
  <HeroSection v-bind="hero" />
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services?.items" :key="index"
          class="border-unset gap-0 py-0 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in"
          :style="{ animationDelay: `${index * 100}ms` }">
          <h3 class="text-2xl font-bold mb-4">{{ service.name }}</h3>
          <p class="text-muted-foreground mb-6">
            {{ service.summary }}
          </p>
          <ul class="space-y-3 mb-6">
            <li v-for="feature in service.features" :key="feature" class="flex items-start">
              <Check class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <NuxtLink :href="service.wikiLink" rel="noreferrer" target="_blank"
            class="w-full bg-gradient-cta bg-clip-text font-bold group flex items-center">
            Learn More
            <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-gradient-cta">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center text-white animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Need a Custom Solution?
        </h2>
        <p class="text-xl mb-8 text-white/90">
          Let's discuss your unique requirements and create a tailored IT
          strategy for your business.
        </p>
        <Button size="lg" class="bg-white text-primary hover:bg-white/90">
          Schedule a Consultation
          <ArrowRight class="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  </section>
</template>