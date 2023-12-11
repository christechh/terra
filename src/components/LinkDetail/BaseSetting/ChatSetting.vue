<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea
} from '../../../base-components/Form'
import Lucide from '../../../base-components/Lucide'
import useChatSetting from '../../../composables/LinkDetail/BaseSetting/useChatSetting'
import usePinBoard from '../../../composables/LinkDetail/BaseSetting/usePinBoard'
import { useLinkPage } from '../../../composables/useLinkPage'
import HeadShots from '../../HeadShots'
import ThemePicker from '../../ThemePicker'
import VerticalSteps from '../../VerticalSteps'

const { t } = useI18n()
const {
  chatHeaderColor,
  chatHeaderTextColor,
  chatBubbleColor,
  chatBubbleBorderColor,
  chatBubbleTextColor,
  title,
  avatar,
  image_id,
  welcome_message,
  welcomeGetCustomerInfoType,
  showOnlineStatus,
  isOnline,
  offlineSendMsg,
  openNotifySetting,
  showSavePopup,
  showGuestSetting,
  showExportLog,
  showIsRead,
  chatroomActionSetting,
  saveChatSetting
} = usePinBoard()
const { token } = useLinkPage()
const {
  types,
  dateText,
  dateTitle,
  emailText,
  emailTitle,
  otherText,
  otherTitle,
  phoneText,
  phoneTitle,
  getTypes
} = useChatSetting(token)

const typeTitle = computed({
  get() {
    const m = {
      date: dateTitle,
      email: emailTitle,
      other: otherTitle,
      phone: phoneTitle
    }
    const tmp = m[welcomeGetCustomerInfoType.value as keyof typeof m]?.value
    return tmp ? tmp : t(`reply-message-${welcomeGetCustomerInfoType.value}`)
  },
  set(val: string) {
    const m = {
      date: dateTitle,
      email: emailTitle,
      other: otherTitle,
      phone: phoneTitle
    }
    m[welcomeGetCustomerInfoType.value as keyof typeof m].value = val
  }
})

const typeText = computed({
  get() {
    const m = {
      date: dateText,
      email: emailText,
      other: otherText,
      phone: phoneText
    }
    const tmp = m[welcomeGetCustomerInfoType.value as keyof typeof m]?.value
    return tmp
      ? tmp
      : t(`reply-message-${welcomeGetCustomerInfoType.value}-text`)
  },
  set(val: string) {
    const m = {
      date: dateText,
      email: emailText,
      other: otherText,
      phone: phoneText
    }
    m[welcomeGetCustomerInfoType.value as keyof typeof m].value = val
  }
})

getTypes()
</script>
<template>
  <div class="mt-2 bg-white dark:bg-darkmode-600">
    <div
      class="flex items-center justify-between border-b border-[#EDF2F7] p-5"
    >
      {{ $t('qrcode-setting-tab-chat-setting') }}
      <button
        class="rounded-lg bg-primary px-5 py-2 text-white"
        @click="saveChatSetting"
      >
        {{ $t('save-btn') }}
      </button>
    </div>
    <div class="flex p-5">
      <div class="flex-1 border-e pe-10">
        <VerticalSteps>
          <VerticalSteps.Step :step="1" class="pb-9">
            <div class="font-bold">{{ $t('choose-theme-color') }}</div>
            <ThemePicker v-model="chatHeaderColor">
              <div>
                <div class="flex items-center justify-between">
                  {{ $t('edit-chat-room-bak-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatHeaderColor"
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-title-text-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatHeaderTextColor"
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-msg-bak-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatBubbleColor"
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-msg-border-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatBubbleBorderColor"
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-msg-text-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatBubbleTextColor"
                  />
                </div>
              </div>
            </ThemePicker>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2" class="pb-9">
            <div class="font-bold">{{ $t('basic-info') }}</div>
            <div class="mt-5">
              {{ $t('edit-chatroom-name') }}
            </div>
            <FormInput class="mt-2" v-model="title" type="text" />
            <div class="mt-5">
              {{ $t('chat-room-nickname') }}
            </div>
            <FormInput class="mt-2" type="text" />
            <div class="mt-5">{{ $t('chat-room-avatar') }}</div>
            <HeadShots
              class="mt-2"
              v-model:avatar="avatar"
              v-model:image_id="image_id"
            />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" class="pb-9">
            <div class="font-bold">{{ $t('welcome-message-setting') }}</div>
            <div class="mt-5">{{ $t('edit-chat-room-default-message') }}</div>
            <FormTextarea class="mt-2" v-model="welcome_message" />
            <div>{{ $t('input-of-customer-info') }}</div>
            <FormSelect v-model="welcomeGetCustomerInfoType" class="mt-2">
              <option v-for="t in types" :key="t.value" :value="t.value">
                {{ t.text }}
              </option>
            </FormSelect>
            <div
              class="mt-4 rounded-lg border p-5"
              v-if="welcomeGetCustomerInfoType !== 'none'"
            >
              <div>{{ $t('reply-message-title') }}</div>
              <FormInput type="text" v-model="typeTitle" class="mt-2" />
              <div class="mt-3">{{ $t('reply-message-desc') }}</div>
              <FormInput type="text" v-model="typeText" class="mt-2" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="4" class="pb-9">
            <div class="font-bold">
              {{ $t('online-status-setting-is-online') }}
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('online-status-show') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="showOnlineStatus" />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('setting-to-online') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="isOnline" />
              </FormSwitch>
            </div>

            <div class="mt-5">{{ $t('online-status-offline-message') }}</div>
            <FormTextarea class="mt-2" v-model="offlineSendMsg" />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="5" class="pb-9">
            <div class="font-bold">{{ $t('advanced-setting') }}</div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('message-notification-setting-pop') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="openNotifySetting" />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('save-popup') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="showSavePopup" />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('show-guest-setting') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="showGuestSetting" />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('show-export-log') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="showExportLog" />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div>{{ $t('show-export-log') }}</div>
              <FormSwitch>
                <FormSwitch.Input type="checkbox" v-model="showIsRead" />
              </FormSwitch>
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="6" class="pb-9" is-final>
            <div class="font-bold">{{ $t('customize-function-chatroom') }}</div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                <Lucide icon="Paperclip" width="16" class="mr-2" />
                <span>{{ $t('send-file-feature-status') }}</span>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="chatroomActionSetting.file"
                />
              </FormSwitch>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center">
                <Lucide icon="MapPin" width="16" class="mr-2" />
                <span>{{ $t('send-location-feature-status') }}</span>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="chatroomActionSetting.location"
                />
              </FormSwitch>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center">
                <Lucide icon="Mic" width="16" class="mr-2" />
                <span>{{ $t('send-voice-feature-status') }}</span>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="chatroomActionSetting.voice"
                />
              </FormSwitch>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center">
                <Lucide icon="BarChartBig" width="16" class="mr-2" />
                <span>{{ $t('create-poll-feature-status') }}</span>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="chatroomActionSetting.vote"
                />
              </FormSwitch>
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1 px-10 py-5"></div>
    </div>
  </div>
</template>
