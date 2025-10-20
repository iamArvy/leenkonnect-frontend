<script setup lang="ts">
import { Filter, Search, SearchIcon } from 'lucide-vue-next';
// import { Search } from 'lucide-vue-next';

const { query, params } = useRoute();
const category = params.category as string | undefined;
const { filters, applyFilters, paginate } = useShopFilters()
const { data: products } = useFetch(`/api/products`, { query: filters.value })
</script>
<template>
  <section class=" container mx-auto my-4 px-4">
    <div class="lg:grid lg:grid-cols-4 gap-8">
      <div class="lg:col-span-1 sticky top-10 hidden lg:block">
        <div class="sticky top-20">
          <CatalogueFilter />
        </div>
      </div>
      <div class="lg:hidden mb-2">
        <Sheet>
          <SheetTrigger class="md:hidden" as-child>
            <Button variant="outline">
              <Filter :size="15" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div class="mt-10">
              <CatalogueFilter />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div class="lg:col-span-3">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6 "
          v-if="products.items && products.items.length > 0">
          <ProductCard v-for="item in products" :key="item.id" v-bind="item" data-aos="fade-up" />
        </div>
        <div v-else class="py-14 text-center">
          <p>No Products Found</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
