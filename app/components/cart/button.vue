<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-vue-next';
const props = defineProps<{
    id: string,
}>()
const { getItem, add, processing } = useCart()
const item = getItem(props.id)
</script>
<template>
    <!-- <div> -->
        <CartControl v-if="item" :stock="item.product.stock" :value="item.quantity" :id="item.id" />
        <Button
            v-else
            @click="add(1, id)"
            class="px-4 py-2 w-full cursor-pointer"
            :disabled="processing"
            >
              <ShoppingCart class="text-white" />
              <!-- <Icon icon="bxs:cart-add" class="text-white" /> -->
                Add to Cart
        </Button>
    <!-- </div> -->
</template>

<style scoped>

</style>
