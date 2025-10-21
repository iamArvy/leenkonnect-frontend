<script setup lang="ts">
import { ref, computed } from "vue";
import { Search, Clock } from "lucide-vue-next";
import { mockServices as services } from "./mock";
import type { BookingState, Service, ServiceForm } from ".";

const bookingState: Ref<BookingState> = useState('bookingState',()=> ({}) )

const props = defineProps<{
  nextStep: () => void,
  values: ServiceForm
  setFieldValue: <K extends keyof ServiceForm>(
    field: K,
    value: ServiceForm[K]
  ) => void
}>()
const searchTerm = ref("");

const filteredServices = computed(() =>
  services.value.filter(service =>
    service.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const categories = computed(() =>
  Array.from(new Set(services.value.map(s => s.category)))
);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
};

const setService = (service: Service) => {
  bookingState.value.service = service
  props.setFieldValue('serviceId', service.id);
  props.nextStep()
}
</script>

<template>
  <div class="space-y-6">
    <!-- Search -->
    <div class="relative">
      <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        v-model="searchTerm"
        placeholder="Search services..."
        class="pl-10"
      />
    </div>

    <!-- Category Filter -->
    <div class="flex flex-wrap gap-2">
      <Badge variant="outline" class="cursor-pointer">All Services</Badge>
      <Badge
        v-for="category in categories"
        :key="category"
        variant="outline"
        class="cursor-pointer"
      >
        {{ category }}
      </Badge>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        v-for="service in filteredServices"
        :key="service.id"
        class="cursor-pointer transition-all hover:shadow-elegant hover:scale-105"
        :class="{
          'ring-2 ring-primary bg-primary/5': values.serviceId === service.id
        }"
        @click="setService(service)"
      >
        <CardContent class="p-6">
          <div class="space-y-3">
            <div class="flex justify-between items-start">
              <h3 class="font-playfair text-xl font-medium">{{ service.name }}</h3>
              <Badge variant="secondary">{{ service.category }}</Badge>
            </div>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ service.description }}</p>
            <div class="flex justify-between items-center pt-3 border-t">
              <div class="flex items-center text-sm text-muted-foreground">
                <Clock class="w-4 h-4 mr-1" />
                {{ service.duration }} min
              </div>
              <div class="flex items-center font-semibold text-lg text-primary">
                {{ formatPrice(service.price) }}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <div v-if="filteredServices.length === 0" class="text-center py-12">
      <p class="text-muted-foreground">No services found matching your search.</p>
    </div>
  </div>
</template>
