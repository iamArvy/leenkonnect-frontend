<script setup lang="ts">
 import { defineProps, defineEmits } from 'vue';
 const emit = defineEmits();
const props = defineProps({
  paginated: Object,
  filters:Object
});

const router  = useRouter();
const goToPage = (url:string) => {
    router.push({path: url, query: props.filters});
};
</script>

<template>
    <div class="w-full flex justify-center mt-4" v-if="paginated.first_page_url != paginated.last_page_url" >
        <Pagination :total="paginated.total" :default-page="paginated.current_page">
            <PaginationList class="flex items-center gap-1">
                <PaginationFirst v-if="paginated.first_page_url" @click="goToPage(paginated.first_page_url)" />
                <PaginationPrev v-if="paginated.prev_page_url" @click="goToPage(paginated.prev_page_url)" />

                <!-- <template v-for="(link, index) in paginated.links" :key="index">
                    <PaginationListItem
                        v-if="link.url && link.active"
                        :key="index"
                        :value="link.label"
                        as-child
                        @click="goToPage(link.url)"
                        >
                    <Button
                        class="w-9 h-9 p-0"
                        disabled
                        >
                        {{ link.label }}
                    </Button>
                    </PaginationListItem>
                </template> -->

                <PaginationNext v-if="paginated.next_page_url" @click="goToPage(paginated.next_page_url)" />
                <PaginationLast v-if="paginated.last_page_url" @click="goToPage(paginated.last_page_url)" />
            </PaginationList>
        </Pagination>
    </div>
  </template>
