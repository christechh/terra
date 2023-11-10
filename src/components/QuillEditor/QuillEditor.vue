<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
//@ts-ignore
import ImageUploader from 'quill-image-uploader'
import axios from '../../axios'

interface Props {
  editorType: string
  modelValue: string
}
const { editorType, modelValue } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
type ModuleOptions = {
  name: string
  module: any
  options: object
}

const modules: ModuleOptions = {
  name: 'imageUploader',
  module: ImageUploader,
  options: {
    //@ts-ignore
    upload: (file) => {
      return new Promise(async (resolve, reject) => {
        const formData = new FormData()
        formData.append('file', file)
        const response = await axios.post('/editor/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        resolve(response.data.data.url)
      })
    }
  }
}
</script>

<template>
  <div>
    <QuillEditor
      toolbar="full"
      :class="editorType"
      theme="snow"
      :modules="modules"
      contentType="html"
      :content="modelValue"
      @update:content="emit('update:modelValue', $event)"
      placeholder="請輸入"
    />
  </div>
</template>
<style>
.ql-editor {
  min-height: 250px;
}

.ql-editor .image-uploading img {
  display: none;
}

.ql-editor img {
  display: inline-block;
}
.ql-video {
  display: none !important;
}
</style>
