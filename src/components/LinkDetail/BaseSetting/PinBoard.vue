<script lang="ts" setup>
import {
  FormInput,
  FormSelect,
  FormTextarea,
  Upload
} from '../../../base-components/Form'
import FormSwitch from '../../../base-components/Form/FormSwitch'
import Lucide from '../../../base-components/Lucide'
import usePinBoard from '../../../composables/LinkDetail/BaseSetting/usePinBoard'
import VerticalSteps from '../../VerticalSteps'

const {
  showPinBoard,
  welecomeMessage,
  btnText,
  nicknamePlaceholder,
  isNicknameRequired,
  logo,
  isColorExpand,
  localBGImgs,
  removePowerBy,
  colors,
  theme,
  nicknameFormat,
  welcomeBGType,
  currentTab,
  hrText,
  bgList,
  welcomeBG,
  floatButtonColor,
  save
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
      <button class="rounded-lg bg-primary px-5 py-2 text-white" @click="save">
        {{ $t('save-btn') }}
      </button>
    </header>
    <div class="flex p-5">
      <div class="flex-1 border-e pe-10">
        <div class="mb-7 ml-6 flex w-full rounded-full bg-[#F6F6F6]">
          <div
            class="flex-1 cursor-pointer rounded-full py-2 text-center"
            :class="{
              'bg-[#E0EB76] text-black': currentTab === 0,
              'text-disabled_font': currentTab === 1
            }"
            @click="currentTab = 0"
          >
            {{ $t('menu-features-chat-appearance') }}
          </div>
          <div
            class="flex-1 cursor-pointer rounded-full py-2 text-center"
            :class="{
              'bg-[#E0EB76] text-black': currentTab === 1,
              'text-disabled_font': currentTab === 0
            }"
            @click="currentTab = 1"
          >
            {{ $t('dashboard-plan-list-rule-interactive-link-button') }}
          </div>
        </div>
        <VerticalSteps v-if="currentTab === 0">
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
            <div class="mt-3">{{ $t('nickname-format') }}</div>
            <div class="mt-2">
              <FormInput v-model="nicknameFormat" type="text" />
            </div>
            <div class="mt-3">{{ $t('nickname-placeholder-text') }}</div>
            <div class="mt-2">
              <FormInput v-model="nicknamePlaceholder" type="text" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="5" class="pb-9">
            <div class="font-bold">
              {{ $t('edit-welcome-logo') }}
            </div>
            <div>
              <Upload
                v-model="logo"
                type="img"
                :limit="2"
                :show-close="false"
              />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="6" class="pb-9">
            <div class="font-bold">
              {{ $t('choose-theme-color') }}
            </div>
            <div class="mt-2 bg-[#F6F6F6] p-5 dark:bg-darkmode-700">
              <div class="flex items-center justify-between">
                <div
                  v-for="color in colors"
                  :key="color"
                  :class="`flex h-8 w-8 cursor-pointer items-center justify-center rounded`"
                  :style="`background-color: ${color}`"
                  @click="theme = color"
                >
                  <Lucide
                    v-if="theme.toLocaleLowerCase() === color"
                    icon="Check"
                    color="white"
                    width="28"
                  />
                </div>

                <button @click="isColorExpand = !isColorExpand">
                  <Lucide
                    icon="ChevronDown"
                    width="20"
                    class="cursor-pointer transition-all"
                    :class="{ 'rotate-180': isColorExpand }"
                  />
                </button>
              </div>
              <div v-if="isColorExpand">
                <hr class="my-5 px-0" />
                <div>
                  <div class="flex items-center justify-between">
                    {{ $t('edit-welcome-text-color') }}
                    <input
                      type="color"
                      class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                      :value="'#939393'"
                    />
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    {{ $t('edit-welcome-btn-color') }}
                    <input
                      type="color"
                      class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                      v-model="floatButtonColor"
                    />
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    {{ $t('edit-welcome-btn-text-color') }}
                    <input
                      type="color"
                      class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                      value="#39701f"
                    />
                  </div>
                </div>
              </div>
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="7" class="pb-9">
            <div class="font-bold">
              {{ $t('edit-welcome-bak-color') }}
            </div>
            <div class="mt-3">
              <div>
                <FormSelect v-model="welcomeBGType">
                  <option value="color">
                    {{ $t('edit-welcome-choose-color') }}
                  </option>
                  <option value="image">
                    {{ $t('edit-welcome-choose-image') }}
                  </option>
                </FormSelect>
              </div>
              <template v-if="welcomeBGType === 'image'">
                <div
                  v-if="localBGImgs.length === 0"
                  class="mt-3 grid grid-cols-3 gap-3"
                >
                  <img
                    v-for="bg in bgList"
                    :key="bg"
                    :src="bg"
                    class="cursor-pointer rounded-xl"
                    :class="{ 'border-2 border-primary': bg === welcomeBG }"
                    alt=""
                    @click="welcomeBG = bg"
                  />
                </div>
                <!-- img -->
                <div class="mt-3">
                  <Upload
                    v-model="localBGImgs"
                    type="img"
                    :limit="2"
                    show-close
                    @clear="
                      () =>
                        bgList.includes(welcomeBG)
                          ? null
                          : (welcomeBG = bgList[0])
                    "
                  />
                </div>
              </template>
              <input
                v-else
                type="color"
                class="mt-3 h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                :value="'#939393'"
              />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="8" class="pb-9" is-final>
            <div class="font-bold">{{ $t('other-settings') }}</div>
            <div class="flex items-center justify-between">
              <div class="mt-3">
                {{ $t('edit-welcome-remove-pinboard-footer-title') }}
              </div>
              <FormSwitch>
                <FormSwitch.Input v-model="removePowerBy" type="checkbox" />
              </FormSwitch>
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
        <VerticalSteps v-else>
          <VerticalSteps.Step :step="1">
            <div class="font-bold">{{ $t('welcome-hr-text-input') }}</div>
            <div class="mt-3">
              <FormInput type="text" v-model="hrText" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2">
            <div class="font-bold">{{ $t('choose-theme-color') }}</div>
            <div class="mt-2 bg-[#F6F6F6] p-5 dark:bg-darkmode-700">
              <div class="flex items-center justify-between">
                <div
                  v-for="color in colors"
                  :key="color"
                  :class="`flex h-8 w-8 cursor-pointer items-center justify-center rounded`"
                  :style="`background-color: ${color}`"
                  @click="floatButtonColor = color"
                >
                  <Lucide
                    v-if="floatButtonColor.toLocaleLowerCase() === color"
                    icon="Check"
                    color="white"
                    width="28"
                  />
                </div>

                <button @click="isColorExpand = !isColorExpand">
                  <Lucide
                    icon="ChevronDown"
                    width="20"
                    class="cursor-pointer transition-all"
                    :class="{ 'rotate-180': isColorExpand }"
                  />
                </button>
              </div>
              <div v-if="isColorExpand">
                <hr class="my-5 px-0" />
                <div>
                  <div class="flex items-center justify-between">
                    {{ $t('welcome-hr-color-input') }}
                    <input
                      type="color"
                      class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                      :value="'#939393'"
                    />
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    {{ $t('edit-float-button-color') }}
                    <input
                      type="color"
                      class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                      v-model="floatButtonColor"
                    />
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    {{ $t('edit-float-button-text-color') }}
                    <input
                      type="color"
                      class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                      value="#39701f"
                    />
                  </div>
                </div>
              </div>
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1 px-10 py-5">
        <div class="font-bold">{{ $t('qrcode-setting-preview-title') }}</div>
      </div>
    </div>
  </main>
</template>
