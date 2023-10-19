<script setup lang="ts">
import { ref } from "vue";
//@ts-ignore
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import BlotFormatter from 'quill-blot-formatter';
//@ts-ignore
import ImageUploader from 'quill-image-uploader';
import axios, { AxiosError } from 'axios';
import { fileUploadRequest, AuthType } from "../../api/api";


interface Props {
    editorType: string;
    modelValue: string;
}
const { editorType, modelValue } = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);
type ModuleOptions = {
    name: string;
    module: any;
    options: object;
};


const modules: ModuleOptions = {
    name: 'imageUploader',
    module: ImageUploader,
    options: {
        //@ts-ignore
        upload: file => {
            return new Promise((resolve, reject) => {
                fileUploadRequest('/editor/image', file, AuthType.JWT, resolve);
            });

        }
    }
};


</script>

<template>
    <div>
        <QuillEditor toolbar="full" :class="editorType" theme="snow" :modules="modules" contentType="html"
            :content="modelValue" @update:content="emit('update:modelValue', $event)" placeholder="請輸入" />
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