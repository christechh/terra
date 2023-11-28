<script setup lang="ts">
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import {
  computed,
  InputHTMLAttributes,
  useAttrs,
  inject,
  defineProps,
  defineEmits
} from 'vue'
import Lucide from '../Lucide/Lucide.vue'
import { ProvideFormInline } from './FormInline.vue'
import { ProvideInputGroup } from './InputGroup/InputGroup.vue'
defineOptions({
  inheritAttrs: false
})
interface FormInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  modelValue?: InputHTMLAttributes['value']
  formInputSize?: 'sm' | 'lg'
  rounded?: boolean
  clearable?: boolean
}

interface FormInputEmit {
  (e: 'update:modelValue', value: string): void
  (e: 'change'): void
}

const props = defineProps<FormInputProps>()

const attrs = useAttrs()

const formInline = inject<ProvideFormInline>('formInline', false)
const inputGroup = inject<ProvideInputGroup>('inputGroup', false)

const computedClass = computed(() =>
  twMerge([
    'disabled:bg-[#F6F6F6] disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent disabled:text-[#939393]',
    '[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent',
    'transition duration-200 ease-in-out w-full text-sm border-0 border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80',
    props.formInputSize == 'sm' && 'text-xs py-1.5 px-2',
    props.formInputSize == 'lg' && 'text-lg py-1.5 px-4',
    props.rounded && 'rounded-full',
    formInline && 'flex-1',
    inputGroup && 'rounded-none first:rounded-l last:rounded-r z-10',
    props.clearable && 'pr-7',
    typeof attrs.class === 'string' && attrs.class
  ])
)

const emit = defineEmits<FormInputEmit>()

const localValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <div class="relative flex">
    <slot name="prefix" />
    <input
      :class="computedClass"
      :type="props.type"
      v-bind="_.omit(attrs, 'class')"
      v-model="localValue"
      @change="emit('change')"
    />
    <Lucide
      v-if="clearable && localValue"
      icon="XCircle"
      class="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer text-desc_font"
      @click="localValue = ''"
    />
  </div>
</template>
