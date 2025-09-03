<script setup lang="ts">
    import { type Posts } from "@/types";

    const url = 'blog.index'

    defineProps<{
        posts: Posts,
        // filters: PostFilters
    }>()
</script>
<template>
  <section class="container mx-auto">
      <main>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 " v-if="posts.length > 0" >
              <BlogCard
                v-for="post in posts"
                :key="post.id"
                v-bind="post"
                data-aos="fade-up" />
          </div>
          <div v-else class="py-14 text-center">
              <p>There are no blogs available for this query, Adjust Query and try again</p>
          </div>
      </main>
      <!-- <Pagination :paginated="posts" :filters="filters" /> -->
  </section>
</template>

<style scoped>

</style>
