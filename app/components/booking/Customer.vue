<script setup lang="ts">
import { Mail, MessageSquare, User } from 'lucide-vue-next';
import type { FormMeta, GenericObject } from 'vee-validate';
defineProps<{
  nextStep: () => void,
  meta: FormMeta<GenericObject>
}>()
</script>

<template>
  <div class="space-y-6">
    <Card>
      <CardContent class="p-6 space-y-6">
        <FormField v-slot="{ componentField, errors }" name="name">
          <FormItem>
            <FormLabel>
              <User class="w-4 h-4 mr-2" />
              Full Name *
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder="John Doe" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is the name on your booking.
            </FormDescription>
            <FormMessage>
              {{ errors }}
            </FormMessage>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>
              <Mail class="w-4 h-4 mr-2" />
              Email Address *
            </FormLabel>
            <FormControl>
              <Input type="email" placeholder="example@gmail.com" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              We'll send your booking confirmation to this email
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="phone">
          <FormItem>
            <FormLabel>Phone *</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              For appointment reminders and confirmations
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="notes">
          <FormItem>
            <FormLabel class="flex items-center">
              <MessageSquare class="w-4 h-4 mr-2" />
              Special Requests or Notes
            </FormLabel>
            <FormControl>
              <Textarea
                v-bind="componentField"
                placeholder="Any special requests, allergies, or preferences we should know about..."
                rows="4"
              />
            </FormControl>
            <FormDescription>
              Optional - Help us personalize your experience
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
         <FormField v-slot="{ value, handleChange }" type="checkbox" name="consent">
            <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox :model-value="value" @update:model-value="handleChange" />
              </FormControl>
              <div class="space-y-1 leading-none">
                <FormLabel>
                  I agree to receive booking confirmations, reminders, and
                  spa-related communications. I understand that I can unsubscribe
                  at any time. *
                </FormLabel>
                <FormDescription>
                  Please accept our communication terms to proceed with your booking
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          </FormField>
          <div class="p-4 bg-primary/10 rounded-lg">
            <div class="flex items-start space-x-2">
              <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p class="text-sm font-medium mb-1">Your privacy is important to us</p>
                <p class="text-xs text-muted-foreground">
                  We use industry-standard encryption to protect your personal
                  information. Your data will only be used for booking management and
                  spa communications.
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-end w-full">
            <Button
              type="button"
              :disabled="!meta.valid"
              @click="nextStep"
            >
              Save
            </Button>
          </div>
      </CardContent>
    </Card>

    <!-- Privacy note -->
  </div>
</template>
