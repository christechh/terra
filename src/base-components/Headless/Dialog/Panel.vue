<script setup lang="ts">
import {
  DialogPanel as HeadlessDialogPanel,
  TransitionChild
} from '@headlessui/vue'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { ProvideDialog } from './Dialog.vue'
import { inject, useAttrs, computed } from 'vue'
defineOptions({
  inheritAttrs: false
})

interface IOptions {
  enter: string
  enterFrom: string
  enterTo: string
  entered: string
  leave: string
  leaveFrom: string
  leaveTo: string
}
interface PanelProps
  extends /* @vue-ignore */ ExtractProps<typeof HeadlessDialogPanel> {
  as?: string | object
  options?: IOptions
}

const { as, options } = withDefaults(defineProps<PanelProps>(), {
  as: 'div'
})

const dialog = inject<ProvideDialog>('dialog')

const attrs = useAttrs()
const computedClass = computed(() =>
  twMerge([
    'w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-transform dark:bg-darkmode-600',
    dialog?.size == 'md' && 'sm:w-[460px]',
    dialog?.size == 'sm' && 'sm:w-[300px]',
    dialog?.size == 'lg' && 'sm:w-[600px]',
    dialog?.size == 'xl' && 'sm:w-[600px] lg:w-[900px]',
    dialog?.zoom.value && 'scale-105',
    typeof attrs.class === 'string' && attrs.class
  ])
)
const panelOptions = computed<IOptions>(() => {
  return {
    enter: options?.enter || 'ease-in-out duration-500',
    enterFrom: options?.enterFrom || 'opacity-0 -mt-16',
    enterTo: options?.enterTo || 'opacity-100 mt-16',
    entered: options?.entered || 'opacity-100 mt-16',
    leave: options?.leave || 'ease-in-out duration-[400ms]',
    leaveFrom: options?.leaveFrom || 'opacity-100 mt-16',
    leaveTo: options?.leaveTo || 'opacity-0 -mt-16'
  }
})
</script>

<template>
  <TransitionChild
    as="div"
    enter="ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in-out duration-[400ms]"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    class="fixed inset-0 bg-black/60"
    aria-hidden="true"
  />
  <TransitionChild
    as="div"
    :enter="panelOptions.enter"
    :enterFrom="panelOptions.enterFrom"
    :enterTo="panelOptions.enterTo"
    :entered="panelOptions.entered"
    :leave="panelOptions.leave"
    :leaveFrom="panelOptions.leaveFrom"
    :leaveTo="panelOptions.leaveTo"
    class="fixed inset-0"
  >
    <HeadlessDialogPanel as="template">
      <component
        :is="as"
        :class="computedClass"
        v-bind="_.omit(attrs, 'class')"
      >
        <slot></slot>
      </component>
    </HeadlessDialogPanel>
  </TransitionChild>
</template>
