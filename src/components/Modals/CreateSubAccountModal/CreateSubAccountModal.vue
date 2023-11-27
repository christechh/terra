<script lang="ts" setup>
import { computed } from 'vue'
import Button from '../../../base-components/Button'
import {
  FormCheck,
  FormInput,
  FormLabel,
  InputGroup
} from '../../../base-components/Form'
import { Dialog, Slideover } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import ContryCodePicker from '../../ContryCodePicker'
import useCreateSubAccount from './useCreateSubAccount'

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

const emit = defineEmits(['close'])
const { subAccount } = defineProps<Props>()

const {
  account,
  name,
  password,
  notifyType,
  notifyEmail,
  phoneCode,
  notifyPhone,
  canSubmit,
  isEdit,
  submit
} = useCreateSubAccount(subAccount)

const component = computed(() => {
  return isEdit.value ? Slideover : Dialog
})

const childComponet = computed(() => {
  return isEdit.value ? Slideover.Panel : Dialog.Panel
})

const reset = () => {
  notifyEmail.value = ''
  notifyPhone.value = ''
  phoneCode.value = '+886'
}
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
            ? $t('feature-section8-title') + (idx + 1)
            : $t('sub-account-add-btn-text')
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
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">{{
          $t('sub-account-notify-setting')
        }}</FormLabel>
        <div>
          <FormCheck>
            <FormCheck.Input
              id="notify-switch-email"
              type="radio"
              v-model="notifyType"
              :value="20"
              @click="reset"
            />
            <FormCheck.Label htmlFor="notify-switch-email">
              {{ $t('sub-account-table-email') }}
            </FormCheck.Label>
          </FormCheck>
          <FormCheck class="mt-3">
            <FormCheck.Input
              id="notify-switch-phone"
              type="radio"
              v-model="notifyType"
              :value="10"
              @click="reset"
            />
            <FormCheck.Label htmlFor="notify-switch-phone">
              {{ $t('sub-account-table-phone') }}
            </FormCheck.Label>
          </FormCheck>
          <FormCheck class="mt-3">
            <FormCheck.Input
              id="notify-switch-none"
              type="radio"
              v-model="notifyType"
              value="none"
              @click="reset"
            />
            <FormCheck.Label htmlFor="notify-switch-none">
              {{ $t('sub-account-no-notify') }}
            </FormCheck.Label>
          </FormCheck>
        </div>
      </div>
      <div class="mb-5 flex items-center">
        <FormLabel class="w-[120px]" v-if="notifyType !== 'none'">{{
          notifyType === 20
            ? $t('sub-account-table-email')
            : $t('sub-account-table-phone')
        }}</FormLabel>
        <FormInput
          v-if="notifyType === 20"
          class="flex-1"
          type="text"
          :placeholder="$t('error-message36')"
          v-model="notifyEmail"
        />
        <InputGroup
          v-if="notifyType === 10"
          class="flex-1 overflow-hidden rounded shadow-sm"
        >
          <ContryCodePicker v-model="phoneCode" />
          <FormInput v-model="notifyPhone" type="text" class="shadow-none" />
        </InputGroup>
      </div>
      <div class="flex justify-center">
        <Button
          v-if="isEdit"
          variant="outline-primary"
          @click="() => emit('close')"
          >{{ $t('cancel-btn') }}</Button
        >
        <Button
          :class="{ 'flex-1': !isEdit, 'ml-3': isEdit }"
          :disabled="!canSubmit"
          variant="primary"
          @click="() => submit(isEdit, () => emit('close'))"
          >{{ $t('save-btn') }}</Button
        >
      </div>
    </component>
  </component>
</template>
