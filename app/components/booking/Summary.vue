<script setup lang="ts">
import { Calendar, Clock, MapPin } from "lucide-vue-next";
import type { BookingState } from ".";
import type { GenericObject } from "vee-validate";

defineProps<{ bookingData: GenericObject }>()
const bookingState: Ref<BookingState> = useState('bookingState', () => ({}))
const depositPercent = 20;
const servicePrice = bookingState.value.service?.price || 0;
const depositAmount = Math.round(servicePrice * (depositPercent / 100));
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center">
        <Calendar class="w-5 h-5 mr-2" />
        Booking Summary
      </CardTitle>
    </CardHeader>

    <CardContent class="space-y-4">
      <!-- Service -->
      <div v-if="bookingState.service" class="space-y-2">
        <div class="flex items-start justify-between">
          <div>
            <p class="font-medium">{{ bookingState.service.name }}</p>
            <div class="flex items-center text-sm text-muted-foreground">
              <Clock class="w-4 h-4 mr-1" />
              {{ bookingState.service.duration }} minutes
            </div>
          </div>
          <p class="font-semibold">{{ formatPrice(bookingState.service.price || 0) }}</p>
        </div>
      </div>

      <!-- Date & Time -->
      <div v-if="bookingState.dateTime" class="space-y-1">
        <div class="flex items-center space-x-2">
          <Calendar class="w-4 h-4 text-muted-foreground" />
          <p class="text-sm">{{ bookingState.dateTime.date.toDateString() }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Clock class="w-4 h-4 text-muted-foreground" />
          <p class="text-sm">{{ bookingState.dateTime.time.toLocaleTimeString() }}</p>
        </div>
      </div>

      <!-- Customer -->
      <div v-if="bookingData" class="space-y-1">
        <p v-if="bookingData.name" class="text-sm font-medium">{{ bookingData.name }}</p>
        <p v-if="bookingData.email" class="text-xs text-muted-foreground">{{ bookingData.email }}</p>
        <p v-if="bookingData.phone" class="text-xs text-muted-foreground">{{ bookingData.phone }}</p>
      </div>

      <!-- Payment Summary -->
      <div v-if="bookingState.service && bookingState.payment">
        <Separator />
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span>Service Total</span>
            <span>{{ formatPrice(servicePrice) }}</span>
          </div>

          <template v-if="bookingState.payment.method === 'deposit'">
            <div class="flex justify-between text-sm text-muted-foreground">
              <span>Deposit ({{ depositPercent }}%)</span>
              <span>{{ formatPrice(depositAmount) }}</span>
            </div>
            <div class="flex justify-between text-sm text-muted-foreground">
              <span>Pay at spa</span>
              <span>{{ formatPrice(servicePrice - depositAmount) }}</span>
            </div>
          </template>

          <Separator />

          <div class="flex justify-between font-semibold">
            <span>{{ bookingState.payment.method === "deposit" ? "Pay Now" : "Total" }}</span>
            <span>{{ bookingState.payment.method === "deposit" ? formatPrice(depositAmount) : formatPrice(servicePrice)
            }}</span>
          </div>
        </div>
      </div>

      <!-- Spa Location -->
      <div class="pt-4 border-t">
        <div class="flex items-start space-x-2">
          <MapPin class="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p class="text-sm font-medium">Vintage by Naomie Spa</p>
            <p class="text-xs text-muted-foreground">
              123 Luxury Lane<br>
              Victoria Island, Lagos<br>
              Nigeria
            </p>
          </div>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="p-3 bg-muted/20 rounded-lg">
        <p class="text-xs text-muted-foreground">
          <strong>Please arrive 15 minutes early</strong> to complete check-in and enjoy our complimentary relaxation
          area.
        </p>
      </div>
    </CardContent>
  </Card>
</template>
