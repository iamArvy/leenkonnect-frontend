<template>
  <Carousel
    class="w-full px-5"
    v-bind="carouselData"
  >
    <CarouselContent>
      <CarouselItem
        v-for="product in products"
        :key="product.id" class="pl-10 basis-1/2 md:basis-1/3 lg:basis-1/5"
      >
        <ProductCard v-bind="product" />
      </CarouselItem>
    </CarouselContent>
  </Carousel>

</template>

<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import type { Products } from '@/types';

defineProps<{
 products: Products
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
