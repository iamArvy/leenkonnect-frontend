<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next';
const { add, minus } = useCart()
defineProps<{
    value: number
    stock: number
    id: string
}>()
</script>
<template>
    <div class="flex items-center gap-2 p-1" >
        <Button size="icon" @click="minus(value, id)">
            <!-- <Icon icon="ic:baseline-minus" /> -->
            <Minus />
        </Button>
        <span class="flex-1 text-center" >{{ value }}</span>
        <Button size="icon"  @click="add(value, id)"  >
            <Plus />
            <!-- <Icon icon="ic:baseline-plus"/> -->
        </Button >
    </div>
</template>

<style scoped>

</style>
