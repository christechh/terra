<script setup lang="ts">
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { computed, TableHTMLAttributes, useAttrs, provide } from 'vue'
defineOptions({
  inheritAttrs: false,
  name: 'CTable'
})

export type ProvideTable = {
  dark: boolean
  bordered: boolean
  hover: boolean
  striped: boolean
  sm: boolean
  onSort?: (key: string, order: 'asc' | 'desc' | '') => void
}

interface TableProps extends /* @vue-ignore */ TableHTMLAttributes {
  dark?: boolean
  bordered?: boolean
  hover?: boolean
  striped?: boolean
  sm?: boolean
}

const { dark, bordered, hover, striped, sm } = withDefaults(
  defineProps<TableProps>(),
  {
    dark: false,
    bordered: false,
    hover: false,
    striped: false,
    sm: false
  }
)

const emits = defineEmits(['sort'])

const attrs = useAttrs()

const computedClass = computed(() =>
  twMerge([
    'w-full text-left c-table',
    dark && 'bg-dark text-white dark:bg-black/30',
    typeof attrs.class === 'string' && attrs.class
  ])
)

provide<ProvideTable>('table', {
  dark: dark,
  bordered: bordered,
  hover: hover,
  striped: striped,
  sm: sm,
  onSort: (key: string, order: 'asc' | 'desc' | '') => {
    emits('sort', { key, order })
  }
})
</script>

<template>
  <table :class="computedClass" v-bind="_.omit(attrs, 'class')">
    <slot></slot>
  </table>
</template>

<style>
.c-table tr:last-child td {
  border-bottom: none !important;
}
</style>
