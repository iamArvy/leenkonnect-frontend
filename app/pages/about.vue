<script setup lang="ts" >
const hero = {
  title: "About us",
  description: "Learn more about our mission, vision, and values",
  bg: "/images/homehero.jpg"
};
</script>
<template>
  <HeroSection v-bind="hero" />
  <AboutInformation />
  <AboutStat />
</template>