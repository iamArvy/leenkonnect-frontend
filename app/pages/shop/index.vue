<script setup lang="ts" >
const hero = {
  title: "Book a Consultation",
  description: "Get in touch with our experts to discuss your needs and explore how we can assist you.",
  bg: "/images/consultation-bg.jpg"
};
</script>
<template>
  <HeroSection v-bind="hero" />
</template>