<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next';
const { plus, minus } = useCart()
defineProps<{
    value: number
    stock: number
    id: string
}>()
</script>
<template>
    <div class="flex items-center gap-2 p-1">
        <Button size="icon" @click="minus(id)">
            <Minus />
        </Button>
        <span class="flex-1 text-center">{{ value }}</span>
        <Button size="icon" @click="plus(id)">
            <Plus />
        </Button>
    </div>
</template>

<style scoped></style>
