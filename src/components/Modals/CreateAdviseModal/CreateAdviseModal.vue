<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel, FormSelect } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateAdvise from './useCreateAdvise'

interface Props {
  advise?: {
    id?: number
    title: string
    content: string
    response: string
    advise_status: number
  }
  idx: number
}

const emit = defineEmits(['close'])
const { advise } = defineProps<Props>()

const { title, content, response, advise_status, canSubmit, isEdit, submit } =
  useCreateAdvise(advise)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯意見' : '新增意見' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">意見標題</FormLabel>
          <FormInput class="flex-1" type="text" v-model="title" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">意見內容</FormLabel>
          <FormInput class="flex-1" type="text" v-model="content" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">管理員回覆</FormLabel>
          <FormInput class="flex-1" type="text" v-model="response" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">處理狀態</FormLabel>
          <FormSelect class="flex-1" v-model="advise_status">
            <option value="1">未處理</option>
            <option value="2">已處理</option>
          </FormSelect>
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            {{ !isEdit ? '儲存' : '儲存' }}
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
