<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import type { ProductCategoriesResponse } from '~/interfaces';
const { data: categories } = useFetch<ProductCategoriesResponse>('/api/product/categories')
</script>
<template>
  <NuxtLayout name="section" title="Shop by Category"
    subtitle="Explore our wide range of premium tech products across all categories" class="bg-muted">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-if="categories && categories.items.length > 0">
      <Card v-for="category in categories.items"
        class="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group animate-fade-in cursor-pointer py-0"
        style={{ animationDelay: `${index * 100}ms` }}
        @click="navigateTo({ name: 'shop', params: { category: category.slug } })">
        <div class="relative overflow-hidden aspect-video">
          <img :src="category.image" :alt="category.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div class="absolute bottom-4 left-4 right-4">
            <div class="flex items-center space-x-3 mb-2">
              <div class="p-2 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center">
                <Icon :name="category.icon" size="20" class="text-primary" />
              </div>
              <h3 class="text-xl font-bold text-foreground">{{ category.name }}</h3>
            </div>
            <p class="text-sm text-muted-foreground mb-1">{{ category.description }}</p>
            <p class="text-xs text-primary font-medium">{{ category.count }}+ Products</p>
          </div>
        </div>
      </Card>
    </div>
    <div class="mt-6 flex justify-center w-full text-2xl">
      <Button size="lg" class="text-lg" @click="navigateTo('/shop')">
        Visit Shop
        <ArrowRight />
      </Button>
    </div>
  </NuxtLayout>
</template>