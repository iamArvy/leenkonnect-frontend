<script setup lang="ts" >
const hero = {
  title: "Contact Us",
  description: "We'd love to hear from you",
  bg: "/images/contactbg.jpg"
};
</script>
<template>
  <HeroSection v-bind="hero" />
  <Contact />
</template>