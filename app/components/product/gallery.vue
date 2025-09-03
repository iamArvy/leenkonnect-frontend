<template>
    <Carousel
      class="w-full px-5"
      v-bind="carouselData"
    >
      <CarouselContent>
        <CarouselItem
          v-for="item in gallery"
          :key="item" class="pl-10 basis-1/1"
        >
          <figure class="px-4 w-full h-[300px] overflow-hidden flex items-center ">
              <img :src="item" :alt="item" class="rounded-xl h-full w-full" />
          </figure>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <!-- <div>
        <swiper v-bind="swiperOptions">
            <swiper-slide v-for="(image, index) in images" :key="index">
        <figure class="px-4 w-full h-[300px] overflow-hidden flex items-center ">
            <img :src="image" :alt="image" class="rounded-xl h-full w-full" />
        </figure>
            </swiper-slide>
        </swiper>
    </div> -->
</template>

<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay';
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

defineProps<{
  gallery: string[]
}>()
// Check for pagination plug in
const carouselData = {
  plugins: [
    Autoplay({
      delay: 2500,
    }),
  ],
  opts: {
    loop: true,
  }
}
</script>

<style scoped>
</style>
