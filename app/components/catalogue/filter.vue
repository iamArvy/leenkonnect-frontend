<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next';
import { mockListCategories} from '~/mocks/product';

const { query } = useRoute();
const { data: categories } = await useAsyncData(
  'categories',
  () => mockListCategories(),
)
const priceRange = ref({ min: '', max: '' })
</script>
<template>
  <div class="bg-white p-2 rounded-xl space-y-3 " >
    <div class="relative w-full items-center">
      <Input id="search" type="search" placeholder="Search..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <SearchIcon />
      </span>
    </div>
    <CatalogueFilterItem title="Category" >
      <div>
        <NuxtLink
          :to="{ path: '/shop', query: { ...query, c: undefined } }"
          :class="!query.c ? 'bg-gray-200 font-semibold' : '' "
          class="block w-full px-2 py-1 rounded hover:bg-gray-100"
        >
          All Categories
        </NuxtLink>
        <NuxtLink
          v-for="{id, name} in categories"
          :key="id"
          :to="{ path: '/shop', query: { ...query, c: id } }"
          :class="id === query.c ? 'bg-gray-200 font-semibold' : '' "
          class="block w-full px-2 py-1 rounded hover:bg-gray-100"
        >
          {{ name }}
        </NuxtLink>
      </div>
    </CatalogueFilterItem>
    <CatalogueFilterItem title="Price Range" >
      <div class="flex gap-2">
        <Input
          v-model="priceRange.min"
          type="number"
          placeholder="Min"
          class="w-full"
        />
        <Input
          v-model="priceRange.max"
          type="number"
          placeholder="Max"
          class="w-full"
        />
      </div>
      <div class="mt-2 flex justify-end">
        <Button> Apply </Button>
      </div>
    </CatalogueFilterItem>
  </div>
</template>