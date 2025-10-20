<script setup lang="ts">
import { formatPrice } from '~/helpers/format-price';
import type { ProductsResponse } from '~/interfaces';

const { filters } = useShopFilters()
const { data: products } = useFetch<ProductsResponse>('/api/products', {
  query: filters.value,
})
</script>
<template>
  <main class="container mx-auto space-y-6">
    <section class="flex justify-between items-center gap-1">
      <h1 class="text-lg sm:text-xl md:text-3xl font-bold">
        <slot name="title" />
        <span class="text-base font-medium">
          (30 products found)
        </span>
      </h1>
      <ShopFilter />
    </section>
    <section class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 col-span-2"
      v-if="products && products.items.length > 0">
      <div v-for="(product, index) in products.items" :key="product.id"
        class="py-0 overflow-hidden hover:shadow-strong transition-all duration-300 group animate-fade-in cursor-pointer select-none group"
        :style="{ animationDelay: `${index * 100}ms` }">
        <div @click="navigateTo({ name: 'products-slug', params: { slug: product.slug } })" class="flex-1">
          <div class="relative overflow-hidden aspect-square">
            <img :src="product.image" :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="p-5 text-sm space-y-1">
            <p class="text-xs text-muted-foreground">
              {{ product.category?.name }}
            </p>
            <h3 class="line-clamp-2">{{ product.name }}</h3>
            <p class="">
              {{ formatPrice(product.price) }}
            </p>
            <Ratings v-bind="{ rating: product.rating, total: 500 }" />
          </div>
        </div>
        <CartButton class="opacity-0 group-hover:opacity-100 transition-opacity duration-300" :product="product" />
      </div>
    </section>
  </main>
</template>