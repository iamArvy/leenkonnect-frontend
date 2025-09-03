<script setup lang="ts">
import { toast } from 'vue-sonner';
import { usePage } from '@inertiajs/vue3';
import { watch, nextTick } from 'vue';
import { Toaster } from '@/components/ui/sonner';
import { Flash } from '@/types';

const page = usePage<{ flash: Flash }>()

watch(
  () => page.props.flash,
  async (flash) => {
    await nextTick()
    if (flash?.success) {
      toast.success('Success', {
        description: flash.success,
        style: { borderColor: 'green', color: 'green' }
    });
    } else if (flash?.error) {
      toast.error('Error', {
        description: flash.error,
        style: { borderColor: 'red', color: 'red' }
    });
    }
  },
  { immediate: true }
);
</script>

<template>
  <Toaster />
</template>
