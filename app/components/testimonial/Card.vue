<script setup lang="ts">
import type { Testimonial } from '@/types';

defineProps<Testimonial>()
</script>
<template>
    <div class="bg-[hsla(185,100%,22%,0.1)] hover:bg-[hsla(185,100%,22%,0.2)] transition-all p-3 rounded flex flex-col">
        <h3 class="font-bold capitalize " > {{ name }} </h3>
        <h4 class="font-semibold" > {{ occupation }}</h4>
        <p class="small text-primary flex-1"> {{ content }} </p>
        <Ratings :rating="rating ?? 4" :total="20" />
    </div>
</template>