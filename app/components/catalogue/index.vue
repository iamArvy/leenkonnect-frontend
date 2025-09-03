<script setup lang="ts">
import { Search, SearchIcon } from 'lucide-vue-next';
import { mockCategories, mockListCategories, mockListProducts } from '~/mocks/product';
// import { Search } from 'lucide-vue-next';

const { query, params } = useRoute();
const category = params.category as string | undefined;
useAppTitle('Store Catalogue')
const { data: products } = await useAsyncData(
  () => mockListProducts(),
  { watch: [() => query] } // refetch whenever query changes
)
</script>
<template>
  <section class=" container mx-auto my-4 px-4" >
    <div class="lg:grid lg:grid-cols-4 gap-8">
      <div class="lg:col-span-1 sticky top-10 hidden lg:block">
        <div class="sticky top-20">
          <CatalogueFilter />
        </div>
      </div>
      <div class="lg:hidden mb-2">
        <CatalogueFilterMobile />
      </div>
      <div class="lg:col-span-3">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6 " v-if="products && products.length > 0" >
              <ProductCard
                  v-for="item in products"
                  :key="item.id"
                  v-bind="item"
                  data-aos="fade-up"
                  />
          </div>
          <div v-else class="py-14 text-center">
              <p>No Products Found</p>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
