<script setup lang="ts">
import type { Product } from '@/types';
defineProps<Product>()
</script>

<template>
    <div class="group rounded-lg overflow-hidden shadow-black transition-all ">
        <div class="cursor-pointer grid grid-row-2 relative">
             <figure class="relative overflow-hidden w-[300] max-h-[180px]">
                <NuxtImg 
                :src="image" 
                :alt="name"
                class="w-full object-cover center group-hover:scale-120 transition-transform duration-300"
                />
            </figure>
            <div class="p-2 flex flex-col gap-2 text-right">
                <NuxtLink :to="{name: 'product-slug', params: {slug} }" class="flex flex-col">
                  <h4 class="font-bold capitalize text-sm line-clamp-2 flex-1 min-h-10">{{ name }}</h4>
                </NuxtLink>
                <Price :price="price" />
                <Ratings v-bind="{rating: 5, total: 500}" />
            </div>
        </div>
        <CartButton :id="id" />
    </div>
</template>

<style scoped>

</style>
