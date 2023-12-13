<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { PropType, computed } from 'vue'

export interface StepItem {
  title: string
  component?: any
  componentProps?: any
  render?: () => any
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ITitle = string | (() => any)

defineOptions({
  name: 'Steps'
})
const props = defineProps({
  items: {
    type: Array as PropType<StepItem[]>,
    default: () => []
  }
})

const getCurrentComponent = (item: StepItem) => {
  if (item.component) {
    return item.component
  }

  if (item.render) {
    return item.render()
  }

  return null
}
const getCurrentComponentProps = (item: StepItem) => {
  const defaultProps = {
    title: item.title
  }
  if (item.componentProps) {
    return {
      ...defaultProps,
      ...item.componentProps
    }
  }

  return defaultProps
}
const itemsLength = computed(() => props.items.length)

const isLastItem = (index: number) => index === itemsLength.value - 1

const getTitle = (title: ITitle) => {
  if (typeof title === 'function') {
    return title()
  }

  return title
}
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="item.title" class="relative flex">
      <div class="relative px-3">
        <div
          class="absolute bottom-0 left-1/2 top-0 z-0 w-[1px] bg-[#E3F2A5]"
          v-if="!isLastItem(index)"
        ></div>
        <div
          class="relative z-10 flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full bg-primary text-white"
        >
          {{ index + 1 }}
        </div>
      </div>
      <div class="w-full flex-1 pb-[28px]">
        <div class="mb-2 mt-1 font-semibold">
          <span v-if="typeof item.title === 'string'">
            {{ item.title }}
          </span>
          <span v-else>
            <component :is="getTitle(item.title)" />
          </span>
        </div>
        <component
          :is="getCurrentComponent(item)"
          v-bind="getCurrentComponentProps(item)"
        />
      </div>
    </div>
  </div>
</template>
