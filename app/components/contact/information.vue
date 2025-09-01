<script setup lang="ts">
import { Clock, Mail, MapPin, Phone } from "lucide-vue-next";

const information = [
  {
    label: "Head Office",
    value: "1 Awe St, Ojodu, Lagos 101232, Lagos.",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "support@leenkonnect.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+2347069973395, +2348073467445",
    icon: Phone,
  },
  {
    label: "Hours",
    value: "Monday - Friday: 9:00 AM - 8:00 PM, Saturday - Sunday: 8:00 AM - 9:00 PM",
    icon: Clock,
  }
]
</script>
<template>
  <div class="space-y-8">
    <div class="bg-white rounded-2xl p-8 shadow-soft">
      <h3 class="font-playfair text-2xl font-semibold text-foreground mb-6">
        Visit us
      </h3>
      
      <div class="space-y-6">
        <div v-for="item in information" :key="item.value" class="flex items-start space-x-4">
          <component :is="item.icon" class="w-6 h-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <p class="font-inter font-medium text-foreground">{{ item.label }}</p>
            <p class="font-inter text-muted-foreground">
              {{ item.value }}
            </p>
          </div>
        </div>
        <!-- <div class="flex items-start space-x-4">
          <Clock class="w-6 h-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <p class="font-inter font-medium text-foreground">Hours</p>
            <div class="font-inter text-muted-foreground space-y-1">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.035940157807!2d3.3319874737288018!3d6.642459193352099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91575a8aaba1%3A0x7288867b59af063!2s1%20Awe%20St%2C%20Ojodu%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756688616848!5m2!1sen!2sng"
      class="bg-muted rounded-2xl h-64 w-full flex items-center justify-center"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" />
  </div>
</template>
