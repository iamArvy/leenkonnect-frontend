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
  <main>
    <HeroSection v-bind="hero" />
    <section class="py-10">
      <div class="container mx-auto px-4">
        <Accordion type="single" collapsible>
          <AccordionItem v-for="service in services?.items" :key="service.id" :value="service.id">
            <AccordionTrigger class="px-3 md:text-lg lg:text-xl font-bold">{{ service.name }}</AccordionTrigger>
            <AccordionContent class="px-3 py-2 md:text-lg">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    <HomeCta />
  </main>
</template>