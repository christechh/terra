<script setup lang="ts">
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import {
  computed,
  InputHTMLAttributes,
  useAttrs,
  inject,
  useSlots,
  defineProps,
  defineEmits
} from 'vue'
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
  inputClass?: string
}

interface FormInputEmit {
  (e: 'update:modelValue', value: string): void
  (e: 'change'): void
}

const props = defineProps<FormInputProps>()

const attrs = useAttrs()
const slots = useSlots()
console.log('slots', slots)

const formInline = inject<ProvideFormInline>('formInline', false)
const inputGroup = inject<ProvideInputGroup>('inputGroup', false)

const hasPrefixSlot = computed(() => !!slots.prefix)
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
    hasPrefixSlot.value && 'pl-10',
    typeof props.inputClass === 'string' && props.inputClass
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
  <div
    class="relative flex w-full"
    :class="typeof attrs.class === 'string' && attrs.class"
  >
    <div class="absolute bottom-0 left-0 top-0 w-10">
      <slot name="prefix" />
    </div>
    <input
      :class="computedClass"
      :type="props.type"
      v-bind="_.omit(attrs, 'class')"
      v-model="localValue"
      @change="emit('change')"
    />
    <div
      v-if="clearable && localValue"
      @click="localValue = ''"
      class="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer text-desc_font"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        class="dp__icon dp__clear_icon dp__input_icons"
      >
        <path
          d="M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
        ></path>
        <path
          d="M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
        ></path>
      </svg>
    </div>
  </div>
</template>
