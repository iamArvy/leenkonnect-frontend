<script setup lang="ts">
import type { Product } from '~/interfaces';
const { params } = useRoute();
const { data: product, error } = useFetch<Product>(() => `/api/products/${params.slug}`)
if (error.value) {
  const { statusCode, statusMessage } = error.value
  throw createError({ statusCode, statusMessage })
}
const { settings, emblaMainApi, selectedIndex } = usePropertyGallery();

</script>
<template>
  <main class="container mx-auto space-y-6 mb-6 px-4">
    <section class="md:grid grid-cols-3 gap-6 sm:gap-4" v-if="product">
      <Carousel v-bind="settings" @init-api="(val) => emblaMainApi = val" class="relative group" data-aos="fade-right">
        <div
          class="absolute z-5 w-full top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center justify-between px-2 transition-all ease-in-out duration-500">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          <CarouselItem v-for="image in product.gallery" :key="image">
            <figure class="relative overflow-hidden rounded-2xl md:aspect-[2/1] lg:aspect-video">
              <img :src="image" alt="" class="w-full object-cover">
              <div class="flex space-x-2 w-full justify-center mt-2 absolute bottom-2">
                <span v-for="(_, index) in product.gallery" :key="index" class="p-1 w-2 h-2 rounded-full"
                  :class="index === selectedIndex ? 'bg-primary w-5' : 'bg-white'" />
              </div>
            </figure>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div class="flex flex-col gap-1 sm:gap-2 w-full col-span-2 p-2">
        <h1 class="text-xl sm:text-3xl capitalize font-bold" data-aos="fade-up">{{ product.name }}</h1>
        <Price :price="product.price" data-aos="fade-up" />
        <p class="text-gray flex-1" data-aos="fade-up">{{ product.description }}</p>
        <Ratings v-bind="{ rating: 4, total: 500 }" />
        <div class="flex justify-end">
          <CartButton :product="product" class="md:w-[300px] w-full" />
        </div>
      </div>
    </section>
    <section class="space-y-3">
      <h2 class="font-bold">More Information</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="item in product?.features" :key="item.value" class="flex flex-col">
          <h3 class="font-semibold text-base capitalize">{{ item.name }}</h3>
          <p>{{ item.value }}</p>
        </div>
      </div>
    </section>
  </main>
</template>