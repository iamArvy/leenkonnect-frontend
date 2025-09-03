<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ref } from 'vue'

const props = defineProps<{
    label: string,
    // submit: () => void
    // modelValue: any
    // clearValue?: any
}>()
// const defaultClearValue = props.clearValue !== undefined ? props.clearValue : null
const open = ref(false)
import { ChevronDownIcon } from 'lucide-vue-next';
// const submit = () => {
//     open.value = false
//     props.submit()
// }
// const emit = defineEmits(['update:modelValue'])

// const clear = () => {
//     emit('update:modelValue', defaultClearValue)
//     submit()
// }
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        role="combobox"
        :aria-expanded="open"
        class="w-fit justify-between"
      >
        {{ label }}
        <ChevronDownIcon />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="min-w-[200px] p-2">
        <slot />
    </PopoverContent>
  </Popover>
</template>
