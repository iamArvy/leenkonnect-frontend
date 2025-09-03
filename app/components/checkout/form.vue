<script setup lang="ts" >
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { computed } from 'vue';
import { states } from '~/data';
// onMounted make into a order and get that order details 
// assigns items to cart based on the session not user,
// so a session can be attached to a user or not but
// the cart is always attached to a session

const { cart, checkout } = useCart();
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

const form: CheckoutForm = {
  name: '',
  phone: '',
  address: {
      street: '',
      city: '',
      state: '',
  },
  email: '',
  orderId: 'eeeeeee',
};

// use services and locations from db
const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  address: z.object({
    street: z.string().min(2).max(100),
    city: z.string().min(2).max(50),
    state: z.string().min(2).max(50),
  }),
  email: z.email(),
  orderId: z.string().min(2).max(50).optional()
}))

const { handleSubmit, isSubmitting, meta, values } = useForm({
  validationSchema: formSchema,
  initialValues: form,
})


const onSubmit = handleSubmit((values) => {
  checkout(values);
})
const cities = computed(() => {
  const selectedState = states.find((s: any) => s.name === values.address?.state);
  return selectedState ? selectedState.cities : [];
});
</script>
<template>
  <form @submit="onSubmit" class="container mx-auto flex flex-col sm:grid grid-cols-3 gap-3">
    <div class="col-span-2">
      <FormField name="name" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Name*</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="Enter Receipient Name" />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField name="email" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>
              Email*
            </FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="example@gmail.com" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="phone" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Phone*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Enter Recipient Phone" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField name="address.state" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>State*</FormLabel>
            <FormControl>
              <Select class="w-full" required v-bind="componentField" >
                <SelectTrigger class="w-full" >
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
            <FormLabel>City*</FormLabel>
            <FormControl>
              <Select class="w-full" required v-bind="componentField" >
                <SelectTrigger class="w-full" >
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
      <FormField name="street" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Street*</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="Enter Street" />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <div class="border rounded-2xl p-4">
      <h1 class="font-bold text-2xl">Cart Information</h1>
      <div class="flex flex-col gap-1">
          <h2 class="font-semibold text-lg">Items:</h2>
          <div v-for="item in cart.items" :key="item.id">
              <h3 class="capitalize">Name: {{ item.product.name }}</h3>
              <p>Quantity: {{ item.quantity }}</p>
              <p>Price: {{ item.product.price }}</p>
          </div>
      </div>
      <div class="flex items-center gap-3">
          <h2 class="font-semibold text-lg">Total Quantity:</h2>
          <p>{{ cart.items.reduce((sum:number, item:any) => sum + item.quantity, 0) }}</p>
      </div>
      <div class="flex items-center gap-3">
          <h2 class="font-semibold text-lg">Total Price:</h2>
          <p>{{ cart.total }}</p>
      </div>
      <Button
          primary
          type="submit"
          :disabled="isSubmitting || !meta.valid"
          class="w-full"
      >
          Continue to payment
      </Button>
    </div>
  </form>
</template>