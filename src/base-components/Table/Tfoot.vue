<script setup lang="ts">
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { computed, HTMLAttributes, useAttrs, provide } from 'vue'
defineOptions({
  inheritAttrs: false
})
export type ProvideTfoot = {
  variant?: 'default' | 'light' | 'dark'
}

interface TfootProps extends /* @vue-ignore */ HTMLAttributes {
  variant?: 'default' | 'light' | 'dark'
}

const props = withDefaults(defineProps<TfootProps>(), {
  variant: 'default'
})

const attrs = useAttrs()

const computedClass = computed(() =>
  twMerge([
    props.variant === 'light' && 'bg-slate-200/60 dark:bg-slate-200',
    props.variant === 'dark' && 'bg-dark text-white dark:bg-black/30',
    typeof attrs.class === 'string' && attrs.class
  ])
)

provide<ProvideTfoot>('tfoot', {
  variant: props.variant
})
</script>

<template>
  <tfoot :class="computedClass" v-bind="_.omit(attrs, 'class')">
    <slot></slot>
  </tfoot>
</template>
