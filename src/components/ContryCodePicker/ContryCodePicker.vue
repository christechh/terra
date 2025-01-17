<script setup lang="ts">
import countryCodes, { CountryProperty } from 'country-codes-list'
import * as FlagIcon from 'country-flag-icons/string/3x2'
import { twMerge } from 'tailwind-merge'
import { computed, onBeforeUnmount, ref } from 'vue'
import Lucide from '../../base-components/Lucide'

interface Props {
  modelValue: string
  white?: boolean
  disabled?: boolean
  class?: string
  showCode?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myCountryCodesObject = countryCodes.customList(
  'countryCode' as CountryProperty,
  '{countryNameEn}({countryNameLocal}) +{countryCallingCode}'
)
const countriesCodeList = Object.entries(myCountryCodesObject)
  .map(([key, value]) => {
    return {
      country: key,
      name: value,
      phoneCode: `+${value.split('+')[1]}`,
      flag: FlagIcon[key as keyof typeof FlagIcon]
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

const isOpen = ref(false)

const selectedFlag = computed(() => {
  return countriesCodeList.find((c) => c.phoneCode === props.modelValue)?.flag
})

const selectHandler = (country: { phoneCode: string }) => {
  emit('update:modelValue', country.phoneCode)
  isOpen.value = false
}

const close = () => {
  isOpen.value = false
}

window.addEventListener('click', close)
window.addEventListener('keydown', (e: KeyboardEvent) => {
  const char = e.key.toUpperCase()
  const c = countriesCodeList.find((c) => c.name.startsWith(char))?.country
  document.getElementById(c as string)?.scrollIntoView({ behavior: 'smooth' })
})
onBeforeUnmount(() => {
  window.removeEventListener('click', close)
})

const toggleMenu = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

const computedClass = computed(() =>
  twMerge([!props.white && 'dashboard-bg', props.class])
)
</script>

<template>
  <div class="relative flex items-center" :class="computedClass">
    <div class="flex cursor-pointer items-center" @click.stop="toggleMenu">
      <div v-html="selectedFlag" class="w-7 pl-2" />
      <span class="ml-2 text-sm" v-if="props.showCode">{{ modelValue }}</span>
      <Lucide icon="ChevronDown" width="12" class="ml-2" />
    </div>

    <ul
      v-if="isOpen"
      class="absolute top-9 z-10 h-52 w-[520px] overflow-y-auto bg-white shadow-xl dark:bg-darkmode-700"
    >
      <li
        v-for="country in countriesCodeList"
        :id="country.country"
        :key="country.country"
        class="flex cursor-pointer items-center p-2 text-sm hover:bg-slate-100 dark:hover:bg-darkmode-600"
        @click="selectHandler(country)"
      >
        <div class="mr-2 w-5" v-html="country.flag"></div>
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>
