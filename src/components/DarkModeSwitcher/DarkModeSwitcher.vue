<script setup lang="ts">
import { useDarkModeStore } from '../../stores/dark-mode'
import { computed } from 'vue'

const darkMode = computed(() => useDarkModeStore().darkMode)

const setDarkModeClass = () => {
  const el = document.querySelectorAll('html')[0]
  darkMode.value ? el.classList.add('dark') : el.classList.remove('dark')
}

const switchMode = () => {
  useDarkModeStore().setDarkMode(!darkMode.value)
  setDarkModeClass()
}

setDarkModeClass()
</script>

<template>
  <!-- BEGIN: Dark Mode Switcher -->
  <div
    class="box fixed bottom-0 left-0 z-50 mb-10 ml-10 flex h-12 w-40 cursor-pointer items-center justify-center rounded-full border shadow-md"
    @click="switchMode"
  >
    <div class="mr-4 text-slate-600 dark:text-slate-200">Dark Mode</div>
    <div
      :class="[
        'relative h-[24px] w-[38px] cursor-pointer rounded-full border p-px outline-none',
        'before:absolute before:inset-y-0 before:my-auto before:h-[22px] before:w-[22px] before:rounded-full before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-all before:duration-200 before:content-[\'\']',
        {
          'border-primary bg-primary': darkMode,
          'before:ml-[13px] before:bg-white': darkMode
        }
      ]"
    ></div>
  </div>
  <!-- END: Dark Mode Switcher -->
</template>
