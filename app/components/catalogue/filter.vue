<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next';

const { query } = useRoute();
const priceRange = ref({ min: '', max: '' })
const { filters, applyFilters, paginate } = useShopFilters()
const { data: categories } = useFetch('/api/products/categories')
</script>
<template>
  <div class="bg-white p-2 rounded-xl space-y-3 ">
    <div class="relative w-full items-center">
      <Input id="search" type="search" placeholder="Search..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <SearchIcon />
      </span>
    </div>

    <div class="space-y-2">
      <Label>Location</Label>
      <Select v-model="filters.cid" class="w-full">
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent class="max-h-[200px]">
          <SelectItem v-for="{ slug, name } in categories?.items" :key="slug" :value="slug">
            {{ name }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <CatalogueFilterItem title="Category">
      <div>
        <NuxtLink :to="{ path: '/shop', query: { ...query, c: undefined } }"
          :class="!query.c ? 'bg-gray-200 font-semibold' : ''" class="block w-full px-2 py-1 rounded hover:bg-gray-100">
          All Categories
        </NuxtLink>
        <NuxtLink v-for="{ id, name } in categories" :key="id" :to="{ path: '/shop', query: { ...query, c: id } }"
          :class="id === query.c ? 'bg-gray-200 font-semibold' : ''"
          class="block w-full px-2 py-1 rounded hover:bg-gray-100">
          {{ name }}
        </NuxtLink>
      </div>
    </CatalogueFilterItem>
    <CatalogueFilterItem title="Price Range">
      <div class="flex gap-2">
        <Input v-model="priceRange.min" type="number" placeholder="Min" class="w-full" />
        <Input v-model="priceRange.max" type="number" placeholder="Max" class="w-full" />
      </div>
      <div class="mt-2 flex justify-end">
        <Button> Apply </Button>
      </div>
    </CatalogueFilterItem>
  </div>
</template>