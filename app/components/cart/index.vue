<script setup lang="ts">
import { ShoppingBag, Trash } from 'lucide-vue-next';
import { formatPrice } from '~/helpers/format-price';
const { cart, clear, remove } = useCart()
const router = useRouter()
</script>
<template>
    <Sheet>
      <SheetTrigger as-child>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent side="right" class="flex flex-col max-md:w-full px-2" >
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div class="flex-grow flex flex-col items-center justify-center h-full overflow-y-scroll">
            <ul class="flex flex-col gap-4 overflow-y-scroll h-full w-full" v-if="cart.items.length > 0">
                <li
                    v-for="{ id, product, quantity } in cart.items"
                    :key="id" class="flex flex-col gap-4"
                >
                    <div class="flex gap-4 cursor-pointer" @click="router.push(`/shop/product/${product.slug}`)">
                        <img :src="product.image" alt="" class="h-full object-cover w-1/4">
                        <div class="flex flex-col gap-1 text-sm w-3/4">
                            <h1 class="text-md font-bold capitalize line-clamp-2">{{ product.name }}</h1>
                            <p class="text-gray-500">Price: {{ formatPrice(product.price) }}</p>
                            <p class="text-gray-500">Total: {{ formatPrice(cart.total) }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <Button @click="remove(id)" class=" text-destructive" variant="ghost" >
                            <Trash />
                            Remove
                        </Button>
                        <CartButton :id="product.id" :quantity="quantity" class="flex-1 max-w-[200px]" />
                    </div>
                    <hr>
                </li>
            </ul>
            <div v-else class="text-gray-500">No items in cart</div>
        </div>
        <SheetFooter>
            <div class="w-full mt-4">
                <div class="flex justify-between mt-4">
                    <h1 class="text-lg font-bold">Cart Total:</h1>
                    <h1 class="text-lg font-bold"> {{ formatPrice(cart.total) }} </h1>
                </div>
                <div class="flex justify-between mt-4">
                    <SheetClose as-child>
                        <Button @click="clear()" :disabled="cart.items.length === 0" variant="destructive" >Clear</Button>
                    </SheetClose>
                    <Button @click="router.push(`/shop/checkout`)" :disabled="cart.items.length === 0">Checkout</Button>
                </div>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
</template>
