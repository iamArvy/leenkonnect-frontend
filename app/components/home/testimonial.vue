<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next';

const header = {
  title: 'What Our Clients Say',
  subtitle: 'Real stories from our satisfied customers',
}
function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('');
}
const { data: testimonials } = useFetch('/api/testimonials')
</script>
<template>
  <NuxtLayout name="section" v-bind="header">
    <div class="flex flex-col sm:grid grid-cols-3 gap-7 my-8">
      <Card v-for="testimonial in testimonials?.items" :key="testimonial.id"
        class="px-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-background animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}>
        <Quote class="w-10 h-10 text-primary/20" />

        <div class="flex">
          <Star v-for="i in testimonial.rating" :key="i" class="w-5 h-5 fill-yellow-400 text-yellow-400" />
        </div>

        <p class="text-foreground leading-relaxed">
          "{{ testimonial.content }}"
        </p>

        <div class="flex items-center gap-3">
          <Avatar class="size-12">
            <AvatarImage :src="testimonial.image" :alt="testimonial.name" class="object-cover" />
            <AvatarFallback>
              {{ getInitials(testimonial.name) }}
            </AvatarFallback>
          </Avatar>
          <div>
            <div class="font-semibold">{{ testimonial.name }}</div>
            <div class="text-sm text-muted-foreground">
              {{ testimonial.role }}
            </div>
          </div>
        </div>
      </Card>
    </div>
  </NuxtLayout>
</template>