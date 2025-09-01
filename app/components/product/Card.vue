<script setup lang="ts">
// import { Ratings } from '../../partials';
import type { Product } from '@/types';
const router = useRouter()
const props = defineProps<Product>()
</script>

<template>
    <div class="group rounded-lg overflow-hidden shadow-black transition-all ">
        <div @click="router.push({name: 'shop-product', params: {slug} })" class="cursor-pointer grid grid-row-2 relative">
             <figure class="relative overflow-hidden w-[300] max-h-[180px]">
                <NuxtImg 
                :src="image" 
                :alt="name"
                class="w-full object-cover center group-hover:scale-120 transition-transform duration-300"
                />
            </figure>
            <!-- <figure class="overflow-hidden w-full rounded-lg" >
                <NuxtImg :src="image" placeholder alt="" class="w-full h-full group-hover:scale-x-100" />
            </figure> -->
            <div class="p-2 flex flex-col gap-2 text-right">
                <h4 class="font-bold capitalize text-sm line-clamp-2 flex-1 min-h-10">{{ name }}</h4>
                <Price :price="price" />
                <Ratings :rating="5" />
            </div>
        </div>
        <CartButton :id="id" />
    </div>
</template>

<style scoped>

</style>
