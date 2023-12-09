<script setup lang="ts">
import { FormInput, FormTextarea } from '../../../base-components/Form'
import usePinBoard from '../../../composables/LinkDetail/BaseSetting/usePinBoard'
import HeadShots from '../../HeadShots'
import ThemePicker from '../../ThemePicker'
import VerticalSteps from '../../VerticalSteps'

const {
  chatHeaderColor,
  chatHeaderTextColor,
  chatBubbleColor,
  chatBubbleBorderColor,
  chatBubbleTextColor,
  title,
  avatar,
  image_id,
  welcome_message
} = usePinBoard()
</script>
<template>
  <div class="mt-2 bg-white dark:bg-darkmode-600">
    <div
      class="flex items-center justify-between border-b border-[#EDF2F7] p-5"
    >
      {{ $t('qrcode-setting-tab-chat-setting') }}
      <button class="rounded-lg bg-primary px-5 py-2 text-white">
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
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1 px-10 py-5"></div>
    </div>
  </div>
</template>
