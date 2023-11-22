<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import * as lucideIcons from 'lucide-vue-next'
import Lucide from '../../base-components/Lucide'

export type Icon = keyof typeof lucideIcons
const props = defineProps<{
  label?: string
  link?: string
  icon?: Icon
}>()
const emit = defineEmits(['click'])

const router = useRouter()

const handleClick = () => {
  if (props.link) {
    router.push(props.link)
    return
  }

  emit('click')
}
</script>

<template>
  <button
    class="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[10px] bg-white transition-colors duration-200 hover:bg-dashboard_bg"
    @click="handleClick"
  >
    <slot>
      <Lucide :icon="icon" v-if="icon" />
    </slot>
  </button>
</template>
