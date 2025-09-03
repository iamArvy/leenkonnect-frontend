<template>
    <Sheet >
        <SheetTrigger class="lg:hidden" as-child>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <nav class="grid gap-6 text-lg font-medium p-3">
            <h1 class="text-2xl font-bold">Leenkonnect</h1>
            <NuxtLink
              v-for="{ path, label } in navs"
              :key="path"
              active-class="text-primary font-bold"
              :to="path"
            >
              {{ label }}
            </NuxtLink>
            <LinkButton :link="{ to:'/consultation' }" >
              Free Consultation
            </LinkButton>
          </nav>
        </SheetContent>
      </Sheet>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next';
import type { Nav } from '~/types';
defineProps<{
    navs: Nav[]
}>()
</script>

<style scoped>
</style>
