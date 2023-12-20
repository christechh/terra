<script setup lang="ts">
import {
  defineProps,
  PropType,
  ref,
  defineComponent,
  computed,
  watch
} from 'vue'

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
  },
  loseSelfControl: {
    type: Boolean,
    default: false
  },
  index: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['click'])

const renderCount = ref(0)
const currentTab = ref(props.tabs[props.index])
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

const handleClick = (tab: ITab, index: number) => {
  emit('click', { tab, index })

  if (currentTab.value.id === tab.id) {
    return
  }
  if (props.loseSelfControl) {
    return // Control by props
  }

  renderCount.value++
  currentTab.value = tab
}

watch(
  () => props.index,
  (val: number) => {
    renderCount.value++
    currentTab.value = props.tabs[val]
  }
)
</script>

<template>
  <section>
    <div class="box mb-2 mt-6">
      <div
        class="flex flex-col items-center justify-start gap-10 px-10 pb-3 pt-2 sm:flex-row"
      >
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="text-text_dark cursor-pointer border-b-[3px] border-transparent py-3 transition-all duration-300 hover:border-primary hover:text-primary"
          :class="{
            '!border-primary !text-primary': currentTab.id === tab.id
          }"
          @click="handleClick(tab, index)"
        >
          <span class="h-[22px]">{{ tab.name }}</span>
        </button>
      </div>
    </div>
    <div :key="renderCount">
      <component :is="currentTabComponent" v-bind="currentComponentProps" />
    </div>
  </section>
</template>
