<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import type { Services } from '@/types';
import { ref } from 'vue';
import { mockGetServices } from '~/mocks/service';

const services = mockGetServices() ?? [];
const locations = [
    {
        name: 'Google Meet',
        id: 'meet'
    },
    {
        name: 'Zoom',
        id: 'zoom'
    },
    {
        name: 'In Person',
        id: 'inperson'
    }
]
// use services and locations from db
const formSchema = toTypedSchema(z.object({
  service: z.string().min(2).max(50),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.email(),
  company: z.string().min(2).max(50).optional(),
  challenge: z.string().min(10).max(500),
  location: z.string().min(2).max(50)
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})


const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
})

</script>
<template>
    <form @submit="onSubmit" class="space-y-6 bg-blue-200 p-10 rounded-2xl" >
      <h1 class="font-bold text-2xl col-span-2" >Send us a Message</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField name="firstName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel> First Name*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="First Name" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="lastName" v-slot="{ componentField }">
          <FormItem>
            <FormLabel> Last Name*</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Last Name" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
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
        <FormField name="company" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>
              Company
            </FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Company" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <FormField name="service" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Service Required*</FormLabel>
          <FormControl>
            <Select class="w-full" required v-bind="componentField" >
              <SelectTrigger class="w-full" >
                  <SelectValue class="w-full" placeholder="Service Required" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                    <SelectItem v-for="service in services" :key="service.name" :value="service.name">
                        {{ service.name }}
                    </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField name="location" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Location*</FormLabel>
          <FormControl>
            <Select class="w-full" required v-bind="componentField" >
              <SelectTrigger class="w-full" >
                  <SelectValue class="w-full" placeholder="Service Required" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                    <SelectItem v-for="{id, name} in locations" :key="id" :value="id">
                        {{ name }}
                    </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField name="message" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>
            Message*
          </FormLabel>
          <FormControl>
            <Textarea v-bind="componentField" placeholder="Type your message here"  class="min-h-[120px]"/>
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>
      <Button size="lg" class="w-full">
        Send Message
      </Button>
    </form>
</template>