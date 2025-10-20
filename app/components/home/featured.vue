<script setup lang="ts">
import type { Products } from '~/interfaces';

defineProps<{
  products: Products | null;
}>();
</script>
<template>
  <NuxtLayout name="section" title="Shop with Us" subtitle="Latest Products" v-if="products != null">
    <div>
      <ProductSwiper :products />
      <div class="flex justify-center mt-5">
        <LinkButton :link="{ to: '/shop' }"> Visit Shop </LinkButton>
      </div>
    </div>
  </NuxtLayout>
</template>