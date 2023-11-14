<script setup lang="ts">
import countryCodes, { CountryProperty } from 'country-codes-list'
import * as FlagIcon from 'country-flag-icons/string/3x2'
import { computed, ref, onBeforeUnmount } from 'vue'
import Lucide from '../../base-components/Lucide'

interface Props {
  modelValue: string
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
  // eslint-disable-next-line no-debugger
  debugger
  document.getElementById(c as string)?.scrollIntoView({ behavior: 'smooth' })
})
onBeforeUnmount(() => {
  window.removeEventListener('click', close)
})
</script>

<template>
  <div class="dashboard-bg relative flex items-center">
    <div
      class="flex cursor-pointer items-center"
      @click.stop="isOpen = !isOpen"
    >
      <div v-html="selectedFlag" class="w-7 pl-2" />
      <Lucide icon="ChevronDown" width="12" class="ml-2" />
    </div>

    <ul
      v-if="isOpen"
      class="absolute top-9 z-10 h-52 w-[520px] overflow-y-auto bg-white shadow-xl"
    >
      <li
        v-for="country in countriesCodeList"
        :id="country.country"
        :key="country.country"
        class="flex cursor-pointer items-center p-2 hover:bg-slate-100"
        @click="selectHandler(country)"
      >
        <div class="mr-2 w-5" v-html="country.flag"></div>
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>
