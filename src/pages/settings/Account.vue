<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../base-components/Button'
import { FormCheck, FormSwitch, InputGroup } from '../../base-components/Form'
import FormInput from '../../base-components/Form/FormInput.vue'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import Lucide from '../../base-components/Lucide/index'
import ContryCodePicker from '../../components/ContryCodePicker'
import ActiveLogsModal from '../../components/Modals/ActiveLogsModal/'
import HeadUploadModal from '../../components/Modals/HeadUploadModal'
import useActiveLog from './composables/useActiveLog'
import usePassword from './composables/usePassword'
import useUserInfo from './composables/useUserInfo'

const showHeadUploadPopup = ref(false)

const {
  userInfo,
  phoneCode,
  accountSettingChange,
  nofityChange,
  getUserInfo,
  updateAccountSetting,
  updateNotification,
  confirmDeleteAccout,
  headChangehandler
} = useUserInfo()

const { oldPsd, newPsd, newPsdAgain, resetPsdError, updatePassword } =
  usePassword()

const { activeLogs, allLogs, showActiveLogPopup, getUserActiveLog, viewMore } =
  useActiveLog()

getUserInfo()
getUserActiveLog()
</script>
<template>
  <div class="block lg:flex">
    <div class="flex-1">
      <div class="rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('accountSetting') }}</div>
          <Button
            variant="primary"
            :disabled="!accountSettingChange"
            @click="updateAccountSetting"
            >{{ $t('save') }}</Button
          >
        </div>
        <div class="grid cursor-pointer grid-cols-4 gap-y-3 p-4">
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('head') }}</FormLabel
          >
          <div class="col-span-3">
            <div class="relative h-32 w-32" @click="showHeadUploadPopup = true">
              <img
                :src="userInfo.avatar"
                width="128"
                height="128"
                alt=""
                class="rounded-full"
              />
              <div
                class="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary p-2"
              >
                <Lucide icon="Camera" color="white" />
              </div>
            </div>
          </div>
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('displayName') }}</FormLabel
          >
          <FormInput
            v-model="userInfo.name"
            class="col-span-3"
            type="text"
            @input="accountSettingChange = true"
          />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('email') }}</FormLabel
          >
          <FormInput v-model="userInfo.email" class="col-span-3" disabled />
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('changePassword') }}</div>
          <Button
            variant="primary"
            :disabled="[newPsd, newPsdAgain, oldPsd].some((i) => !i)"
            @click="updatePassword"
            >{{ $t('confirmEdit') }}</Button
          >
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4">
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('oldPassword') }}</FormLabel
          >
          <FormInput
            v-model="oldPsd"
            :placeholder="$t('inputOldPSD')"
            class="col-span-3"
            type="password"
          />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('newPassword') }}</FormLabel
          >
          <FormInput
            v-model="newPsd"
            :placeholder="$t('inputNewPSD')"
            class="col-span-3"
            type="password"
            :class="resetPsdError ? 'border border-danger' : ''"
          />
          <FormLabel class="col-span-1 mb-0 mr-2 mt-2 text-end">{{
            $t('edit-confirm-new-password-label')
          }}</FormLabel>
          <FormInput
            v-model="newPsdAgain"
            :placeholder="$t('inputNewPSDAgain')"
            type="password"
            class="col-span-3"
            :class="resetPsdError ? 'border border-danger' : ''"
          />
          <template v-if="resetPsdError">
            <FormLabel
              class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            />
            <div class="col-span-3 text-xs text-danger">
              {{ resetPsdError }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="mt-3 flex-1 lg:ml-3 lg:mt-0">
      <div class="rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('notifySetting') }}</div>
          <Button
            variant="primary"
            :disabled="!nofityChange"
            @click="updateNotification"
            >{{ $t('save') }}</Button
          >
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4">
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="userInfo.notify_type"
              :value="20"
              @change="nofityChange = true"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('email') }}
            </FormCheck.Label>
          </FormCheck>
          <FormInput
            v-model="userInfo.notify_email"
            class="col-span-3"
            @input="nofityChange = true"
            type="text"
          />
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="userInfo.notify_type"
              :value="10"
              @change="nofityChange = true"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('phone') }}
            </FormCheck.Label>
          </FormCheck>
          <InputGroup class="col-span-3">
            <ContryCodePicker v-model="phoneCode" />
            <FormInput
              v-model="userInfo.notify_phone"
              @input="nofityChange = true"
              type="text"
            />
          </InputGroup>
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-start"
            >{{ $t('switch') }}</FormLabel
          >
          <div class="mt-2">
            <FormSwitch>
              <FormSwitch.Input
                v-model="userInfo.is_open_notify"
                id="checkbox-switch-7"
                type="checkbox"
                @change="nofityChange = true"
              />
            </FormSwitch>
          </div>
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('activeLog') }}</div>
          <Button variant="outline-primary" @click="viewMore">{{
            $t('viewAll')
          }}</Button>
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4 text-center text-xs">
          <span class="font-medium">{{ $t('browser') }}</span>
          <span class="font-medium">{{ $t('device') }}</span>
          <span class="font-medium">{{ $t('IP') }}</span>
          <span class="font-medium">{{ $t('time') }}</span>
          <template v-for="log in activeLogs" :key="log">
            <span>{{ log.browser }}</span>
            <span>{{ log.os }}</span>
            <span>{{ log.ip }}</span>
            <span>{{ log.createdAt }}</span>
          </template>
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white dark:bg-darkmode-600">
        <div class="flex items-center justify-between px-4 pt-4">
          <div>{{ $t('deleteAccount') }}</div>
        </div>
        <div class="flex items-center justify-between px-4 pb-4">
          <span class="desc-font text-xs">{{ $t('deleteAlert') }}</span>
          <Button variant="danger" @click="confirmDeleteAccout">{{
            $t('delete')
          }}</Button>
        </div>
      </div>
    </div>
    <HeadUploadModal
      v-if="showHeadUploadPopup"
      v-model="showHeadUploadPopup"
      :image-id="userInfo.image_id"
      @save="headChangehandler"
    />
    <ActiveLogsModal :active-logs="allLogs" v-model="showActiveLogPopup" />
  </div>
</template>
