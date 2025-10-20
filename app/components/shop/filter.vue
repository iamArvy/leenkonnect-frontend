<script setup lang="ts">
import { Filter } from 'lucide-vue-next'
import type { ProductCategoriesResponse } from '~/interfaces';

const { applyFilters, filters } = useShopFilters()
const { data: categories } = useFetch<ProductCategoriesResponse>('/api/product/categories')
// Reactive slider states

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        <Filter />
        Apply Filters
      </Button>
    </SheetTrigger>
    <SheetContent class="w-full">
      <SheetHeader>
        <SheetTitle>Page Filters</SheetTitle>
      </SheetHeader>
      <div class=" grid space-y-6 px-4 overflow-y-auto ">
        <div class="space-y-2">
          <Label>Category</Label>
          <Select v-model="filters.cid" class="w-full">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent class="max-h-[200px]" v-if="categories && categories.items.length > 0">
              <SelectItem v-for="{ slug, name } in categories.items" :key="slug" :value="slug">
                {{ name }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ShopRangeField v-model="filters.pr" label="Price" description="Price" :min="100000" :max="2000000"
          :step="50000" />
        <ShopRangeField v-model="filters.r" label="Ratings" description="Ratings" :min="1" :max="5" :step="1" />

        <!-- <Button type="submit" class="w-full">Apply Filters</Button> -->
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit" @click="applyFilters">
            Save Filters
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
