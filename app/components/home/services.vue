<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
const header = {
  title: "Our Services",
  subtitle: "What We Offer",
}
const carouselData = {
  plugins: [
    Autoplay({
      delay: 3000,
    })
  ],
  opts: {
    loop: true,
  }
}
const { data: services } = useFetch('/api/services')
</script>
<template>
  <NuxtLayout name='section' v-bind="header">
    <div>
      <Carousel class="w-full px-5" v-bind="carouselData">
        <CarouselContent>
          <CarouselItem v-for="{ id, name, summary } in services?.items" :key="id"
            class="pl-10 basis-1/1 md:basis-1/2 lg:basis-1/3">
            <div class="flex flex-col gap-4 p-8 rounded-md min-h-[300px] cursor-pointer text-white bg-primary"
              @click="navigateTo(`/services#${name}`)">
              <h3 class="text-xl font-bold">{{ name }}</h3>
              <p>{{ summary }}</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div class="mt-4 flex justify-center items-center">
        <Button @click="navigateTo('/services')" size="lg"> View Services </Button>
      </div>
    </div>

  </NuxtLayout>
</template>