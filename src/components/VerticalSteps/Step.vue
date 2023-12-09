<script lang="ts" setup>
const props = defineProps({
  step: {
    type: Number,
    required: true
  },
  isFinal: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <li class="pb-5 ps-6" :class="{ 'border-s border-[#E3F2A5]': !isFinal }">
    <span
      class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-1 ring-white dark:bg-blue-900 dark:ring-gray-900"
    >
      {{ props.step }}
    </span>
    <slot></slot>
  </li>
</template>
