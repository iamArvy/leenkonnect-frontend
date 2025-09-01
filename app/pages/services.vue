<script setup lang="ts" >
const hero = {
  title: "Our Services",
  description: "Discover the range of services we offer to help you achieve your goals",
  bg: "/images/consultationimg.png"
};
</script>
<template>
  <HeroSection v-bind="hero" />
</template>