<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  FormInput,
  FormSelect,
  FormTextarea,
  Upload
} from '../../../base-components/Form'
import FormSwitch from '../../../base-components/Form/FormSwitch'
import Lucide from '../../../base-components/Lucide'
import usePinBoard from '../../../composables/LinkDetail/BaseSetting/usePinBoard'
import CreateActionBtn from '../../Modals/CreateActionBtn'
import ThemePicker from '../../ThemePicker'
import VerticalSteps from '../../VerticalSteps'

const {
  showPinBoard,
  welecomeMessage,
  btnText,
  nicknamePlaceholder,
  isNicknameRequired,
  logo,
  localBGImgs,
  removePowerBy,
  theme,
  nicknameFormat,
  welcomeBGType,
  currentTab,
  hrText,
  bgList,
  welcomeBG,
  floatButtonColor,
  chatLogoSize,
  withoutSeoNoIndex,
  welcomeLinkSetting,
  handleCreateActionBtn,
  deleteActionBtn,
  save,
  nickNameFormatTypeChange
} = usePinBoard()

const showCreateActionBtn = ref(false)

const btnColr = computed(() => {
  return theme.value === '#e0eb76' ? '#39701f' : '#ffffff'
})

const floatBtnTextColor = computed(() => {
  return floatButtonColor.value === '#e0eb76' ? '#39701f' : '#ffffff'
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectActionBtns = ref<any>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectActionIdx = ref<any>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dragIdx = ref<any>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dragItem = ref<any>(null)

const editActionBtn = (i: number) => {
  selectActionBtns.value = welcomeLinkSetting.value[i]
  selectActionIdx.value = i
  showCreateActionBtn.value = true
}

const createHandler = () => {
  selectActionBtns.value = null
  selectActionIdx.value = null
  showCreateActionBtn.value = true
}

const onDrop = (idx: number) => {
  welcomeLinkSetting.value.splice(
    dragIdx.value > idx ? idx : idx + 1,
    0,
    dragItem.value
  )
  welcomeLinkSetting.value.splice(
    dragIdx.value > idx ? dragIdx.value + 1 : dragIdx.value,
    1
  )
}
</script>

<template>
  <main class="mt-2 rounded rounded-lg bg-white dark:bg-darkmode-600">
    <header
      class="flex items-center justify-between border-b border-[#EDF2F7] p-5 text-base"
    >
      <span>
        {{ $t('edit-welcome-pinboard-setting') }}
      </span>
      <button
        class="rounded-lg bg-primary px-5 py-2 text-sm text-white"
        @click="save"
      >
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
            <div class="flex items-center">
              <span class="font-bold">{{ $t('show-pinboard-page') }}</span>
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-switch')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormSwitch>
              <FormSwitch.Input v-model="showPinBoard" type="checkbox" />
            </FormSwitch>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2" class="pb-9">
            <div class="flex items-center font-bold">
              {{ $t('pinboard-welecome-message') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-msg')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="mt-2">
              <FormTextarea v-model="welecomeMessage" class="resize-none" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" class="pb-9">
            <div class="flex items-center font-bold">
              {{ $t('edit-welcome_start_btn_text') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-button')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="mt-2">
              <FormTextarea v-model="btnText" class="resize-none" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="4" class="pb-9">
            <div class="font-bold">
              {{ $t('nickname-setting') }}
            </div>
            <div class="flex items-center justify-between">
              <div class="mt-3 flex items-center">
                {{ $t('set-required') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tootip="$t('nickname-require-desc')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input
                  v-model="isNicknameRequired"
                  type="checkbox"
                />
              </FormSwitch>
            </div>
            <template v-if="isNicknameRequired">
              <div class="mt-5 flex items-center">
                {{ $t('nickname-format') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tootip="$t('nickname-format-desc')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <div class="mt-2">
                <FormSelect
                  v-model="nicknameFormat"
                  @change="nickNameFormatTypeChange"
                >
                  <option value="none">{{ $t('nickname-type-none') }}</option>
                  <option value="email">{{ $t('nickname-type-email') }}</option>
                  <option value="id">{{ $t('nickname-type-id') }}</option>
                  <option value="number">
                    {{ $t('nickname-type-number') }}
                  </option>
                  <option value="mobile">
                    {{ $t('nickname-type-mobile') }}
                  </option>
                </FormSelect>
              </div>
            </template>
            <div class="mt-5 flex items-center">
              {{ $t('nickname-placeholder-text') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-nickname')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="mt-2">
              <FormInput v-model="nicknamePlaceholder" type="text" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="5" class="pb-9">
            <div class="flex items-center font-bold">
              {{ $t('edit-welcome-logo') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-logo')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="mt-5">
              <Upload
                v-model="logo"
                type="img"
                :limit="2"
                :show-close="false"
              />
            </div>
            <div class="mt-5 flex items-center">
              {{ $t('setting-chat-logo-size') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-setting-chat-logo-size')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div
              class="h-38 mt-2 flex flex h-[38px] w-[90px] items-center overflow-hidden rounded-xl border"
            >
              <input
                v-model="chatLogoSize"
                class="w-[40px] flex-1 border-0 bg-white px-0 py-0 text-center focus:ring-[transparent] dark:bg-darkmode-600"
                max="100"
              />
              <div>%</div>
              <div class="ml-2 flex flex-col border-l">
                <button @click="() => (chatLogoSize = chatLogoSize + 1)">
                  <Lucide icon="ChevronUp" width="20" height="20" />
                </button>
                <button @click="() => (chatLogoSize = chatLogoSize - 1)">
                  <Lucide icon="ChevronDown" width="20" height="20" />
                </button>
              </div>
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="6" class="pb-9">
            <div class="font-bold">
              {{ $t('choose-theme-color') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-theme')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <ThemePicker v-model="theme">
              <div>
                <div class="flex items-center justify-between">
                  {{ $t('edit-welcome-text-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    :value="'#939393'"
                    disabled
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-welcome-btn-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    v-model="theme"
                    disabled
                  />
                </div>
                <div class="mt-3 flex items-center justify-between">
                  {{ $t('edit-welcome-btn-text-color') }}
                  <input
                    type="color"
                    class="h-8 w-16 rounded-md bg-[#e4e4e4] px-2 py-1"
                    :value="btnColr"
                    disabled
                  />
                </div>
              </div>
            </ThemePicker>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="7" class="pb-9">
            <div class="flex items-center font-bold">
              {{ $t('edit-welcome-bak-color') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-background')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
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
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('should-include-in-seo') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tootip="$t('should-include-in-seo-tip')"
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input v-model="withoutSeoNoIndex" type="checkbox" />
              </FormSwitch>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center">
                {{ $t('edit-welcome-remove-pinboard-footer-title') }}
                <div
                  class="ml-1"
                  v-tooltip:top.tootip="
                    $t('edit-welcome-remove-pinboard-footer-desc')
                  "
                >
                  <Lucide icon="HelpCircle" width="14" />
                </div>
              </div>
              <FormSwitch>
                <FormSwitch.Input v-model="removePowerBy" type="checkbox" />
              </FormSwitch>
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
        <VerticalSteps v-else>
          <VerticalSteps.Step :step="1">
            <div class="flex items-center font-bold">
              {{ $t('welcome-hr-text-input') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-hr')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="mt-3">
              <FormInput type="text" v-model="hrText" />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2">
            <div class="flex items-center font-bold">
              {{ $t('choose-theme-color') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-theme')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="mt-2 bg-[#F6F6F6] dark:bg-darkmode-700">
              <ThemePicker v-model="floatButtonColor">
                <div class="">
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
                      :value="floatBtnTextColor"
                    />
                  </div>
                </div>
              </ThemePicker>
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" class="pb-9" is-final>
            <div class="flex items-center font-bold">
              {{ $t('welcome-link-button-setting') }}
              <div
                class="ml-1"
                v-tooltip:top.tootip="$t('tip-pinboard-welcome-links')"
              >
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div
              class="mt-3 flex items-center rounded border px-2"
              v-for="(link, i) in welcomeLinkSetting"
              :data-idx="i"
              :key="i"
              draggable="true"
              @dragstart="(dragIdx = i), (dragItem = link)"
              @dragend="(dragIdx = null), (dragItem = null)"
              @dragenter="(e) => e.preventDefault()"
              @dragover="(e) => e.preventDefault()"
              @drop="() => onDrop(i)"
            >
              <button class="cursor-move">
                <Lucide icon="MoreVertical" width="16" />
              </button>
              <input
                class="flex-1 border-0 bg-white focus:ring-[transparent]"
                :value="link.title"
                disabled
              />
              <button class="mr-2" @click="editActionBtn(i)">
                <Lucide icon="Pen" width="20" />
              </button>
              <button @click="deleteActionBtn(i)">
                <Lucide icon="Trash" width="25" />
              </button>
            </div>
            <button
              class="mt-3 flex w-full items-center justify-center rounded border border-dashed bg-dashboard_bg p-4 text-primary"
              @click="createHandler"
            >
              <Lucide icon="PlusCircle" color="#02b13f" class="mr-2" />{{
                $t('chatbot-message-create-action')
              }}
            </button>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1 px-10 py-5">
        <div class="font-bold">{{ $t('qrcode-setting-preview-title') }}</div>
        <div
          class="mx-auto mt-5 h-[700px] w-[325px] rounded-[55px] border-[16px] border-[#5b5b5b] px-6 py-[60px]"
          :style="`background: url(${welcomeBG}) center center / cover;`"
        >
          <img
            :src="logo && logo[0].data"
            class="mx-auto mb-4"
            alt=""
            :style="{ width: `${chatLogoSize}%` }"
          />
          <div class="mb-[50px] text-center text-[#939393]">
            {{ welecomeMessage }}
          </div>
          <input
            type="text"
            class="emulator-input mb-[10px] h-[48px] w-full rounded-[15px] px-4 py-[10px] text-xs"
            :style="{ borderColor: theme }"
            :placeholder="nicknamePlaceholder"
          />
          <button class="enter-btn h-[48px] w-full rounded-[15px]">
            {{ btnText }}
          </button>
          <div
            v-if="welcomeLinkSetting.length > 0"
            class="mb-[10px] mt-[34px] flex items-center justify-center text-[#939393]"
          >
            <hr class="mr-2 flex-1 bg-[#939393]" />
            {{ $t('welcome-hr-text') }}
            <hr class="ml-2 flex-1 bg-[#939393]" />
          </div>
          <button
            class="float-btn mb-[10px] h-[48px] w-full rounded-[15px]"
            v-for="(link, i) in welcomeLinkSetting"
            :key="i"
          >
            {{ link.title }}
          </button>
        </div>
      </div>
    </div>
    <CreateActionBtn
      v-if="showCreateActionBtn"
      @close="showCreateActionBtn = false"
      @save="(action) => handleCreateActionBtn(action, selectActionIdx)"
      :selectActionBtns="selectActionBtns"
    />
  </main>
</template>

<style>
.emulator-input:focus {
  border-color: v-bind(theme);
  outline: none;
  box-shadow: none;
}
.enter-btn {
  background-color: v-bind(theme);
  color: v-bind(btnColr);
}
.float-btn {
  background-color: v-bind(floatButtonColor);
  color: v-bind(floatBtnTextColor);
}
</style>
