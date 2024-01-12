<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../../../../base-components/Button'
import {
  FormInput,
  FormSelect,
  FormTextarea
} from '../../../../base-components/Form'
import { Slideover } from '../../../../base-components/Headless'
import Lucide from '../../../../base-components/Lucide'
import useSurveySetting from '../../../../composables/LinkDetail/AdvancedSetting/SurveySetting/useSurveySetting'
import { useWaningModalStore } from '../../../../stores/modals/warrningModal'
import HowToCreateSurveyModal from '../../../Modals/HowToCreateSurveyModal/Index.vue'
import VerticalSteps from '../../../VerticalSteps'
import SurveyListItem from './SurveyListItem.vue'

const {
  showHowToModal,
  showEditContentSlidOver,
  mode,
  surveys,
  sruveyTitle,
  surveyTriggerWord,
  surveyEnd,
  surveyContents,
  contentOptions,
  flowType,
  selectedContentIdx,
  isInit,
  isChange,
  getSurveys,
  addSurveyContent,
  addOption,
  delOption,
  editSurveyContent,
  saveContent,
  editSurvey,
  confirmDelete,
  confirmDeleteSurvey,
  createSurvey,
  copySurvey,
  enableSurvey
} = useSurveySetting()
const { t } = useI18n()
const dragIdx = ref(-1)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dragItem = ref<any>(null)

onMounted(() => {
  isInit.value = true
  getSurveys().then(() => {
    isInit.value = false
  })
})

const backHandler = () => {
  if (isChange.value) {
    return useWaningModalStore().showModal({
      text: t('survey-modal-confirm-back-title'),
      content: t('survey-modal-confirm-back-desc'),
      type: 'warning',
      showCancel: true,
      callback: () => {
        isChange.value = false
        mode.value = 'list'
      }
    })
  }
  mode.value = 'list'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onDrop = (idx: number, list: any[]) => {
  if (list[dragIdx.value] !== dragItem.value) return
  list.splice(dragIdx.value > idx ? idx : idx + 1, 0, dragItem.value)
  list.splice(dragIdx.value > idx ? dragIdx.value + 1 : dragIdx.value, 1)
}
</script>

<template>
  <template v-if="mode === 'list' && !isInit">
    <div v-if="surveys.length === 0" class="mt-2 p-4 text-center">
      <img
        src="@/assets/images/survey-empty.png"
        class="mx-auto mb-4 mt-10"
        alt=""
      />
      <div>{{ $t('survey-empty-desc') }}</div>
      <Button variant="primary" class="mt-5" @click="createSurvey">
        {{ $t('survey-create-button') }}
      </Button>
      <div>
        <button
          class="mx-auto mt-5 flex items-center rounded-lg p-2 hover:bg-[#eaeaea]"
          @click="showHowToModal = true"
        >
          <Lucide icon="PlaySquare" class="mr-2" />
          {{ $t('survey-how-to-create') }}
        </button>
      </div>
    </div>
    <div v-else class="rounded-lg bg-white dark:bg-darkmode-600">
      <div
        class="flex items-center justify-between border-b px-5 py-3 text-base font-bold"
      >
        {{ $t('survey-my-survey') }}
        <div>
          <Button
            variant="outline-primary"
            class="border text-sm"
            @click="mode = 'list'"
            >{{ $t('see_data') }}</Button
          >
          <Button
            variant="primary"
            class="ml-2 text-sm"
            @click="createSurvey"
            >{{ $t('survey-create-button') }}</Button
          >
        </div>
      </div>
      <div class="rounded-lg px-5 py-4">
        <div class="flex items-center justify-between p-3">
          <div class="w-2/5"></div>
          <div class="w-[10%]">{{ $t('survey-question') }}</div>
          <div class="w-[10%]">{{ $t('reply') }}</div>
          <div class="w-[30%]">{{ $t('updated_at') }}</div>
          <div class="w-[5%]"></div>
        </div>
        <SurveyListItem
          v-for="(survey, idx) in surveys"
          :key="survey.survey.id"
          :survey="survey"
          :showEnable="surveys.length > 0 && !survey.survey.is_use"
          @edit="() => editSurvey(idx)"
          @delete="() => confirmDeleteSurvey(survey.survey.id)"
          @copy="() => copySurvey(survey.survey.id)"
          @enable="() => enableSurvey(survey.survey.id)"
        />
      </div>
    </div>
  </template>
  <div
    v-else-if="mode === 'create' || mode === 'edit'"
    class="rounded-lg bg-white dark:bg-darkmode-600"
  >
    <div
      class="flex items-center justify-between border-b px-5 py-3 text-base font-bold"
    >
      {{
        mode === 'create' ? $t('survey-create-title') : $t('survey-edit-survey')
      }}
      <div>
        <Button
          variant="outline-primary"
          class="border text-sm"
          @click="backHandler"
          >{{ $t('back-button') }}</Button
        >
        <Button
          variant="primary"
          class="ml-2 text-sm"
          @click="() => saveContent(false)"
          :disabled="!isChange"
          >{{ $t('survey-save-survey') }}</Button
        >
      </div>
    </div>
    <div class="px-7 py-5">
      <VerticalSteps>
        <VerticalSteps.Step :step="1" class="pb-5 pr-5">
          <div class="pb-2 pt-1 text-base font-bold">
            {{ $t('survey-setting-tab') }}
          </div>
          <div>
            <span class="text-red-500">*</span>
            {{ $t('survey-name') }}
          </div>
          <FormInput
            class="mt-2"
            type="text"
            :placeholder="$t('survey-name-desc')"
            v-model="sruveyTitle"
            @change="isChange = true"
          />
          <div class="mt-4">{{ $t('survey-keyword-input') }}</div>
          <FormInput
            type="text"
            class="mt-2"
            :placeholder="$t('survey-keyword-input-placeholder')"
            v-model="surveyTriggerWord"
            @change="isChange = true"
          />
          <div class="mt-4">
            <span class="text-red-500">*</span>
            {{ $t('survey-end-message-input') }}
          </div>
          <FormInput
            type="text"
            class="mt-2"
            :placeholder="$t('survey-end-message-input-placeholder')"
            v-model="surveyEnd"
            @change="isChange = true"
          />
        </VerticalSteps.Step>
      </VerticalSteps>
      <VerticalSteps>
        <VerticalSteps.Step :step="2" class="pb-5 pr-5" is-final>
          <div class="text-base font-bold">
            {{ $t('survey-info-setting') }}
          </div>
          <div
            v-for="(items, idx) in surveyContents"
            :key="idx"
            class="mt-3 flex items-center justify-between rounded-lg border px-5 py-3"
            draggable="true"
            @dragstart="(dragIdx = idx), (dragItem = items)"
            @dragend="(dragIdx = -1), (dragItem = null)"
            @dragenter="(e) => e.preventDefault()"
            @dragover="(e) => e.preventDefault()"
            @drop="() => onDrop(idx, surveyContents)"
          >
            <div class="flex items-center gap-4">
              <Lucide icon="MoreVertical" class="cursor-move" />
              <span class="text-base font-bold text-primary"
                >{{ $t('survey-question') }} {{ idx + 1 }}</span
              >
              <div v-if="!items.content" class="text-[#939393]">
                {{ $t('survey-need-create') }}
              </div>
              <div v-else class="ml-2 font-medium">{{ items.content }}</div>
            </div>
            <div class="flex items-center gap-4">
              <Lucide
                icon="Pen"
                class="cursor-pointer"
                @click="editSurveyContent(idx)"
              />
              <Lucide
                icon="Trash"
                class="ml-2 cursor-pointer"
                @click="confirmDelete(items, idx)"
              />
            </div>
          </div>
          <div class="mt-2 text-sm">
            <button
              v-if="surveyContents.length < 10"
              class="flex items-center disabled:opacity-50"
              @click="addSurveyContent"
              :disabled="!sruveyTitle || !surveyEnd"
            >
              <Lucide
                icon="PlusCircle"
                :stroke-width="6"
                :width="20"
                :height="20"
                class="mr-2"
                color="#02B13F"
              /><span class="font-bold text-primary">{{
                $t('survey-question-add')
              }}</span>
              <div
                class="ml-2 text-desc_font"
                v-if="!sruveyTitle || !surveyEnd"
              >
                {{ $t('survey-question-add-notice') }}
              </div>
            </button>
          </div>
        </VerticalSteps.Step>
      </VerticalSteps>
    </div>
  </div>
  <HowToCreateSurveyModal v-model:open="showHowToModal" />
  <Slideover :open="showEditContentSlidOver">
    <Slideover.Panel class="overflow-y-auto p-5">
      <div>
        <Lucide
          icon="X"
          class="absolute right-2 top-2 cursor-pointer"
          @click="showEditContentSlidOver = false"
        />
        <div class="mb-2 p-1 text-base font-bold text-primary">
          {{ $t('survey-question') }} {{ selectedContentIdx + 1 }}
        </div>
        <div>
          <span class="text-red-500">*</span>
          {{ $t('survey-question-select-type') }}
        </div>
        <div class="mt-2 text-xs text-disabled_font">
          {{ $t('survey-question-choose-one') }}
        </div>
        <FormSelect class="mt-2" v-model="flowType">
          <option value="choice">
            {{ $t('survey-question-type-choice') }}
          </option>
          <option value="rating">
            {{ $t('survey-question-type-rating') }}
          </option>
          <option value="command">
            {{ $t('survey-question-type-command') }}
          </option>
        </FormSelect>
        <div class="mt-3">
          <span class="text-red-500">*</span>
          {{ $t('survey-question-info') }}
        </div>
        <FormTextarea
          class="mt-3 resize-none"
          :placeholder="$t('edit-rich-menu-text-placeholder')"
          v-model="surveyContents[selectedContentIdx].content"
        />
        <template v-if="flowType === 'choice'">
          <div class="mt-5">{{ $t('survey-question-option') }}</div>
          <div class="mt-3 text-xs text-disabled_font">
            {{ $t('survey-question-required') }}
          </div>
          <div
            v-for="(opt, idx) in contentOptions"
            :key="idx"
            class="mt-3 flex items-center rounded bg-input_bg pr-2"
          >
            <FormInput
              type="text"
              :placeholder="`${$t('survey-question-option-placeholder')} ${
                idx + 1
              }`"
              v-model="contentOptions[idx]"
              @change="isChange = true"
            />
            <Lucide
              v-if="contentOptions.length > 2"
              icon="Trash"
              class="ml-2 cursor-pointer"
              @click="delOption(idx)"
            />
          </div>
          <button
            v-if="contentOptions.length < 10"
            @click="addOption"
            class="mt-3 flex items-center font-bold text-primary"
          >
            <Lucide
              icon="PlusCircle"
              class="mr-2"
              :stroke-width="6"
              width="20"
              color="#02B13F"
            />
            {{ $t('survey-question-add-option') }}
          </button>
        </template>
        <div class="mt-5 flex justify-center gap-2">
          <Button
            variant="outline-primary"
            class="border"
            @click="showEditContentSlidOver = false"
            >{{ $t('cancel-btn') }}</Button
          >
          <Button variant="primary" @click="() => saveContent(true)">{{
            $t('save-btn')
          }}</Button>
        </div>
      </div>
    </Slideover.Panel>
  </Slideover>
</template>

<style scoped>
.menu {
  position: absolute;
  padding: 16px;
  display: none;
}
.more:focus .menu {
  display: block;
}
</style>
