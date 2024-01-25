<script lang="ts" setup>
import { computed, ComputedRef, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '../../axios'
import ClipIcon from '../../components/Icons/ClipIcon.vue'
import CloseIcon from '../../components/Icons/CloseIcon.vue'
import { useNotificationsStore } from '../../stores/notifications'
import Alert from '../Alert/Alert.vue'
import LoadingIcon from '../LoadingIcon'
import Lucide from '../Lucide/Lucide.vue'

interface uploadFile {
  name: string
  data: string
}

interface Props {
  type: string
  modelValue?: Array<uploadFile | { data: string }> | null
  limit: number
  showClose?: boolean
}

const {
  type = 'img',
  modelValue,
  limit,
  showClose = true
} = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'clear'])

const { t } = useI18n()

const fileRef = ref(null)
const isUploading = ref(false)
const fileSize = ref(0)
const imgRef = ref<HTMLImageElement>()
const verOrHor = ref('')
const typeName = computed(() => {
  const m = {
    img: '圖片',
    video: '影片',
    audio: '音檔'
  }
  return m[type as keyof typeof m]
})

const imgVerOrHor = (event: Event) => {
  const img = event.target as HTMLImageElement
  const h = img?.naturalHeight as number
  const w = img?.naturalWidth as number
  if (h > w) {
    verOrHor.value = 'ver'
  } else {
    verOrHor.value = 'hor'
  }
}

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
    ;(fileRef.value as HTMLInputElement)?.click()
  }
}

const fileChangeHandler = async (e: Event) => {
  isUploading.value = true
  try {
    const file = (e.target as HTMLInputElement)?.files?.[0]
    if (file) {
      const size = file.size / 1024 / 1024
      fileSize.value = size
      if (size > limit) {
        return
      }
      const formData = new FormData()
      formData.append('file', file)
      const res = await axios.post('/dashboard/enterpoint/logo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      const url = res.data.data.data.url
      emit('update:modelValue', [{ name: '', data: url }])
      useNotificationsStore().showSuccess({
        title: t('upload-success'),
        content: ''
      })
    }
  } catch (e) {
    console.log(e)
  } finally {
    isUploading.value = false
  }
}

const removeImgHandler = (index: number) => {
  console.log(index)
  emit('update:modelValue', [])
  emit('clear')
}

const resetFiles = (event: Event) => {
  const target = event.target as HTMLInputElement
  target.value = ''
}
</script>
<template>
  <div>
    <div class="flex items-center">
      <input
        type="file"
        hidden
        ref="fileRef"
        :accept="accept"
        @change="fileChangeHandler($event)"
        @click="resetFiles($event)"
      />
      <div v-for="(file, k) in modelValue" :key="k">
        <div class="relative">
          <img
            ref="imgRef"
            v-if="type === 'img'"
            :src="file.data"
            alt=""
            class="mr-3 rounded object-cover"
            :class="{
              'w-[140px]': verOrHor === 'hor',
              'h-[110px] w-[180px]': verOrHor === 'ver'
            }"
            @load="imgVerOrHor"
          />
          <div v-else class="flex w-36">
            <ClipIcon />
            <!-- <span
              class="ml-2 overflow-hidden text-ellipsis whitespace-nowrap"
              >{{ file.name }}</span -->
            >
          </div>
          <div
            v-if="showClose && modelValue && modelValue[0]?.data"
            class="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#e2e8f0]"
            @click="removeImgHandler(k)"
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      <div
        class="flex flex-1 cursor-pointer items-center justify-center rounded rounded-lg border-2 border-dashed border-slate-200 bg-input_bg"
        style="height: 110px"
        @click="clickHandler"
      >
        <div class="text-center" style="color: #7b7b7b">
          <template v-if="isUploading">
            <LoadingIcon icon="tail-spin" class="mr-2" />
            <span>{{ $t('uploading') }}</span>
          </template>
          <template v-else>
            <Lucide icon="UploadCloud" width="48" class="mx-auto" />
            <span> {{ $t('edit-choose-file') }} </span>
            <div class="ml-2">
              {{ $t('edit-welcome-upload-limit-text', { size: limit }) }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <Alert
      v-if="fileSize > limit"
      variant="soft-danger"
      class="mt-3 flex items-center"
    >
      <Lucide icon="AlertCircle" class="mr-2 h-6 w-6" />
      <b>上傳失敗</b
      ><span class="ml-2">{{ typeName }}大小超過 {{ limit }}MB</span>
    </Alert>
  </div>
</template>
