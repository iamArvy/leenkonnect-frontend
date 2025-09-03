<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import type { Services } from '.';
const router = useRouter();
defineProps<{
 services: Services
}>();

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
  <Carousel
    class="w-full px-5"
    :plugins="carouselData.plugins"
    :opts="carouselData.opts"
    :services
  >
    <CarouselContent>
      <CarouselItem
        v-for="{id, name, summary} in services"
        :key="id"
        class="pl-10 basis-1/2 md:basis-1/3 lg:basis-1/5"
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
  </Carousel>

</template>