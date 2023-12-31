<script setup lang="ts">
import Button from '../../../../base-components/Button'
import Lucide from '../../../../base-components/Lucide'
import useSurveySetting from '../../../../composables/LinkDetail/AdvancedSetting/SurveySetting/useSurveySetting'
import HowToCreateSurveyModal from '../../../Modals/HowToCreateSurveyModal/Index.vue'

const { showHowToModal } = useSurveySetting()
</script>

<template>
  <div class="mt-2 bg-transparent p-4 text-center">
    <img
      src="@/assets/images/survey-empty.png"
      class="mx-auto mb-4 mt-10"
      alt=""
    />
    <div>{{ $t('survey-empty-desc') }}</div>
    <Button variant="primary" class="mt-5">
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
  <HowToCreateSurveyModal v-model:open="showHowToModal" />
</template>
