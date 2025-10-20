<script setup lang="ts">
import { Calendar, X } from 'lucide-vue-next';

const isVisible = ref(false)
const isDismissed = ref(false)
const handleScroll = () => {
  if (window.scrollY > 500 && !isDismissed.value) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(isDismissed, (newVal) => {
  if (newVal) isVisible.value = false
})
</script>
<template>
  <div class="fixed bottom-6 right-6 z-40 transition-all duration-300" :class="isVisible ? 'translate-y-0 opacity-100'
    : 'translate-y-20 opacity-0'">
    <div class=" relative bg-gradient-primary rounded-full shadow-strong p-1 animate-float">
      <button @click="isDismissed = true" class="absolute -top-2 -right-2 w-6 h-6 bg-background rounded-full flex items-center justify-center
        shadow-medium hover:bg-muted transition-colors">
        <X class="w-3 h-3" />
      </button>
      <Button @click="navigateTo('/booking')" size="lg"
        class="bg-white text-primary hover:bg-white/90 rounded-full shadow-lg group">
        <Calendar class="w-5 h-5 mr-2" />
        Book Now
      </Button>
    </div>
  </div>
</template>