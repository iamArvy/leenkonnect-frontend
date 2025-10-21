<script setup lang="ts">
import { FolderCode, SearchIcon } from 'lucide-vue-next'

const { data: categories } = await useFetch('/api/blog/categories')

const { applyFilters, filters } = useBlogFilters()

const { data: posts } = await useFetch('/api/blog', {
  query: filters.value
})
useAppTitle("Blog")
</script>

<template>
  <main class="container mx-auto my-4 px-4 space-y-5">
    <section class="space-y-6">
      <div class="flex space-x-3">
        <div class="relative w-full items-center">
          <Input v-model="filters.q" id="search" type="search" placeholder="Search..." class="pl-10" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <SearchIcon />
          </span>
        </div>
        <Select v-model="filters.cid" @update:model-value="applyFilters">
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem v-for="{ id, name } in categories?.items" :key="id" :value="id">
                {{ name }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>


      <!-- 📰 Posts List -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" v-if="posts?.items?.length">
        <BlogCard v-for="(post, index) in posts.items" :key="post.id" v-bind="post" data-aos="fade-up"
          :style="{ animationDelay: `${index * 100}ms` }" />
      </div>
      <Empty v-else>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderCode />
          </EmptyMedia>
          <EmptyTitle>No Posts Found</EmptyTitle>
          <EmptyDescription>
            No posts found for this category or search. Try again later.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>

      <!-- <Pagination :paginated="posts" :filters="filters" /> -->
    </section>
  </main>
</template>
