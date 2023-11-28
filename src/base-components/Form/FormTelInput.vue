<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input'
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

interface FormTelInputProps {
  modelValue?: string
  formInputSize?: 'sm' | 'lg'
  rounded?: boolean
}

const props = defineProps<FormTelInputProps>()
const emit = defineEmits(['update:modelValue', 'blur'])

const localValue = ref(props.modelValue)

const inputOptions = {
  styleClasses: [
    'transition duration-200 ease-in-out w-full text-sm border-0 border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90',
    'focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40',
    'dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80'
  ]
}

const handleBlur = () => {
  emit('blur', {
    target: {
      value: localValue.value
    }
  })
}

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <VueTelInput
    v-model="localValue"
    class="c-tel-input"
    :inputOptions="inputOptions"
    @blur="handleBlur"
  />
</template>

<style lang="css">
.c-tel-input {
  transition: all 200ms ease-in-out;
  width: 100%;
  font-size: small;
  border: 0;
  border-color: slategray; /* Assuming slate-200 is a light shade of slate */
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem; /* Rounded-md */
  background-color: rgb(246, 246, 246);
  position: relative;
}

.c-tel-input .vti__dropdown {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: transparent;
}

.c-tel-input .vti__input {
  padding-left: 3.5rem;
  border-color: rgb(226, 232, 240);
  background-color: transparent;
  border-radius: 0.375rem; /* Rounded-md */
}
</style>
