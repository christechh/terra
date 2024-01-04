<script setup lang="ts">
import { onMounted } from 'vue'
import Button from '../../../../base-components/Button'
import {
  FormInput,
  FormSelect,
  FormTextarea
} from '../../../../base-components/Form'
import { Slideover } from '../../../../base-components/Headless'
import Lucide from '../../../../base-components/Lucide'
import useSurveySetting from '../../../../composables/LinkDetail/AdvancedSetting/SurveySetting/useSurveySetting'
import HowToCreateSurveyModal from '../../../Modals/HowToCreateSurveyModal/Index.vue'
import VerticalSteps from '../../../VerticalSteps'
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
  getSurveys,
  addSurveyContent,
  delSurveyContent,
  addOption,
  delOption,
  editSurveyContent,
  saveContent
} = useSurveySetting()

onMounted(() => {
  getSurveys()
})
</script>

<template>
  <template v-if="mode === 'list'">
    <div
      v-if="surveys.length === 0"
      class="mt-2 bg-transparent p-4 text-center"
    >
      <img
        src="@/assets/images/survey-empty.png"
        class="mx-auto mb-4 mt-10"
        alt=""
      />
      <div>{{ $t('survey-empty-desc') }}</div>
      <Button variant="primary" class="mt-5" @click="mode = 'create'">
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
    <div v-else>
      <div
        class="flex items-center justify-between border-b px-5 py-3 text-base font-bold"
      >
        {{ $t('survey-my-survey') }}
        <div>
          <Button
            variant="outline-primary"
            class="border"
            @click="mode = 'list'"
            >{{ $t('see_data') }}</Button
          >
          <Button variant="primary" class="ml-2" @click="mode = 'create'">{{
            $t('survey-create-button')
          }}</Button>
        </div>
      </div>
      <div class="px-[52px] py-4">
        <div class="flex items-center justify-between p-3">
          <div class="w-2/5"></div>
          <div class="w-[10%]">{{ $t('survey-question') }}</div>
          <div class="w-[10%]">{{ $t('reply') }}</div>
          <div class="w-[30%]">{{ $t('updated_at') }}</div>
          <div class="w-[5%]"></div>
        </div>
        <div
          v-for="survey in surveys"
          :key="survey.survey.id"
          class="mb-2 flex items-center justify-between rounded-lg bg-input_bg px-5 py-2"
        >
          <div class="w-2/5">
            <div>
              {{ survey.survey.name }}
              <span
                v-if="survey.survey.is_open"
                class="ml-2 bg-[#e3f2a5] px-2 py-1 text-xs text-primary"
                ><span
                  class="inline-block h-[6px] w-[6px] rounded-full bg-primary"
                ></span>
                {{ $t('in_use') }}</span
              >
            </div>
            <div class="mt-2 text-xs text-[#939393]">
              {{ $t('created_at') }}
              {{ new Date(survey.survey.createdAt).toLocaleString() }}
            </div>
          </div>
          <div class="w-[10%]">{{ survey.surveyFlow.length }}</div>
          <div class="w-[10%]">{{ survey.survey.complete }}</div>
          <div class="w-[30%]">
            {{ new Date(survey.survey.updatedAt).toLocaleString() }}
          </div>
          <div class="more relative w-[5%]">
            <Lucide icon="MoreHorizontal" />
          </div>
        </div>
      </div>
    </div>
  </template>
  <div v-else-if="mode === 'create' || mode === 'edit'">
    <div
      class="flex items-center justify-between border-b px-5 py-3 text-base font-bold"
    >
      {{ $t('survey-create-title') }}
      <div>
        <Button
          variant="outline-primary"
          class="border"
          @click="mode = 'list'"
          >{{ $t('back-button') }}</Button
        >
        <Button
          variant="primary"
          class="ml-2"
          @click="() => saveContent(false)"
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
          />
          <div class="mt-4">{{ $t('survey-keyword-input') }}</div>
          <FormInput
            type="text"
            class="mt-2"
            :placeholder="$t('survey-keyword-input-placeholder')"
            v-model="surveyTriggerWord"
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
          />
        </VerticalSteps.Step>
      </VerticalSteps>
      <VerticalSteps>
        <VerticalSteps.Step :step="2" class="pb-5 pr-5" is-final>
          <div class="text-base font-bold">{{ $t('survey-info-setting') }}</div>
          <div
            v-for="(items, idx) in surveyContents"
            :key="idx"
            class="mt-3 flex items-center justify-between rounded-lg border px-5 py-3"
          >
            <div class="flex items-center">
              <Lucide icon="MoreVertical" class="cursor-move" />
              <span class="text-base font-bold text-primary">{{
                $t('survey-question')
              }}</span>
            </div>
            <div class="flex items-center">
              <Lucide
                icon="Pen"
                class="cursor-pointer"
                @click="editSurveyContent(idx)"
              />
              <Lucide
                icon="Trash"
                class="ml-2 cursor-pointer"
                @click="delSurveyContent(idx)"
              />
            </div>
          </div>
          <div class="mt-2 text-sm">
            <button class="flex items-center" @click="addSurveyContent">
              <Lucide icon="PlusCircle" class="mr-2" color="#02B13F" /><span
                class="text-primary"
                >{{ $t('survey-question-add') }}</span
              >
              <div class="ml-2 text-desc_font">
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
    <Slideover.Panel class="p-5">
      <Lucide
        icon="X"
        class="absolute right-2 top-2 cursor-pointer"
        @click="showEditContentSlidOver = false"
      />
      <div class="mb-2 p-1 text-base font-bold text-primary">
        {{ $t('survey-question') }}
      </div>
      <div>
        <span class="text-red-500">*</span>
        {{ $t('survey-question-select-type') }}
      </div>
      <div class="mt-2 text-xs text-disabled_font">
        {{ $t('survey-question-choose-one') }}
      </div>
      <FormSelect class="mt-2" v-model="flowType">
        <option value="choice">{{ $t('survey-question-type-choice') }}</option>
        <option value="rating">{{ $t('survey-question-type-rating') }}</option>
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
          class="mt-3 flex items-center bg-input_bg pr-2"
        >
          <FormInput
            type="text"
            :placeholder="$t('survey-question-option-placeholder')"
            v-model="contentOptions[idx]"
          />
          <Lucide
            v-if="contentOptions.length > 2"
            icon="Trash"
            class="ml-2 cursor-pointer"
            @click="delOption(idx)"
          />
        </div>
        <button @click="addOption" class="mt-3 flex items-center text-primary">
          <Lucide icon="PlusCircle" class="mr-2" color="#02B13F" />
          {{ $t('survey-question-add-option') }}
        </button>
      </template>
      <div class="mt-5 flex justify-center gap-2">
        <Button variant="outline-primary" class="border">{{
          $t('cancel-btn')
        }}</Button>
        <Button variant="primary" @click="() => saveContent(true)">{{
          $t('save-btn')
        }}</Button>
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
