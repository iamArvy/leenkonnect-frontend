<script setup lang="ts">
import { getLocalTimeZone, today } from "@internationalized/date"
import type { DateValue } from "@internationalized/date"
import { ref, watch } from "vue"
import { format, addDays, isToday, isTomorrow } from "date-fns"
import { Calendar, Clock } from "lucide-vue-next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import type { BookingState, TimeForm, TimeSlot } from "."
import { generateMockSlots } from "./mock"

const bookingState: Ref<BookingState> = useState('bookingState',()=> ({}) )
const { service } = bookingState.value
const props = defineProps<{
  nextStep: () => void,
  values: TimeForm
  setFieldValue: <K extends keyof TimeForm>(
    field: K,
    value: TimeForm[K]
  ) => void
}>()

// State
const selectedDate = ref<Date>(new Date)
const availableSlots = ref<TimeSlot[]>([])
const selectedSlot = ref<TimeSlot | null>(null)

// Init with today
onMounted(() => {
  selectedDate.value = new Date
})

// Watch for date changes
watch(selectedDate, () => {
  if (selectedDate.value) {
    selectedSlot.value = null
    availableSlots.value = generateMockSlots(selectedDate.value)
  }
})

const handleSlotSelect = (slot: TimeSlot) => {
  selectedSlot.value = slot
  props.setFieldValue("time", slot.id)
  bookingState.value.dateTime = slot
  props.nextStep()
}

const getDateLabel = (date: Date) => {
  if (isToday(date)) return "Today"
  if (isTomorrow(date)) return "Tomorrow"
  return format(date, "EEE, MMM d")
}

const handleDateSelect = (v: DateValue | undefined) => {
  if(v) selectedDate.value = v.toDate(getLocalTimeZone())
}

const slotGroups = computed(() => [
  {
    label: "Morning (9:00 AM - 12:00 PM)",
    slots: availableSlots.value.filter((s) => s.time.getHours() < 12),
  },
  {
    label: "Afternoon (12:00 PM - 5:00 PM)",
    slots: availableSlots.value.filter(
      (s) => s.time.getHours() >= 12 && s.time.getHours() < 17
    ),
  },
  {
    label: "Evening (5:00 PM - 7:00 PM)",
    slots: availableSlots.value.filter((s) => s.time.getHours() >= 17),
  },
]);

const handleQuickSelect = (date: Date | undefined) => {
  if (date) {
    selectedDate.value = date
  }
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Calendar -->
      <Card>
        <CardContent class="p-3">
          <div class="flex items-center mb-4">
            <Calendar class="w-5 h-5 mr-2 text-primary" />
            <h3 class="font-semibold">Select Date</h3>
          </div>
          <CalendarComponent
            mode="single"
            initial-focus
            :min-value="today(getLocalTimeZone())"
            :class="cn('w-full pointer-events-auto')"
            @update:model-value="handleDateSelect"
          />
        </CardContent>
      </Card>

      <!-- Quick Date Selection -->
      <Card>
        <CardContent class="p-3">
          <div class="flex items-center mb-4">
            <Clock class="w-5 h-5 mr-2 text-primary" />
            <h3 class="font-semibold">Quick Select</h3>
          </div>
          <div class="space-y-2">
            <Button
              v-for="daysAhead in 7"
              :key="daysAhead"
              :variant="
                selectedDate &&
                format(selectedDate, 'yyyy-MM-dd') ===
                  format(addDays(new Date(), daysAhead - 1), 'yyyy-MM-dd')
                  ? 'default'
                  : 'outline'
              "
              class="w-full justify-start"
              type="button"
              @click="handleQuickSelect(addDays(new Date(), daysAhead - 1))"
            >
              {{ getDateLabel(addDays(new Date(), daysAhead - 1)) }}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Time Slots -->
    <Card v-if="selectedDate">
      <CardContent class="p-6">
        <h3 class="font-semibold mb-4">
          Available Times for {{ format(selectedDate, "MMMM d, yyyy") }}
        </h3>

        <div v-if="availableSlots.length > 0" class="space-y-6">
          <div v-for="group in slotGroups" :key="group.label">
            <template v-if="group.slots.length" >
              <h4 class="text-sm font-medium text-muted-foreground mb-3">
                {{ group.label }}
              </h4>
              <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                <Button
                  v-for="slot in group.slots"
                  :key="slot.id"
                  :variant="selectedSlot?.id === slot.id ? 'default' : 'outline'"
                  size="sm"
                  :disabled="!slot.isAvailable"
                  class="text-xs"
                  @click="handleSlotSelect(slot)"
                >
                  {{ slot.displayTime }}
                </Button>
              </div>
            </template>
          </div>
        </div>

        <div v-else class="text-center py-8">
          <p class="text-muted-foreground">
            No available slots for this date. Please try another day.
          </p>
        </div>
      </CardContent>
    </Card>

    <!-- Selected Slot -->
    <div v-if="selectedSlot" class="p-4 bg-primary/10 rounded-lg">
      <p class="text-sm">
        <span class="font-medium">Selected:</span>
        {{ format(selectedDate!, "MMMM d, yyyy") }} at
        {{ selectedSlot.displayTime }}
        <span class="text-muted-foreground ml-2">
          (Duration: {{ service?.duration }} minutes)
        </span>
      </p>
    </div>
  </div>
</template>
