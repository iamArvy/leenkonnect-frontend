<script setup lang="ts" >
import { mockGetServices } from '~/mocks/service';
useAppTitle('Services')
const hero = {
  title: "Our Services",
  description: "Discover the range of services we offer to help you achieve your goals",
  bg: "/images/consultationimg.png"
};
const services = mockGetServices()
</script>
<template>
  <HeroSection v-bind="hero" />
  <ServiceServices :services />
</template>