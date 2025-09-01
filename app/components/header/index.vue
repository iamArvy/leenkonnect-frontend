<script setup lang="ts">
  import { navs } from '@/data'
  const user = useState('user')
</script>
<template>
    <header class="sticky top-0 gap-4 bg-white z-50 px-4 md:px-6 bg-opacity-90 w-full">
      <section class="container flex justify-between h-16 items-center mx-auto" >
        <div class="flex flex-row items-center gap-2">
            <HeaderMobileNav :navs=navs />
            <NuxtLink to="/" class="text-xl text-uppercase cursor-pointer"><AppLogo /> </NuxtLink>
        </div>
        <nav class="hidden flex-col justify-center w-full gap-6 text-2xl font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6">
          <NuxtLink
            v-for="{path, label} in navs"
            :key="path"
            :to="path"
            active-class="text-primary font-bold"
            class="hover:text-primary"
          >
            {{ label }}
          </NuxtLink>
        </nav>
        <div class="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Cart />
          <HeaderAccount :auth="user" />
        </div>
      </section>
    </header>
</template>