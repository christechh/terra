<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { twMerge } from 'tailwind-merge'
import { computed, ref, watch } from 'vue'
import { zhTW } from 'date-fns/locale'

interface FormDatepickerProps {
  modelValue?: string
  formInputSize?: 'sm' | 'lg'
  rounded?: boolean
  monthPicker?: boolean
  autoApply?: boolean
  detail?: boolean
}

const props = withDefaults(defineProps<FormDatepickerProps>(), {
  monthPicker: false,
  autoApply: false,
  detail: false
})
const emit = defineEmits(['update:modelValue', 'blur'])

const transTimestampToString = (timestampString: string) => {
  const timestamp = Number(timestampString)
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  return props.detail
    ? `${year}-${month}-${day} ${hour}:${minute}:00`
    : props.monthPicker
      ? `${year}-${month}`
      : `${year}-${month}-${day}`
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
  emit('update:modelValue', transModalValue(newValue))
})
</script>

<template>
  <VueDatePicker
    v-model="localValue"
    class="c-date-picker p-0"
    :input-class-name="computedClass"
    :format="
      props.detail
        ? 'yyyy/MM/dd HH:mm:ss'
        : props.monthPicker
          ? 'yyyy/MM'
          : 'yyyy/MM/dd'
    "
    model-type="timestamp"
    :enable-time-picker="props.detail"
    :auto-apply="props.autoApply"
    @blur="handleBlur"
    :month-picker="props.monthPicker"
    :format-locale="zhTW"
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
