<script setup lang="ts">
type NavList = {
  title: string;
  children: {
    title: string;
    href?: string;
  }[];
  text?: boolean
};
defineProps<NavList>()
</script>
<template>
  <div>
    <h4 class="font-inter font-semibold text-white mb-4">{{ title }}</h4>
    <ul class="space-y-2 font-inter text-white/80">
      <li
        v-for="item in children"
        :key="item.href"
      >
        <p v-if="text">{{ item.title }}</p>
        <NuxtLink
          v-else
          :href="item.href"
          class="hover:text-spa-gold transition-colors"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>