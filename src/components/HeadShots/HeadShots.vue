<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import Lucide from '../../base-components/Lucide'
import AvatarUploadModal from '../../components/Modals/AvatarUploadModal'

interface Props {
  avatar: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image_id: any
  readOnly?: boolean
  size?: number
}

const attrs = useAttrs()
const { avatar, image_id, readOnly, size } = defineProps<Props>()

const showHeadUploadPopup = ref(false)

const emit = defineEmits(['update:avatar', 'update:image_id', 'change'])
const headChangehandler = (img: { img: string; id: number }) => {
  emit('update:image_id', null)
  if (img.id) {
    emit('update:image_id', img.id)
  }
  if (img.img) {
    emit('update:avatar', img.img)
  }
  emit('change')
}

const clickHandler = () => {
  if (!readOnly) {
    showHeadUploadPopup.value = true
  }
}

const sizeComputed = computed(() => (size ? size + 'px' : '128px'))
</script>

<template>
  <div class="head-shots relative" :class="attrs.class" @click="clickHandler">
    <img :src="avatar" width="128" height="128" alt="" class="rounded-full" />
    <div
      v-if="!readOnly"
      class="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary p-2"
    >
      <Lucide icon="Camera" color="white" />
    </div>
  </div>
  <AvatarUploadModal
    v-if="showHeadUploadPopup"
    v-model="showHeadUploadPopup"
    :image-id="image_id"
    @save="headChangehandler"
  />
</template>
<style>
.head-shots {
  width: v-bind(sizeComputed);
  height: v-bind(sizeComputed);
}
</style>
