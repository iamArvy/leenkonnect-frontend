<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-vue-next';
import type { Product } from '~/interfaces';
const props = defineProps<{
    product: Product,
}>()
const { getItem, add, processing } = useCart()
// const item = getItem(props.id)
const item = computed(() =>
    getItem(props.product.id)
);
</script>
<template>
    <CartControl v-if="item" :stock="item.product.stock" :value="item.quantity" :id="item.product.id" />
    <Button v-else @click="add(product)" class="px-4 py-2 w-full cursor-pointer" :disabled="processing">
        <ShoppingCart class="text-white" />
        Add to Cart
    </Button>
</template>

<style scoped></style>
