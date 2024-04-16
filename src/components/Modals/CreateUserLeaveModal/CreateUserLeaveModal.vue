<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel, FormSelect } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateUserLeave from './useCreateUserLeave'

interface Props {
  userLeave?: {
    id?: number
    title: string
    content: string
    help_type: number
  }
  idx: number
}

const emit = defineEmits(['close'])
const { userLeave } = defineProps<Props>()

const { title, content, help_type, canSubmit, isEdit, submit } =
  useCreateUserLeave(userLeave)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯幫助' : '幫助' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">幫助標題</FormLabel>
          <FormInput class="flex-1" type="text" v-model="title" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">幫助內容</FormLabel>
          <FormInput class="flex-1" type="text" v-model="content" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">幫助類型</FormLabel>
          <FormSelect class="flex-1" v-model="help_type">
            <option value="1">技術問題</option>
            <option value="2">帳號設定</option>
          </FormSelect>
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            {{ !isEdit ? '申請' : '儲存' }}
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
