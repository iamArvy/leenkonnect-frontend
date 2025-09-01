<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

// Define props
const props = defineProps<{
  link: NuxtLinkProps
}>()
</script>

<template>
  <Button
    v-bind="$attrs" as-child
  >
    <NuxtLink v-bind="link">
      <slot />
    </NuxtLink>
  </Button>
</template>