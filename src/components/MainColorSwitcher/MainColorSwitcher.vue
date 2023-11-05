<script setup lang="ts">
import { useDarkModeStore } from '../../stores/dark-mode'
import { useColorSchemeStore, ColorSchemes } from '../../stores/color-scheme'
import { computed } from 'vue'

const colorScheme = computed(() => useColorSchemeStore().colorScheme)
const darkMode = computed(() => useDarkModeStore().darkMode)

const setColorSchemeClass = () => {
  const el = document.querySelectorAll('html')[0]
  el.setAttribute('class', colorScheme.value)
  darkMode.value && el.classList.add('dark')
}

const switchColorScheme = (colorScheme: ColorSchemes) => {
  useColorSchemeStore().setColorScheme(colorScheme)
  setColorSchemeClass()
}

setColorSchemeClass()
</script>

<template>
  <!-- BEGIN: Main Color Switcher -->
  <div
    class="box fixed bottom-0 right-0 z-50 mb-10 mr-52 flex h-12 items-center justify-center rounded-full border px-5 shadow-md"
  >
    <div class="mr-4 hidden text-slate-600 dark:text-slate-200 sm:block">
      Color Scheme
    </div>
    <a
      @click="switchColorScheme('default')"
      :class="[
        'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-blue-800 hover:border-slate-200',
        {
          'border-slate-300 dark:border-darkmode-800/80':
            colorScheme == 'default'
        },
        { 'border-white dark:border-darkmode-600': colorScheme != 'default' }
      ]"
    ></a>
    <a
      @click="switchColorScheme('theme-1')"
      :class="[
        'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-emerald-900 hover:border-slate-200',
        {
          'border-slate-300 dark:border-darkmode-800/80':
            colorScheme == 'theme-1'
        },
        { 'border-white dark:border-darkmode-600': colorScheme != 'theme-1' }
      ]"
    ></a>
    <a
      @click="switchColorScheme('theme-2')"
      :class="[
        'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-blue-900 hover:border-slate-200',
        {
          'border-slate-300 dark:border-darkmode-800/80':
            colorScheme == 'theme-2'
        },
        { 'border-white dark:border-darkmode-600': colorScheme != 'theme-2' }
      ]"
    ></a>
    <a
      @click="switchColorScheme('theme-3')"
      :class="[
        'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-cyan-900 hover:border-slate-200',
        {
          'border-slate-300 dark:border-darkmode-800/80':
            colorScheme == 'theme-3'
        },
        { 'border-white dark:border-darkmode-600': colorScheme != 'theme-3' }
      ]"
    ></a>
    <a
      @click="switchColorScheme('theme-4')"
      :class="[
        'block h-8 w-8 cursor-pointer rounded-full border-4 bg-indigo-900 hover:border-slate-200',
        {
          'border-slate-300 dark:border-darkmode-800/80':
            colorScheme == 'theme-4'
        },
        { 'border-white dark:border-darkmode-600': colorScheme != 'theme-4' }
      ]"
    ></a>
  </div>
  <!-- END: Main Color Switcher -->
</template>
