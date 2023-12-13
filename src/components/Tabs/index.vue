<script setup lang="ts">
import { defineProps, PropType, ref, defineComponent, computed } from 'vue'

export interface ITab {
  id: string
  name: string
  component: typeof defineComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: () => any
}

defineOptions({
  name: 'Tabs'
})
const props = defineProps({
  tabs: {
    type: Array as PropType<ITab[]>,
    required: true
  }
})

const currentTab = ref(props.tabs[0])
const currentTabComponent = computed(() => {
  if (currentTab.value.component) {
    return currentTab.value.component
  }

  if (currentTab.value.render) {
    return currentTab.value.render()
  }

  return null
})
const currentComponentProps = computed(() => currentTab.value.componentProps)

const handleClick = (tab: ITab) => {
  if (currentTab.value.id === tab.id) {
    return
  }
  currentTab.value = tab
}
</script>

<template>
  <section>
    <div class="box mb-2 mt-6">
      <div
        class="flex flex-col items-center justify-start gap-10 px-10 pb-3 pt-2 sm:flex-row"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="text-text_dark cursor-pointer border-b-[3px] border-transparent py-3 transition-all duration-300 hover:border-primary hover:text-primary"
          :class="{
            '!border-primary !text-primary': currentTab.id === tab.id
          }"
          @click="handleClick(tab)"
        >
          <span class="h-[22px]">{{ tab.name }}</span>
        </button>
      </div>
    </div>
    <div class="box" :key="currentTab.id">
      <component :is="currentTabComponent" v-bind="currentComponentProps" />
    </div>
  </section>
</template>
