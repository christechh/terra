<script setup lang="ts">
import { ref, PropType, watch } from 'vue'
import axios from '../../../../../axios'
import { IForm } from '../index.vue'

const props = defineProps({
  form: {
    type: Object as PropType<IForm>,
    required: true
  },
  updateForm: {
    type: Function,
    required: true
  }
})

const currentImageUrl = ref(props.form.buttonImageUrl)

const handleUpload = async (e: Event) => {
  const files = (e.target as HTMLInputElement)?.files || []
  if (files?.length === 0) return

  var form = new FormData()
  form.append('file', files[0], 'file')
  try {
    const response = await axios.post(
      '/dashboard/enterpoint/widget/logo',
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    console.log('response', response)
    const { url } = response?.data?.data?.data || {}
    if (url) {
      updateImage(url)
    }
  } catch (error) {
    console.log('error', error)
  }
}
const updateImage = (url: string) => {
  currentImageUrl.value = url
  props.updateForm('buttonImageUrl', url)
}
const cleanImage = () => {
  updateImage('')
}

watch(
  () => props.form.buttonImageUrl,
  (value) => {
    currentImageUrl.value = value
  }
)
</script>

<template>
  <div>
    <div class="mb-2 mt-1 font-semibold">{{ $t('widget-button-image') }}</div>
    <div class="flex flex-col gap-3 sm:flex-row">
      <div
        class="item-center relative flex w-full flex-1 justify-center rounded-md"
        :style="currentImageUrl ? '' : 'background-color: #ececec'"
      >
        <div class="relative">
          <img
            v-if="!currentImageUrl"
            id="widget_logo_url"
            class="h-full"
            width="126"
            height="126"
            src="@/assets/images/chat_logo.png"
            style="display: block"
          />
          <img
            v-if="currentImageUrl"
            :src="currentImageUrl"
            class="h-full"
            width="126"
            height="126"
          />
          <img
            v-if="!!currentImageUrl"
            id="remove_widget_logo_url"
            class="absolute mt-2 cursor-pointer"
            src="@/assets/images/modal-close.png"
            style="top: 0px; right: 5px; z-index: 2"
            width="20"
            height="20"
            @click="cleanImage"
          />
        </div>
      </div>
      <div class="flex-1">
        <div class="item-center flex w-full justify-center">
          <div
            class="relative w-full cursor-pointer"
            id="file-upload-button"
            v-if="!currentImageUrl"
          >
            <input
              type="file"
              name="widget_logo"
              id="widget_logo"
              class="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
              accept="image/png, image/jpeg"
              title=""
              @change="handleUpload"
            />
            <label
              for="widget_logo"
              class="flex flex-col items-center justify-center py-5 text-center"
              style="
                border-radius: 10px;
                border: 2px dashed #d8d8d8;
                background-color: #f8f8f8;
              "
              ><img
                class="mb-1"
                src="@/assets/images/cloud.png"
                width="24"
                height="24"
              />
              <div class="font-medinum">
                {{ $t('widget-upload-image-text') }}
              </div>
              <div style="font-size: 12px; color: #939393">
                {{ $t('widget-upload-image-desc-1') }}<br />{{
                  $t('widget-upload-image-desc-2')
                }}
              </div></label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
