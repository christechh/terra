<script setup lang="ts">
import { ref } from 'vue'
import Lucide from '../../base-components/Lucide'

interface Props {
  modelValue: string
}

const { modelValue } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const colors = [
  '#02b13f',
  '#007abf',
  '#ffa01a',
  '#ff85b0',
  '#cf93e6',
  '#e0eb76'
]

const isColorExpand = ref(false)
</script>

<template>
  <div class="mt-2 bg-[#F6F6F6] p-5 dark:bg-darkmode-700">
    <div class="flex items-center justify-between">
      <div
        v-for="color in colors"
        :key="color"
        :class="`flex h-8 w-8 cursor-pointer items-center justify-center rounded`"
        :style="`background-color: ${color}`"
        @click="emit('update:modelValue', color)"
      >
        <Lucide
          v-if="modelValue?.toLocaleLowerCase() === color"
          icon="Check"
          color="white"
          width="28"
        />
      </div>

      <button @click="isColorExpand = !isColorExpand">
        <Lucide
          icon="ChevronDown"
          width="20"
          class="cursor-pointer transition-all"
          :class="{ 'rotate-180': isColorExpand }"
        />
      </button>
    </div>
    <div v-if="isColorExpand">
      <hr class="my-5 px-0" />
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
