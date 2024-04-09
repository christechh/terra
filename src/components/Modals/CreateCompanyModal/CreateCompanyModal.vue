<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel } from '../../../base-components/Form'
// import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateCompany from './useCreateCompany'

interface Props {
  company?: {
    id?: number
    name: string
    taxId: string
    startDate: string
    endDate: string
    remindDate: string
  }
  idx: number
}

const emit = defineEmits(['close'])
const { company } = defineProps<Props>()

const { name, taxId, canSubmit, isEdit, submit } = useCreateCompany(company)
</script>

<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[400px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? $t('feature-section8-title') : '新增公司' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">{{ $t('sub-account-name') }}</FormLabel>
        <FormInput
          class="flex-1"
          type="text"
          :placeholder="$t('signup-display-name-placeholder')"
          v-model="name"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">統一編號</FormLabel>
        <FormInput
          class="flex-1"
          type="text"
          :placeholder="$t('error-message35')"
          v-model="taxId"
        />
      </div>
      <!-- <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">勞報單模組</FormLabel>
        <FormDatepicker
          class="flex-1"
          type="text"
          :placeholder="$t('error-message35')"
          v-model="labor"
        />
      </div> -->

      <div class="flex justify-center">
        <Button
          class="flex-1"
          :disabled="!canSubmit"
          variant="primary"
          @click="() => submit(isEdit, () => emit('close'))"
          >{{ $t('save-btn') }}</Button
        >
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
