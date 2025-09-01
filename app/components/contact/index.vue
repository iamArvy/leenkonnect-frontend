<script setup lang="ts" >
// const header = {
//   title: "Contact Us",
//   subtitle: "We'd love to hear from you",
// }
</script>
<template>
  <NuxtLayout name="section"  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <ContactForm />
      <ContactInformation />
    </div>
  </NuxtLayout>
</template>