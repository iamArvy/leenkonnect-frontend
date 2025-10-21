<script setup lang="ts">
import { computed } from "vue";
import { CreditCard, Building, Shield, AlertCircle } from "lucide-vue-next";
import type { BookingState, PaymentForm } from ".";
import type { FormMeta, GenericObject } from "vee-validate";

defineProps<{
  values: PaymentForm,
  meta: FormMeta<GenericObject>
  isSubmitting: boolean
}>()
const bookingState: Ref<BookingState> = useState('bookingState',()=> ({}) )

const depositPercent = 20;
const servicePrice = computed(() => bookingState.value.service?.price || 0);
const depositAmount = computed(() => Math.round(servicePrice.value * (depositPercent / 100)));

</script>

<template>
  <div class="space-y-6">
     <FormField v-slot="{ componentField }" type="radio" name="paymentMethod">
        <FormItem class="space-y-3">
          <FormLabel>Choose Payment Method</FormLabel>

          <FormControl>
            <RadioGroup
              class="flex flex-col space-y-1"
              v-bind="componentField"
            >
              <FormItem class="flex items-center space-y-0 gap-x-3">
                <FormControl>
                  <RadioGroupItem value="paystack" />
                </FormControl>
                <FormLabel class="font-normal">
                  <div class="flex items-start justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2">
                        <CreditCard class="w-5 h-5 text-primary" />
                        <span class="font-medium">Pay Deposit with Paystack</span>
                        <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          Recommended
                        </span>
                      </div>
                      <p class="text-sm text-muted-foreground">
                        Secure your appointment with a {{ depositPercent }}% deposit. Pay the remaining balance at the spa.
                      </p>
                      <div class="text-sm">
                        <div class="flex justify-between">
                          <span>Deposit ({{ depositPercent }}%):</span>
                          <span class="font-semibold">{{ formatPrice(depositAmount) }}</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Pay at spa:</span>
                          <span class="font-semibold">{{ formatPrice(servicePrice - depositAmount) }}</span>
                        </div>
                        <div class="flex justify-between pt-2 border-t">
                          <span class="font-semibold">Total:</span>
                          <span class="font-bold text-lg">{{ formatPrice(servicePrice) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FormLabel>
              </FormItem>
              <FormItem class="flex items-center space-y-0 gap-x-3">
                <FormControl>
                  <RadioGroupItem value="spa" />
                </FormControl>
                <FormLabel class="font-normal">
                  <div class="flex items-start justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2">
                        <Building class="w-5 h-5 text-primary" />
                        <span class="font-medium">Pay at Spa</span>
                      </div>
                      <p class="text-sm text-muted-foreground">
                        Reserve your appointment now and pay the full amount when you arrive.
                      </p>
                      <div class="text-sm">
                        <div class="flex justify-between">
                          <span class="font-semibold">Total to pay at spa:</span>
                          <span class="font-bold text-lg">{{ formatPrice(servicePrice) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

    <!-- Security Notice -->
    <div v-if="values.paymentMethod === 'paystack'" class="flex items-start space-x-3 p-4 bg-primary/10 rounded-lg">
      <Shield class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
      <div>
        <p class="text-sm font-medium mb-1">Secure Payment with Paystack</p>
        <p class="text-xs text-muted-foreground">
          Your payment is protected by industry-leading security. We don't store your card details.
        </p>
      </div>
    </div>

    <!-- Cancellation Policy -->
    <div class="flex items-start space-x-3 p-4 bg-muted/20 rounded-lg">
      <AlertCircle class="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
      <div>
        <p class="text-sm font-medium mb-1">Cancellation Policy</p>
        <p class="text-xs text-muted-foreground">
          Free cancellation up to 24 hours before your appointment. 
          Cancellations within 24 hours may incur a 50% charge. No-shows are charged in full.
        </p>
      </div>
    </div>

    <!-- Complete Booking Button -->
    <Button
      :disabled="!meta.valid"
      class="w-full"
      size="lg"
      type="submit"
    >
      <template v-if="isSubmitting">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>
            {{ values.paymentMethod === "paystack" ? "Processing Payment..." : "Confirming Booking..." }}
          </span>
        </div>
      </template>
      <template v-else>
        {{ values.paymentMethod === "paystack" 
          ? `Pay ${formatPrice(depositAmount)} & Complete Booking` 
          : "Complete Booking (Pay at Spa)" }}
      </template>
    </Button>

    <p v-if="values.paymentMethod === 'paystack'" class="text-xs text-center text-muted-foreground">
      You'll be redirected to Paystack to complete your payment securely
    </p>
  </div>
</template>
