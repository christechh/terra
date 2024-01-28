<script setup lang="ts">
import { onMounted } from 'vue'

import usePinBot from '../../../../composables/LinkDetail/AdvancedSetting/PinBot/usePinBot'
/*
import { useI18n } from 'vue-i18n'
import Button from '../../../../base-components/Button'
import {
  FormInput,
  FormSelect,
  FormTextarea
} from '../../../../base-components/Form'
import { Slideover } from '../../../../base-components/Headless'
import Lucide from '../../../../base-components/Lucide'

import { useWaningModalStore } from '../../../../stores/modals/warrningModal'
import HowToCreateSurveyModal from '../../../Modals/HowToCreateSurveyModal/Index.vue'
import VerticalSteps from '../../../VerticalSteps'
*/
const { isInit } = usePinBot()
// const { t } = useI18n()

onMounted(() => {
  isInit.value = true
})
</script>

<template>
  <div>index</div>
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
