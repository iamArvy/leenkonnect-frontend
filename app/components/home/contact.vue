<script setup lang="ts" >
const header = {
  title: "Contact Us",
  subtitle: "We'd love to hear from you",
}
</script>
<template>
  <NuxtLayout name="section" v-bind="header" >
    <Contact />
  </NuxtLayout>
</template>