<script setup lang="ts">
import { ref, computed } from 'vue'
import emptyListImage from '../../assets/images/svg/components_empty-img-simple.svg'

interface Props {
  show: boolean
  content: string
}
const { show, content } = defineProps<Props>()
</script>

<template>
  <div
    class="flex justify-center items-center flex-col"
    style="min-height: 400px"
    v-if="show"
  >
    <div><img :src="emptyListImage" /></div>
    <div>{{ content }}</div>
  </div>
</template>
