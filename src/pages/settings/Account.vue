<script setup lang="ts">
import Button from '../../base-components/Button'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import FormInput from '../../base-components/Form/FormInput.vue'
import { FormSwitch, FormCheck, InputGroup } from '../../base-components/Form'
import Lucide from '../../base-components/Lucide/index'
import HeadUploadModal from '../../components/Modals/HeadUploadModal'
import { reactive, ref } from 'vue'
import { AuthType, getRequest } from '../../api/api'

const showHeadUploadPopup = ref(false)
const userInfo = reactive({})
const activeLogs = ref([])
const accountSettingChange = ref(false)
const psdChange = ref(false)
const nofityChange = ref(false)

const getUserInfo = () => {
  getRequest('auth/setting', {}, AuthType.JWT).then((res) => {
    const { data } = res.data
    Object.assign(userInfo, data)
  })
}

const getUserActiveLog = () => {
  getRequest('user/login', { page: 0, pageSize: 5 }, AuthType.JWT).then(
    (res) => {
      const { data } = res.data
      activeLogs.value = data
    }
  )
}

getUserInfo()
getUserActiveLog()
</script>
<template>
  <div class="flex">
    <div class="flex-1">
      <div class="rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('accountSetting') }}</div>
          <Button variant="primary" :disabled="!accountSettingChange">{{
            $t('save')
          }}</Button>
        </div>
        <div
          class="grid cursor-pointer grid-cols-4 gap-y-3 p-4"
          @click="showHeadUploadPopup = true"
        >
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('head') }}</FormLabel
          >
          <div class="col-span-3">
            <div class="relative h-32 w-32">
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
          <FormInput v-model="userInfo.name" class="col-span-3" />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('email') }}</FormLabel
          >
          <FormInput v-model="userInfo.email" class="col-span-3" />
        </div>
      </div>
      <div class="mt-3 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('changePassword') }}</div>
          <Button variant="primary" :disabled="!psdChange">{{
            $t('confirmEdit')
          }}</Button>
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4">
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('oldPassword') }}</FormLabel
          >
          <FormInput :placeholder="$t('inputOldPSD')" class="col-span-3" />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('newPassword') }}</FormLabel
          >
          <FormInput :placeholder="$t('inputNewPSD')" class="col-span-3" />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('email') }}</FormLabel
          >
          <FormInput :placeholder="$t('inputNewPSDAgain')" class="col-span-3" />
        </div>
      </div>
    </div>
    <div class="ml-3 flex-1">
      <div class="rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('notifySetting') }}</div>
          <Button variant="primary" :disabled="!nofityChange">{{
            $t('save')
          }}</Button>
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4">
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              value="horizontal-radio-daniel-craig"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('email') }}
            </FormCheck.Label>
          </FormCheck>
          <FormInput v-model="userInfo.notify_email" class="col-span-3" />
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              value="horizontal-radio-daniel-craig"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('phone') }}
            </FormCheck.Label>
          </FormCheck>
          <InputGroup class="col-span-3">
            <FormInput v-model="userInfo.notify_phone" />
          </InputGroup>
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('switch') }}</FormLabel
          >
          <div class="mt-2">
            <FormSwitch>
              <FormSwitch.Input
                v-model="userInfo.is_open_notify"
                id="checkbox-switch-7"
                type="checkbox"
              />
            </FormSwitch>
          </div>
        </div>
      </div>
      <div class="mt-3 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('activeLog') }}</div>
          <Button variant="outline-primary">{{ $t('viewAll') }}</Button>
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4 text-xs">
          <span>{{ $t('browser') }}</span>
          <span>{{ $t('device') }}</span>
          <span>{{ $t('IP') }}</span>
          <span>{{ $t('time') }}</span>
          <template v-for="log in activeLogs" :key="log">
            <span>{{ log.browser }}</span>
            <span>{{ log.os }}</span>
            <span>{{ log.ip }}</span>
            <span>{{ log.createdAt }}</span>
          </template>
        </div>
      </div>
      <div class="mt-3 rounded-xl bg-white dark:bg-darkmode-600">
        <div class="flex items-center justify-between p-4">
          <div>{{ $t('deleteAccount') }}</div>
        </div>
        <div class="flex items-center justify-between p-4">
          <span class="text-xs">{{ $t('deleteAlert') }}</span>
          <Button variant="danger">{{ $t('delete') }}</Button>
        </div>
      </div>
    </div>
    <HeadUploadModal v-model="showHeadUploadPopup" />
  </div>
</template>
