<script setup lang="ts">
import _ from 'lodash'

interface DividerProps {
  as?: string | object
}

const { as } = withDefaults(defineProps<DividerProps>(), {
  as: 'div'
})
</script>

<template>
  <component :is="as" class="relative h-px w-full bg-white/[0.08]">
    <slot></slot>
  </component>
</template>
