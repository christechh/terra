<script setup lang="ts">
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { MenuItems as HeadlessMenuItems, TransitionRoot } from '@headlessui/vue'
import { useAttrs, computed } from 'vue'
defineOptions({
  inheritAttrs: false
})
interface ItemsProps
  extends /* @vue-ignore */ ExtractProps<typeof HeadlessMenuItems> {
  as?: string | object
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-start'
    | 'left'
    | 'left-end'
}

const { as } = withDefaults(defineProps<ItemsProps>(), {
  as: 'div',
  placement: 'bottom-end'
})

const attrs = useAttrs()
const computedClass = computed(() =>
  twMerge([
    'p-2 shadow-[0px_3px_10px_#00000017] bg-white border-transparent rounded-md dark:bg-darkmode-600 dark:border-transparent',
    typeof attrs.class === 'string' && attrs.class
  ])
)
</script>

<template>
  <TransitionRoot
    as="template"
    enter="transition-all ease-linear duration-150"
    enterFrom="mt-5 invisible opacity-0 translate-y-1"
    enterTo="mt-1 visible opacity-100 translate-y-0"
    entered="mt-1"
    leave="transition-all ease-linear duration-150"
    leaveFrom="mt-1 visible opacity-100 translate-y-0"
    leaveTo="mt-5 invisible opacity-0 translate-y-1"
  >
    <div
      :class="[
        'absolute z-30',
        { 'bottom-[100%] left-0': placement == 'top-start' },
        { 'bottom-[100%] left-[50%] translate-x-[-50%]': placement == 'top' },
        { 'bottom-[100%] right-0': placement == 'top-end' },
        { 'left-[100%] translate-y-[-50%]': placement == 'right-start' },
        { 'left-[100%] top-[50%] translate-y-[-50%]': placement == 'right' },
        { 'bottom-0 left-[100%]': placement == 'right-end' },
        { 'right-0 top-[100%]': placement == 'bottom-end' },
        { 'left-[50%] top-[100%] translate-x-[-50%]': placement == 'bottom' },
        { 'left-0 top-[100%]': placement == 'bottom-start' },
        { 'right-[100%] translate-y-[-50%]': placement == 'left-start' },
        { 'right-[100%] top-[50%] translate-y-[-50%]': placement == 'left' },
        { 'bottom-0 right-[100%]': placement == 'left-end' }
      ]"
    >
      <HeadlessMenuItems as="template">
        <component
          :is="as"
          :class="computedClass"
          v-bind="_.omit(attrs, 'class')"
        >
          <slot></slot>
        </component>
      </HeadlessMenuItems>
    </div>
  </TransitionRoot>
</template>
