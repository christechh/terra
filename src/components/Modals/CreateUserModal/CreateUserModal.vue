<script lang="ts" setup>
import { computed } from 'vue'
import Button from '../../../base-components/Button'
import { FormInput, FormLabel } from '../../../base-components/Form'
import { Dialog, Slideover } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
// import ContryCodePicker from '../../ContryCodePicker'
import useCreateUser from './useCreateUser'
import useUser from '../../../pages/settings/composables/useUser'

interface Props {
  subAccount?: {
    id?: number
    name: string
    account: string
    password?: string
    notifyType: string
    notifyOpen: boolean
    notifyEmail: string
    notifyPhone: string
  }
  idx: number
}

const { confirmLinkSalary } = useUser()
const emit = defineEmits(['close'])
const { subAccount } = defineProps<Props>()

const { account, name, password, canSubmit, isEdit, submit } =
  useCreateUser(subAccount)

const component = computed(() => {
  return isEdit.value ? Slideover : Dialog
})

const childComponet = computed(() => {
  return isEdit.value ? Slideover.Panel : Dialog.Panel
})
</script>

<template>
  <component :is="component" :open="true" size="md">
    <component :is="childComponet" class="p-4 md:w-[400px]">
      <div
        class="relative mb-5"
        :class="isEdit ? 'text-primary' : 'text-center text-xl'"
      >
        {{
          isEdit
            ? $t('user-edit-model-title') + (idx + 1)
            : $t('user-create-model-title')
        }}
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
        <FormLabel class="w-[120px]">{{
          $t('sub-account-account-label')
        }}</FormLabel>
        <FormInput
          class="flex-1"
          type="text"
          :placeholder="$t('error-message35')"
          v-model="account"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">{{
          isEdit
            ? $t('edit-sub-account-pwd-label')
            : $t('sub-account-pwd-label')
        }}</FormLabel>
        <FormInput
          class="flex-1"
          type="password"
          :placeholder="$t('error-message36')"
          v-model="password"
        />
      </div>

      <div class="flex justify-center">
        <Button
          v-if="isEdit"
          variant="outline-primary"
          @click="() => emit('close')"
          >{{ $t('cancel-btn') }}</Button
        >
        <Button
          style="display: none"
          :class="{ 'flex-1': !isEdit, 'ml-3': isEdit }"
          :disabled="!canSubmit"
          variant="primary"
          @click="() => submit(isEdit, () => emit('close'))"
          >{{ $t('save-btn') }}</Button
        >
        <Button
          :class="{ 'flex-1': !isEdit, 'ml-3': isEdit }"
          variant="primary"
          @click="confirmLinkSalary()"
          >{{ $t('save-btn') }}</Button
        >
      </div>
    </component>
  </component>
</template>
