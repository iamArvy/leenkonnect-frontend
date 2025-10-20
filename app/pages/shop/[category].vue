<script setup lang="ts">
import type { ProductCategory } from '~/interfaces';
const { params } = useRoute();
const { data: category } = useFetch<ProductCategory>(`/api/product/categories/${params.category}`)
useAppTitle(category.value?.name)

</script>
<template>
  <Shop>
    <template #title> {{ category?.name }} </template>
  </Shop>
</template>