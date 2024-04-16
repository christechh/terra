<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel, FormSelect } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateLeave from './useCreateLeave'

interface Props {
  leave?: {
    id?: number
    term_type: number
    content: string
  }
  idx: number
}

const emit = defineEmits(['close'])
const { leave } = defineProps<Props>()

const { term_type, content, canSubmit, isEdit, submit } = useCreateLeave(leave)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯條款' : '新增條款' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">條款類型 *</FormLabel>
          <FormSelect class="mr-3 flex-1" v-model="term_type">
            <option value="1">平台規範</option>
            <option value="2">隱私政策</option>
            <option value="3">服務條款</option>
          </FormSelect>
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">內容</FormLabel>
          <FormInput class="flex-1" type="text" v-model="content" />
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            {{ !isEdit ? '新增' : '儲存' }}
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
