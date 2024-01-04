<script setup lang="ts">
import { watch } from 'vue'
import { Dialog } from '../../../base-components/Headless'

type Props = {
  open: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:open'])

const close = () => {
  emit('update:open', false)
}

watch(
  () => props.open,
  () => {
    if (props.open) {
      setTimeout(() => {
        window.addEventListener('click', close)
      }, 0)
    } else {
      window.removeEventListener('click', close)
    }
  }
)
</script>

<template>
  <Dialog :open="props.open" size="lg">
    <Dialog.Panel class="flex justify-center p-4">
      <iframe
        class="h-[230px] w-full md:h-[423px] md:w-[720px]"
        src="https://www.youtube.com/embed/LUBJ-KgF60M?si=fORJs6IX4LTUUTdi"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Dialog.Panel>
  </Dialog>
</template>
