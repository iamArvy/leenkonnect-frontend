<template>
    <Sheet >
        <SheetTrigger class="md:hidden" as-child>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <h1 class="text-2xl font-bold">Leenkonnect</h1>
            <NuxtLink
              v-for="{ path, label } in navs"
              :key="path"
              active-class="text-primary font-bold"
              :to="path"
            >
              {{ label }}
            </NuxtLink>
          </nav>
        </SheetContent>
      </Sheet>
</template>

<script setup lang="ts">
import { Hamburger, HamburgerIcon, Menu } from 'lucide-vue-next';
import type { Nav } from '~/types';
defineProps<{
    navs: Nav[]
}>()
</script>

<style scoped>
</style>
