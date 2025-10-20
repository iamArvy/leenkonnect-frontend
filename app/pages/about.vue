<script setup lang="ts">
import { Award, Heart, TrendingUp, Users } from 'lucide-vue-next';

const hero = {
  title: "About us",
  description: "Learn more about our mission, vision, and values",
  bg: "/images/homehero.jpg"
};
const stats = [
  { label: "Clients Served", value: "500+", icon: Users },
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "Projects Completed", value: "1000+", icon: TrendingUp },
  { label: "Customer Satisfaction", value: "98%", icon: Heart },
];

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Consulting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Emily Taylor",
    role: "Lead Security Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

const values = [{ name: "Excellence" }, { name: "Innovation" }, { name: "Integrity" }]

</script>
<template>
  <main>
    <HeroSection v-bind="hero" />
    <section class="py-20 bg-muted">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card class="p-8 animate-fade-in">
            <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
            <p class="text-muted-foreground leading-relaxed">
              To empower businesses of all sizes with cutting-edge technology
              solutions and expert guidance, enabling them to thrive in the digital
              age. We believe in building long-term partnerships based on trust,
              innovation, and measurable results.
            </p>
          </Card>
          <Card class="p-8 animate-fade-in" :style="{ animationDelay: '100ms' }">
            <h2 class="text-3xl font-bold mb-4">Our Vision</h2>
            <p class="text-muted-foreground leading-relaxed">
              To be the leading IT consulting and technology provider, recognized for
              our commitment to excellence, innovation, and customer success. We
              envision a future where every business has access to world-class IT
              solutions that drive growth and transformation.
            </p>
          </Card>
        </div>
      </div>
    </section>
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="(stat, index) in stats" :key="index"
            class="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            :style="{ animationDelay: `${index * 100}ms` }">
            <div class="w-14 h-14 rounded-full bg-gradient-cta flex items-center justify-center mx-auto mb-4">
              <component :is="stat.icon" class="w-7 h-7 text-white" />
            </div>
            <div class="text-3xl font-bold text-primary mb-2">
              {{ stat.value }}
            </div>
            <div class="text-muted-foreground">{{ stat.label }}</div>
          </Card>
        </div>
      </div>
    </section>


    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card v-for="(member, index) in team" :key="member.name"
            class="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in py-0"
            :style="{ animationDelay: `${index * 100}ms` }">
            <div class="aspect-square overflow-hidden">
              <img :src="member.image" :alt="member.name"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-1">{{ member.name }}</h3>
              <p class="text-muted-foreground">{{ member.role }}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-cta text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p class="text-white/90 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card v-for="(value, index) in values" :key="index"
            class="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 animate-fade-in"
            :style="{ animationDelay: `${index * 100}ms` }">
            <h3 class="text-2xl font-bold mb-3">{{ value.name }}</h3>
            <p class="text-white/90">
              We are committed to delivering the highest quality solutions and
              exceeding our clients' expectations in every interaction.
            </p>
          </Card>
        </div>
      </div>
    </section>
  </main>

</template>