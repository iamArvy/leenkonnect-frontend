<script setup lang="ts">
defineProps<{
  title: string;
}>()
</script>
<template>
<div>
  <h2 class="mb-2 font-bold">{{ title }}</h2>
  <slot></slot>
</div>
</template>