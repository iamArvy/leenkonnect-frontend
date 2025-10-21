<script setup lang="ts">
import { ShoppingBag, Store } from 'lucide-vue-next';

const { cart } = useCart();
interface CheckoutForm {
  name: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  email: string;
  orderId: string;
}

const { submit, cities, values, isSubmitting, meta, states } = useCheckoutForm()
</script>

<template>
  <main class="container mx-auto px-4 py-4 space-y-4 ">
    <h1 class="font-bold text-3xl">Checkout Page</h1>
    <form @submit="submit" class="container mx-auto sm:grid grid-cols-3 space-x-3 space-y-3">
      <div class="col-span-2 space-y-3">
        <FormField name="name" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Enter Receipient Name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="grid grid-cols-2 gap-4">
          <FormField name="email" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>
                Email
              </FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="example@gmail.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="phone" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="Enter Recipient Phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <FormField name="address.state" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Select class="w-full" required v-bind="componentField">
                  <SelectTrigger class="w-full">
                    <SelectValue class="w-full" placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="state in states" :key="state.name" :value="state.name">
                        {{ state.name }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="address.city" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Select class="w-full" required v-bind="componentField">
                  <SelectTrigger class="w-full">
                    <SelectValue :placeholder="values.address?.state ? 'Select City' : 'Select State first'" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="city in cities" :key="city" :value="city">
                        {{ city }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <FormField name="address.street" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Street</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Enter Street" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <Card class="border rounded-2xl p-6 w-full">
        <h1 class="font-bold text-2xl flex items-center gap-2">
          <ShoppingBag class="inline-flex" /> Cart Information
        </h1>
        <div v-if="cart.items.length > 0" class="space-y-4">
          <div class="flex flex-col gap-1">
            <div v-for="item in cart.items" :key="item.product.id">
              <h3 class="capitalize font-bold ">{{ item.product.name }}</h3>
              <p>{{ item.quantity }} * {{ formatPrice(item.product.price) }}</p>
            </div>
          </div>
          <hr />
          <p>
            <span class="font-semibold text-lg">Total Price: </span>
            <span>{{ formatPrice(cart.total) }}</span>
          </p>
          <Button primary type="submit" :disabled="isSubmitting || !meta.valid" class="w-full">
            Continue to payment
          </Button>
        </div>
        <Empty v-else>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Store />
            </EmptyMedia>
            <EmptyTitle>No Items in Cart</EmptyTitle>
            <EmptyContent>
              <Button type="button" @click="navigateTo('/shop')">
                <Store /> Visit Shop
              </Button>
            </EmptyContent>
          </EmptyHeader>
        </Empty>
      </Card>
    </form>
  </main>
</template>
