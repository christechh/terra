<script setup lang="ts">
interface DividerProps {
  as?: string | object
}

const { as } = withDefaults(defineProps<DividerProps>(), {
  as: 'div'
})
</script>

<template>
  <component
    :is="as"
    class="relative z-10 h-px w-full bg-white/[0.08] dark:bg-white/[0.07]"
  >
    <slot></slot>
  </component>
</template>
