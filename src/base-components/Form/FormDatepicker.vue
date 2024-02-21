<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { twMerge } from 'tailwind-merge'
import { computed, ref, watch } from 'vue'

interface FormDatepickerProps {
  modelValue?: string
  formInputSize?: 'sm' | 'lg'
  rounded?: boolean
}

const props = defineProps<FormDatepickerProps>()
const emit = defineEmits(['update:modelValue', 'blur'])

const transTimestampToString = (timestampString: string) => {
  const timestamp = Number(timestampString)
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  return `${year}.${month}.${day} ${hour}:${minute}`
}
const isTimestampNotString = (value: string) => {
  return Number(value) > 0
}
const transModalValue = (value?: string) => {
  if (!value) {
    return ''
  }
  if (isTimestampNotString(value)) {
    return transTimestampToString(value)
  }
  return value
}

const localValue = ref(transModalValue(props.modelValue))

const computedClass = computed(() =>
  twMerge([
    'disabled:bg-[#F6F6F6] disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent disabled:text-[#939393]',
    '[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent',
    'transition duration-200 ease-in-out w-full text-sm border-0 border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80'
  ])
)

const handleBlur = () => {
  emit('blur', {
    target: {
      value: `${localValue.value}`
    }
  })
}

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <VueDatePicker
    v-model="localValue"
    class="c-date-picker p-0"
    :input-class-name="computedClass"
    format="yyyy.MM.dd"
    model-type="timestamp"
    :enable-time-picker="false"
    @blur="handleBlur"
  />
</template>

<style lang="css">
.c-date-picker {
  border: 0;
  border-radius: 0.375rem; /* Rounded-md */
}
.c-date-picker input {
  border: 0;
  border-radius: 0.375rem; /* Rounded-md */
}
.dp__action_select {
  background: var(--dp-primary-color) !important;
  color: var(--dp-primary-text-color) !important;
}
</style>
