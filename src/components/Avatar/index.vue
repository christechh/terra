<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  avatar: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})

const firstText = computed(() => {
  return props.name ? props.name[0] : ''
})
</script>

<template>
  <div
    class="flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full bg-slate-100"
  >
    <img :src="avatar" v-if="avatar" />
    <span v-else>{{ firstText }}</span>
  </div>
</template>
