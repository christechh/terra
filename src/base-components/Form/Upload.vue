<script lang="ts" setup>
import { computed, ComputedRef, ref, Ref } from "vue"
import UploadIcon from '../../components/Icons/UploadIcon.vue'
import CloseIcon from '../../components/Icons/CloseIcon.vue'
import ClipIcon from '../../components/Icons/ClipIcon.vue'

import LoadingIcon from "../LoadingIcon";
import { useNotificationsStore } from "../../stores/notifications";
import Alert from "../Alert/Alert.vue";
import Lucide from "../Lucide/Lucide.vue";

interface uploadFile {
  name: string,
  data: string
}

interface Props {
  type: string,
  modelValue: Array<uploadFile>,
  limit: number
}

const { type = 'img', modelValue, limit } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const fileRef = ref(null)
const isUploading = ref(false)
const fileSize = ref(0)
const typeName = computed(() => {
  const m = {
    img: '圖片',
    video: '影片',
    audio: '音檔'
  }
  return m[type as keyof typeof m]
})

const accept: ComputedRef<string> = computed(() => {
  const m = {
    img: 'image/jpeg, image/png',
    video: 'video/mp4',
    audio: 'audio/mp3'
  }
  return m[type as keyof typeof m]
})

const clickHandler = () => {
  if (fileRef.value !== null) {
    (fileRef.value as HTMLInputElement)?.click()
  }
}

const fileChangeHandler = async (e: Event) => {
  isUploading.value = true
  try {
    const file = (e.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const size = file.size / 1024 / 1024;
      fileSize .value = size
      if (size > limit) {
        return 
      }
      // const url = await store.uploadSectionVideo(file);
      // const name = url.split('/').pop().replace('.mp4', '')
      // emit('update:modelValue', [{ name: name, data: url }]);
      useNotificationsStore().showSuccess({title: '上傳成功', content: ''})
    }
  } catch(e) {
    console.log(e)
  } finally {
    isUploading.value = false
  }
}

const removeImgHandler = (index: number) => {
  emit('update:modelValue', []);
}

const resetFiles = (event: Event) => {
  const target = (event.target as HTMLInputElement)
  target.value = ''
}

</script>
<template>
  <div>
    <div class="flex items-center">
      <input type="file" hidden ref="fileRef" :accept="accept" @change="fileChangeHandler($event)" @click="resetFiles($event)" />
      <div v-for="(file, k) in modelValue" :key="k" class="relative mr-10">
        <img v-if="type === 'img'" :src="file.data" alt="" style="height: 109px;">
        <div v-else class="w-36 flex">
          <ClipIcon />
          <span class="ml-2 overflow-hidden text-ellipsis whitespace-nowrap">{{ file.name }}</span>
        </div>
        <div
          class="rounded-full w-4 h-4 bg-danger flex justify-center items-center absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 cursor-pointer"
          @click="removeImgHandler(k)">
          <CloseIcon />
        </div>
      </div>
      <div class="flex-1 border border-dashed rounded flex justify-center items-center border-slate-200 cursor-pointer"
        style="height: 110px;" @click="clickHandler">
        <div class="flex items-center" style="color: #7B7B7B;">
          <template v-if="isUploading">
            <LoadingIcon icon="tail-spin" class="mr-2" />
            <span>{{typeName}}上傳中</span>
          </template>
          <template v-else>
            <UploadIcon class="mr-2" />
            <span>
              上傳{{typeName}}
            </span>
          </template>
        </div>
      </div>
    </div>
    <Alert v-if="fileSize > limit" variant="soft-danger" class="flex items-center mt-3">
        <Lucide icon="AlertCircle" class="w-6 h-6 mr-2" />
        <b>上傳失敗</b><span class="ml-2">{{typeName}}大小超過 {{ limit }}MB</span>
    </Alert>
  </div>
</template>