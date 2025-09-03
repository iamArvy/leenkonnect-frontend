<script setup lang="ts" >
import Autoplay from 'embla-carousel-autoplay'
import type { Services } from '@/types';
const router = useRouter();
defineProps<{
 services: Services| null
}>();

const header = {
  title: "Our Services",
  subtitle: "What We Offer",
}
const carouselData = {
  plugins: [
    Autoplay({
      delay: 3000,
    })
  ],
  opts: {
    loop: true,
  }
}
</script>
<template>
  <NuxtLayout name='section' v-bind="header">
    <div>
      <Carousel
        class="w-full px-5"
        v-bind="carouselData"
      >
        <CarouselContent>
          <CarouselItem
            v-for="{id, name, summary} in services"
            :key="id"
            class="pl-10 basis-1/1 md:basis-1/2 lg:basis-1/3"
          >
            <div
              class="flex flex-col gap-4 p-8 rounded-md min-h-[300px] cursor-pointer text-white bg-primary"
              @click="router.push(`/services#${name}`)" >
                <!-- <figure>
                    <img :src="service.image" alt="">
                </figure> -->
                <h3 class="text-xl font-bold">{{ name }}</h3>
                <p>{{ summary }}</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <!-- do pagination -->
      </Carousel>
      <div class="mt-4 flex justify-center items-center">
        <LinkButton size="lg" :link="{ to: '/services' }"> View Services </LinkButton>
      </div>
    </div>
    
  </NuxtLayout>
</template>