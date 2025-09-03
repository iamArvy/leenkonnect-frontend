<script setup lang="ts" >
import type { Product } from '~/types';

defineProps<Product>()
</script>
<template>
  <section class="container mx-auto md:grid grid-cols-3 gap-6 sm:gap-4" >
    <ProductGallery v-if="gallery" :gallery="gallery" id="gallery" class="w-full" data-aos="fade-right" />
    <img v-else :src="image" alt="">
    <div class="flex flex-col gap-1 sm:gap-2 w-full col-span-2 p-2">
        <h1 class="text-xl sm:text-3xl capitalize font-bold" data-aos="fade-up">{{ name }}</h1>
        <Price :price="price" data-aos="fade-up" />
        <p class="text-gray flex-1" data-aos="fade-up">{{ description }}</p>
        <Ratings v-bind="{rating: 4, total: 500}" />
        <div class="flex justify-end">
            <CartButton :id="id" class="md:w-[300px] w-full" />
        </div>
        <Accordion type="single" collapsible class="col-span-2">
            <AccordionItem value="item-1">
            <AccordionTrigger>More Information</AccordionTrigger>
            <AccordionContent>
                <div>
                        <div class="flex flex-col gap-2">
                            <div v-for="item in features" :key="item.value" class="flex flex-col">
                                <h3 class="font-semibold text-base capitalize">{{item.name}}</h3>
                                <p>{{ item.value }}</p>
                            </div>
                        </div>
                    </div>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  </section>
</template>