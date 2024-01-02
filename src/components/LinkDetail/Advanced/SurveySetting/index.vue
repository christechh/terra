<script setup lang="ts">
import { onMounted } from 'vue'
import Button from '../../../../base-components/Button'
import { FormInput } from '../../../../base-components/Form'
import Lucide from '../../../../base-components/Lucide'
import useSurveySetting from '../../../../composables/LinkDetail/AdvancedSetting/SurveySetting/useSurveySetting'
import HowToCreateSurveyModal from '../../../Modals/HowToCreateSurveyModal/Index.vue'
import VerticalSteps from '../../../VerticalSteps'
const { showHowToModal, mode, surveys, surveyContents, getSurveys } =
  useSurveySetting()

onMounted(() => {
  getSurveys()
})
</script>

<template>
  <div
    v-if="mode === 'list' && surveys.length === 0"
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
  <div v-else-if="mode === 'list' && surveys.length > 0"></div>
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
        <Button variant="primary" class="ml-2">{{
          $t('survey-save-survey')
        }}</Button>
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
          />
          <div class="mt-4">{{ $t('survey-keyword-input') }}</div>
          <FormInput
            type="text"
            class="mt-2"
            :placeholder="$t('survey-keyword-input-placeholder')"
          />
          <div class="mt-4">
            <span class="text-red-500">*</span>
            {{ $t('survey-end-message-input') }}
          </div>
          <FormInput
            type="text"
            class="mt-2"
            :placeholder="$t('survey-end-message-input-placeholder')"
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
              <Lucide icon="Pen" class="cursor-pointer" />
              <Lucide icon="Trash" class="ml-2 cursor-pointer" />
            </div>
          </div>
          <div class="mt-2 text-sm">
            <button class="flex items-center">
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
</template>
