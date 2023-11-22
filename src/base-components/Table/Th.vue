<script setup lang="ts">
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { ref, computed, useAttrs, inject } from 'vue'
import { ProvideTable } from './Table.vue'
import { ProvideThead } from './Thead.vue'
import Lucide from '../Lucide/index'
// import { requiredUnless } from "@vuelidate/validators";
defineOptions({
  inheritAttrs: false,
  name: 'CTh'
})

const table = inject<ProvideTable>('table', {
  dark: false,
  bordered: false,
  hover: false,
  striped: false,
  sm: false
})
const thead = inject<ProvideThead>('thead', {
  variant: 'default'
})

const props = defineProps<{
  sortableKey?: string
}>()

const attrs = useAttrs()

const isSort = ref<'asc' | 'desc' | ''>('')
const stepIndex = ref(0)
const step = ref<['', 'asc', 'desc']>(['', 'asc', 'desc'])
const computedClass = computed(() =>
  twMerge([
    'font-medium px-5 py-3 border-b-2 dark:border-darkmode-300',
    thead?.variant === 'light' && 'border-b-0 text-slate-700',
    thead?.variant === 'dark' && 'border-b-0',
    table?.dark && 'border-slate-600 dark:border-darkmode-300',
    table?.bordered && 'border-l border-r border-t',
    table?.sm && 'px-4 py-2',
    typeof attrs.class === 'string' && attrs.class,
    props.sortableKey && 'cursor-pointer hover:text-primary'
  ])
)
const icon = computed(() => {
  if (isSort.value === 'asc') {
    return 'ChevronDown'
  }
  return 'ChevronUp'
})
const nextSort = () => {
  if (!props.sortableKey) {
    return
  }

  stepIndex.value = (stepIndex.value + 1) % step.value.length
  isSort.value = step.value[stepIndex.value]

  if (table.onSort) {
    table.onSort(props.sortableKey, isSort.value)
  }
}
</script>

<template>
  <th :class="computedClass" v-bind="_.omit(attrs, 'class')" @click="nextSort">
    <div class="flex justify-center">
      <slot></slot>
      <div v-if="sortableKey && isSort">
        <Lucide :icon="icon" />
      </div>
    </div>
  </th>
</template>
