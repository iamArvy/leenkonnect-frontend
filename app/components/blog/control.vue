<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next';
import { categories } from '~/mocks/blog';
</script>

<template>
  <div class="flex space-x-3 " >
    <div class="relative w-full items-center">
      <Input id="search" type="search" placeholder="Search..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <SearchIcon />
      </span>
    </div>
      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="apple">
              All
            </SelectItem>
            <SelectItem
              v-for="{id, name} in categories"
              :key="id"
              :value="id"
            >
              {{ name }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  </div>
</template>