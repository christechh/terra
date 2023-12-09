<script lang="ts" setup>
import Picker from 'vanilla-picker'
import { onMounted, ref } from 'vue'

const pickerEl = ref<HTMLElement>()

onMounted(() => {
  const el = pickerEl.value
  new Picker({
    parent: el as HTMLElement,
    onChange: (color) => {
      if (el) {
        el.style.backgroundColor = color.rgbaString
      }
    }
  })
})
</script>

<template>
  <div ref="pickerEl"></div>
</template>
