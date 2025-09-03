<script setup lang=ts>
import { getHomeMockedPosts } from '~/mocks/blog';
import { mockGetFeaturedProducts } from '~/mocks/product';
import { mockGetServices } from '~/mocks/service';
import { mockGetTestimonies } from '~/mocks/testimony';

useAppTitle('Home')

const { data, error } = await useAsyncData('home', async () => {
  const [
    services,
    featured,
    testimonies,
    blog
  ] = await Promise.all([
    mockGetServices(),
    mockGetFeaturedProducts(),
    mockGetTestimonies(),
    getHomeMockedPosts()
  ])
  return {
    services,
    featured,
    testimonies,
    blog
  }
})
</script>
<template>
  <main>
    <HomeHero />
    <HomeServices :services="data?.services ?? null" />
    <HomeFeatured :products="data?.featured ?? null" />
    <HomeTestimonial :testimonials="data?.testimonies" />
    <HomeCta />
    <HomeBlog :blog="data?.blog ?? []" />
    <Contact />
  </main>
</template>