<script setup lang=ts>
import { getHomeMockedPosts } from '~/mocks/blog';
import { mockGetFeaturedProducts } from '~/mocks/product';
import { mockGetServices } from '~/mocks/service';
import { mockGetTestimonies } from '~/mocks/testimony';

const { data, error } = await useAsyncData('dashboard', async () => {
  const [
    services,
    featured,
    testimonies,
    blog
    // stats,
    // testimonials
  ] = await Promise.all([
    mockGetServices(),
    mockGetFeaturedProducts(),
    mockGetTestimonies(),
    getHomeMockedPosts()
    // $fetch('/api/stats'),
    // $fetch('/api/notifications')
  ])
  return {
    services,
    featured,
    testimonies,
    blog
    // testimonials
  }
})
</script>
<template>
  <main class="mb-10">
    <HomeHero />
    <HomeServices :services="data?.services ?? null" />
    <HomeFeatured :products="data?.featured ?? null" />
    <HomeTestimonial :testimonials="data?.testimonies" />
    <HomeCta />
    <HomeBlog :blog="data?.blog ?? []" />
    <Contact />
  </main>
</template>