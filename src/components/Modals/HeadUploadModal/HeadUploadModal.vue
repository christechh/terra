<script setup lang="ts">
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide';

interface Props {
  modelValue: Boolean
}

const { modelValue } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <Dialog :open="(modelValue as boolean)">
    <Dialog.Panel class="rounded-xl p-3">
      <Dialog.Title>
        <div class="mx-auto">{{ $t('editHead') }}</div>
        <Lucide icon="X" class="cursor-pointer" @click="() => { emit('update:modelValue', false) }" />
      </Dialog.Title>
      <Dialog.Description>
        <div class="rounded-full border-2 border-dashed text-center pt-5 relative mx-auto"
          style="width: 200px;height: 200px;border-color: #c0c0c0;">
          <Lucide icon="UploadCloud" class="mx-auto" width="48" height="48" color="#c0c0c0" />
          <div class="mt-4">
            <div>{{ $t('dropImgHere') }}</div>
            <div>或</div>
            <div>點及上傳圖片</div>
          </div>
          <input class="absolute top-0 left-0 opacity-0" type="file" style="width: 200px;height: 200px;">
        </div>
      </Dialog.Description>
    </Dialog.Panel>
  </Dialog>
</template>