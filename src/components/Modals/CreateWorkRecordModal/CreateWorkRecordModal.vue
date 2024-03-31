<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { onMounted } from 'vue'
import Button from '../../../base-components/Button'
import { FormInput, FormLabel } from '../../../base-components/Form'
import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateWorkRecord from './useCreateWorkRecord'

interface Props {
  companyId: number
}

const emit = defineEmits(['close'])
const props = defineProps<Props>()

const {
  createWorkRecord,
  payloadRefs,
  canSubmit,
  loading: createWorkRecordLoading
} = useCreateWorkRecord()

const onFormSubmitClick = async () => {
  await createWorkRecord(() => emit('close'))
}

onMounted(() => {
  payloadRefs.companyId.value = String(props.companyId)
})
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        加班/兼職申請
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">員工</FormLabel>
          <FormInput class="flex-1" type="text" v-model="payloadRefs.userId.value" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">加班歸屬日/兼職出勤日</FormLabel>
          <FormInput v-model="payloadRefs.type.value" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">起始時間</FormLabel>
          <FormDatepicker v-model="payloadRefs.startTime.value" auto-apply />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">結束時間</FormLabel>
          <FormDatepicker v-model="payloadRefs.endTime.value" auto-apply />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">休息時間</FormLabel>
          <FormInput v-model="payloadRefs.restHours.value" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">原因備註</FormLabel>
          <FormDatepicker v-model="payloadRefs.description.value" auto-apply />
        </div>
        <div class="flex justify-center">
          <Button
            class="flex-1 mr-2"
            variant="primary"
            @click="onFormSubmitClick"
            :loading="createWorkRecordLoading"
            :disabled="createWorkRecordLoading || !canSubmit"
          >
            申請
          </Button>
          <Button class="flex-1" variant="primary" @click="() => emit('close')">
            取消
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>