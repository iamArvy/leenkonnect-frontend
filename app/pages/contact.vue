<script setup lang="ts">
const hero = {
  title: "Contact Us",
  description: "We'd love to hear from you",
  bg: "/images/contactbg.jpg"
};
</script>
<template>
  <main class="mb-6">
    <HeroSection v-bind="hero" />
    <Contact />
  </main>
</template>