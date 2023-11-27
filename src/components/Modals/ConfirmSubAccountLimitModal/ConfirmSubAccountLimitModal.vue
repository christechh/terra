<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'

const props = defineProps({
  limit: {
    type: Number
  }
})
</script>
<template>
  <Dialog :open="true">
    <Dialog.Panel class="relative px-5 pb-5 pt-10">
      <Lucide
        icon="X"
        class="absolute right-2 top-2 text-[#939393]"
        @click="() => $emit('close')"
      />
      <div class="font-bold">
        <span>{{
          $t('sub-account-plan-limit-msg', {
            planSubaccountLimit: props.limit
          })
        }}</span>
        <a class="text-blue-500">{{ $t('contact_us_text') }}</a>
      </div>
      <div class="mt-3 text-end">
        <Button variant="primary" @click="$emit('close')">{{
          $t('upload-file-size-error-btn')
        }}</Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
