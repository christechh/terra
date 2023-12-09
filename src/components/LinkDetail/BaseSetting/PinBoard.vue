<script lang="ts" setup>
import { FormInput, FormTextarea, Upload } from '../../../base-components/Form'
import FormSwitch from '../../../base-components/Form/FormSwitch'
import ColorPicker from '../../../components/ColorPicker'
import usePinBoard from '../../../composables/LinkDetail/BaseSetting/usePinBoard'
import VerticalSteps from '../../VerticalSteps'

const {
  showPinBoard,
  welecomeMessage,
  btnText,
  nickname,
  isNicknameRequired,
  logo
} = usePinBoard()
</script>

<template>
  <main class="mt-2 rounded rounded-lg bg-white dark:bg-darkmode-600">
    <header
      class="flex items-center justify-between border-b border-[#EDF2F7] p-5 text-base"
    >
      <span>
        {{ $t('menu-features-pinpage') }}
      </span>
      <button class="rounded-lg bg-primary px-5 py-2 text-white">
        {{ $t('save-btn') }}
      </button>
    </header>
    <div class="flex p-5">
      <div class="flex-1 border-e pe-10">
        <VerticalSteps>
          <VerticalSteps.Step
            :step="1"
            class="flex items-center justify-between pb-9"
          >
            <span class="font-bold">{{ $t('show-pinboard-page') }}</span>
            <FormSwitch>
              <FormSwitch.Input v-model="showPinBoard" type="checkbox" />
            </FormSwitch>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2" class="pb-9">
            <div class="font-bold">{{ $t('pinboard-welecome-message') }}</div>
            <div class="mt-2">
              <FormTextarea v-model="welecomeMessage" class="resize-none" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" class="pb-9">
            <div>{{ $t('edit-welcome_start_btn_text') }}</div>
            <div class="mt-2">
              <FormTextarea v-model="btnText" class="resize-none" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="4" class="pb-9">
            <div class="font-bold">
              {{ $t('nickname-setting') }}
            </div>
            <div class="flex items-center justify-between">
              <div class="mt-3">
                {{ $t('set-required') }}
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  v-model="isNicknameRequired"
                  type="checkbox"
                />
              </FormSwitch>
            </div>
            <div>{{ $t('nickname-placeholder-text') }}</div>
            <div class="mt-2">
              <FormInput v-model="nickname" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="5" class="pb-9">
            <div class="font-bold">
              {{ $t('edit-welcome-logo') }}
            </div>
            <div>
              <Upload v-model="logo" type="img" :limit="2" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="6" class="pb-9">
            <div class="font-bold">
              {{ $t('choose-theme-color') }}
            </div>
            <ColorPicker />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="7" class="pb-9">
            <div class="font-bold">
              {{ $t('edit-welcome-bak-color') }}
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1"></div>
    </div>
  </main>
</template>
