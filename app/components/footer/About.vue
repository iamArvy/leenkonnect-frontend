<script setup lang="ts">

// const contacts = [
//   {
//     icon: "mingcute:location-fill",
//     value: "8B, Chief Collins Uchidiuno Street, off Fola Osibo Street, Lekki Phase 1, Lekki Lagos."
//   },
//   {
//     icon: "mingcute:phone-fill",
//     value: "+234 91 50555555",
//   },
//   {
//     icon: "mingcute:mail-fill",
//     value: "hello@vintagebynaomie.com"
//   }
// ]
const socials = [
  {
    icon: "lucide:instagram",
    value: 'https://www.instagram.com/leenkonnect'
  },
  {
    icon: "lucide:facebook",
    value: 'https://www.facebook.com/leenkonnect'
  },
  {
    icon: "lucide:linkedin",
    value: 'https://www.linkedin.com/company/leenkonnect'
  },
  {
    icon: "lucide:twitter",
    value: 'https://www.facebook.com/leenkonnect'
  }
]
const { appName } = useAppConfig();
</script>
<template>
  <div class="space-y-4">
    <AppLogo type="footer" />
    <p class="font-inter text-white/80 leading-relaxed">
      Empowering businesses with innovative IT solutions.
    </p>
    <div class="flex space-x-4">
      <NuxtLink v-for="item in socials" :key="item.value" :href="item.value" target="__blank" class="text-white/70 hover:text-spa-gold transition-colors">
        <Icon :name="item.icon" size="18" />
      </NuxtLink>
    </div>
  </div>
</template>