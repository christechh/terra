<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="flex flex-col items-center gap-2 border-b border-gray-200 p-5 sm:flex-row"
  >
    <div>
      <h2 class="mr-auto text-base font-semibold">
        {{ title }}
      </h2>
      <slot name="subtitle" />
    </div>
    <div class="ml-auto mt-0 flex w-auto items-center">
      <slot name="right" />
    </div>
  </div>
</template>
