<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '../../../axios'
import Button from '../../../base-components/Button'
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
import ContryCodePicker from '../../ContryCodePicker'
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
  name,
  isChange,
  saveChatSetting,
  changeShowGuestSetting,
  chatHeaderColorChangeHandler
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
  chatSettingChange,
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
    return tmp
      ? tmp
      : t(
          `reply-message-${
            welcomeGetCustomerInfoType.value === 'other'
              ? 'text'
              : welcomeGetCustomerInfoType.value
          }`
        )
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
      : t(
          `reply-message-${
            welcomeGetCustomerInfoType.value === 'other'
              ? 'text'
              : welcomeGetCustomerInfoType.value
          }-text`
        )
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

const submitTypes = () => {
  axios.post('customer/type', {
    token: token.value,
    title: typeTitle.value,
    text: typeText.value,
    type: welcomeGetCustomerInfoType.value
  })
  chatSettingChange.value = false
}

const submit = () => {
  saveChatSetting()
  submitTypes()
}

const displayCustInputPlaceholder = computed(() => {
  const m = {
    email: t('onboarding-step2-email-tip'),
    phone: t('enter-phone-number'),
    date: t('choose-date'),
    other: ''
  }
  return m[welcomeGetCustomerInfoType.value as keyof typeof m]
})

getTypes()
</script>
<template>
  <div class="mt-2 rounded-lg bg-white dark:bg-darkmode-600">
    <div
      class="flex items-center justify-between border-b border-[#EDF2F7] p-5 text-base font-bold"
    >
      {{ $t('qrcode-setting-tab-chat-setting') }}
      <Button
        variant="primary"
        @click="submit"
        :disabled="!isChange && !chatSettingChange"
      >
        {{ $t('save-btn') }}
      </Button>
    </div>
    <div class="p-5 lg:flex">
      <div class="flex-1 pe-10 lg:border-e">
        <VerticalSteps>
          <VerticalSteps.Step :step="1" class="pb-9">
            <div class="flex items-center font-bold">
              {{ $t('choose-theme-color') }}
            </div>
            <ThemePicker
              :model-value="chatHeaderColor"
              @update:model-value="chatHeaderColorChangeHandler"
            >
              <div>
                <div class="flex items-center justify-between">
                  {{ $t('edit-chat-room-bak-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatHeaderColor"
                    @change="isChange = true"
                    disabled
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-title-text-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatHeaderTextColor"
                    @change="isChange = true"
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-msg-bak-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatBubbleColor"
                    disabled
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-msg-border-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatBubbleBorderColor"
                    disabled
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-chat-room-msg-text-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="chatBubbleTextColor"
                    disabled
                  />
                </div>
              </div>
            </ThemePicker>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2" class="pb-9">
            <div class="font-bold">{{ $t('basic-info') }}</div>
            <div class="mt-5 flex items-center">
              {{ $t('edit-chatroom-name') }}
              <div
                class="ml-2 font-normal"
                v-tooltip:top.tooltip="$t('tip-chatroom-name')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormInput
              class="mt-2"
              v-model="title"
              @change="isChange = true"
              type="text"
            />
            <div class="mt-5 flex items-center">
              {{ $t('chat-room-nickname') }}
              <div
                class="ml-2"
                v-tooltip:top.tooltip="$t('tip-chatroom-nickname')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormInput
              class="mt-2"
              v-model="name"
              @change="isChange = true"
              type="text"
            />
            <div class="mt-5">{{ $t('chat-room-avatar') }}</div>
            <HeadShots
              class="mt-2"
              v-model:avatar="avatar"
              v-model:image_id="image_id"
            />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" class="pb-9">
            <div class="font-bold">{{ $t('welcome-message-setting') }}</div>
            <div class="mt-5 flex items-center">
              {{ $t('edit-chat-room-default-message') }}
              <div
                class="ml-2 font-normal"
                v-tooltip:top.tooltip="$t('tip-chatroom-default-message')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormTextarea
              class="mt-2"
              v-model="welcome_message"
              @change="isChange = true"
            />
            <div class="mt-5 flex items-center">
              {{ $t('input-of-customer-info') }}
              <div
                class="ml-2"
                v-tooltip:top.tooltip="$t('tip-chatroom-reply-message')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormSelect
              v-model="welcomeGetCustomerInfoType"
              class="mt-2"
              @change="isChange = true"
            >
              <option v-for="t in types" :key="t.value" :value="t.value">
                {{ t.text }}
              </option>
            </FormSelect>
            <div
              class="mt-4 rounded-lg border p-5"
              v-if="welcomeGetCustomerInfoType !== 'none'"
            >
              <div class="flex items-center">
                {{ $t('reply-message-title') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tooltip="$t('tip-chatroom-header')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormInput
                type="text"
                v-model="typeTitle"
                class="mt-2"
                @change="isChange = true"
              />
              <div class="mt-3 flex items-center">
                {{ $t('reply-message-desc') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tooltip="$t('tip-chatroom-message-content')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormInput
                type="text"
                v-model="typeText"
                class="mt-2"
                @change="chatSettingChange = true"
              />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="4" class="pb-9">
            <div class="font-bold">
              {{ $t('online-status-setting-is-online') }}
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('online-status-show') }}
                <div
                  class="ml-1 font-normal"
                  v-tooltip:top.tooltip="$t('tip-chatroom-status')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="showOnlineStatus"
                  @change="isChange = true"
                />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('setting-to-online') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tooltip="$t('tip-chatroom-online')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="isOnline"
                  @change="isChange = true"
                />
              </FormSwitch>
            </div>

            <div class="mt-5 flex items-center">
              {{ $t('online-status-offline-message') }}
              <div
                class="ml-1"
                v-tooltip:top.tooltip="$t('tip-chatroom-offline')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormTextarea
              class="mt-2"
              v-model="offlineSendMsg"
              @change="isChange = true"
            />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="5" class="pb-9">
            <div class="font-bold">{{ $t('advanced-setting') }}</div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('message-notification-setting-pop') }}
                <div
                  class="ml-1 font-normal"
                  v-tooltip:top.tooltip="$t('tip-open-notify-setting')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="openNotifySetting"
                  @change="isChange = true"
                />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('save-popup') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tooltip="$t('tip-chatroom-pop-up')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="showSavePopup"
                  @change="isChange = true"
                />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('show-guest-setting') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tooltip="$t('tip-guest-setting')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="showGuestSetting"
                  @change="changeShowGuestSetting"
                />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('show-export-log') }}
                <div class="ml-1" v-tooltip:top.tooltip="$t('tip-export-log')">
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="showExportLog"
                  :disabled="!showGuestSetting"
                  @change="isChange = true"
                />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('show-read-receipts') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tooltip="$t('tip-chatroom-read')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  type="checkbox"
                  v-model="showIsRead"
                  @change="isChange = true"
                />
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
                  @change="isChange = true"
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
                  @change="isChange = true"
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
                  @change="isChange = true"
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
                  @change="isChange = true"
                />
              </FormSwitch>
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="mt-[60px] flex-1 px-10 py-5 lg:mt-0">
        <div class="font-bold">{{ $t('qrcode-setting-preview-title') }}</div>
        <div
          class="mx-auto mt-5 flex h-[700px] w-[350px] flex-col rounded-[55px] border-[16px] border-[#5b5b5b] py-9"
        >
          <header class="chat-header py-2 pl-5">{{ title }}</header>
          <main class="flex-1 p-2 text-xs">
            <div class="flex">
              <HeadShots
                read-only
                class="m-1"
                :avatar="avatar"
                :image_id="image_id"
                :size="24"
              />
              <div>
                <div class="text-[10px] text-[#8d8d8d]">{{ name }}</div>
                <div class="flex items-end">
                  <div class="rounded-[10px] bg-[#eeeff0] p-2 text-[#1a1a1a]">
                    Hello
                  </div>
                  <div class="ml-1 text-[10px] text-[#8d8d8d]">01:00</div>
                </div>
              </div>
            </div>
            <div class="flex" v-if="welcomeGetCustomerInfoType !== 'none'">
              <HeadShots
                read-only
                class="m-1"
                :avatar="avatar"
                :image_id="image_id"
                :size="24"
              />
              <div>
                <div class="text-[10px] text-[#8d8d8d]">{{ name }}</div>
                <div class="flex items-end">
                  <div class="rounded-[10px] bg-[#eeeff0] p-2 text-[#1a1a1a]">
                    {{ typeText }}
                    <div class="mt-1 flex items-center bg-white pr-2">
                      <ContryCodePicker
                        white
                        model-value="+886"
                        disabled
                        v-if="welcomeGetCustomerInfoType === 'phone'"
                      />
                      <input
                        class="h-[26px] w-[130px] overflow-hidden overflow-ellipsis whitespace-nowrap border-0 bg-white text-xs"
                        :placeholder="displayCustInputPlaceholder"
                        disabled
                      />
                      <Lucide
                        icon="Send"
                        width="15"
                        class="ml-1"
                        color="#00308F"
                        fill="#00308F"
                      />
                    </div>
                  </div>
                  <div class="ml-1 text-[10px] text-[#8d8d8d]">01:00</div>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <div>
                <div class="flex items-end">
                  <div class="mr-1 text-[10px] text-[#8d8d8d]">01:00</div>
                  <div class="msg-bubble rounded-[10px] p-2 text-[#1a1a1a]">
                    Hello
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer class="flex items-center px-3 py-[10px]">
            <Lucide icon="ChevronUpCircle" width="18" />
            <div
              class="ml-2 flex flex-1 items-center rounded-lg bg-[#f2f2f2] pr-2"
            >
              <input
                class="h-[30px] flex-1 border-0 bg-[#f2f2f2]"
                :placeholder="$t('type-something')"
                disabled
              />
              <img
                src="@/assets/images/icon_sticker_w24_h24@2x.png"
                alt=""
                width="18"
                height="18"
              />
            </div>
            <Lucide icon="Mic" width="18" class="ml-2" />
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.chat-header {
  background: v-bind(chatHeaderColor);
  color: v-bind(chatHeaderTextColor);
}
.msg-bubble {
  background: v-bind(chatBubbleColor);
  color: v-bind(chatBubbleTextColor);
  border: 1px solid v-bind(chatBubbleBorderColor);
}
/**/
</style>
