<script setup lang="ts" >
import { mockFetchProduct, mockGetFeaturedProducts } from '~/mocks/product';

const { params } = useRoute();
const { data, error } = await useAsyncData('home', async () => {
  const [
    product,
    related,
    // stats,
    // testimonials
  ] = await Promise.all([
    mockFetchProduct(params.slug as string),
    mockGetFeaturedProducts()
    // $fetch('/api/stats'),
    // $fetch('/api/notifications')
  ])
  return {
    product,
    related,
  }
})
const { data: product } = await useAsyncData(
  () => mockFetchProduct(params.slug as string),
  { immediate: true }
);
</script>
<template>
  <Product v-if="data?.product" v-bind="data?.product" />
  <NuxtLayout name="section" v-if="data?.related">
      <h1 class="text-xl font-bold mb-2">
          Related Products
      </h1>
      <ProductSwiper :products="data.related" />
  </NuxtLayout>
</template>