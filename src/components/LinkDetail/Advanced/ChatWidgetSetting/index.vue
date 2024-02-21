<script setup lang="ts">
import { isEqual } from 'lodash'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import BoxHead from '@/components/Box/BoxHead.vue'
import axios from '../../../../axios'
import CButton from '../../../../base-components/Button'
import Steps from '../../../../components/Steps/index.vue'
import { useLinkPage } from '../../../../composables/useLinkPage'
import { useNotificationsStore } from '../../../../stores/notifications'
import WidgetCopyScript from './WidgetCopyScript.vue'
import WidgetCustomTheme from './WidgetCustomTheme/index.vue'
import WidgetSelectType from './WidgetSelectType.vue'

export type WidgetType = 'circle' | 'rectangle' | 'rectangle_left' | 'full'
export interface IForm {
  widgetType: WidgetType
  buttonColor: string
  buttonImageUrl?: string
  buttonText: string
  buttonTextColor?: string
}
interface IConfig {
  id: number
  chatToken: string
  name: string
  widget_type: WidgetType
  float_button_color: string
  widget_logo?: string
  float_button_text: string
  float_button_text_color?: string
}
export type IFormKey = keyof IForm

const { t } = useI18n()
const { token } = useLinkPage()
const notificationsStore = useNotificationsStore()

const originForm = ref<IForm>()
const form = ref<IForm>({
  widgetType: 'circle',
  buttonColor: '#C2512B',
  buttonText: t('contact_us_text'),
  buttonTextColor: '#ffffff'
})
const isLoading = ref(true)
const config = ref<IConfig>()
const steps = computed(() => {
  return [
    {
      title: t('widget-select-type'),
      component: WidgetSelectType,
      componentProps: {
        form: form.value,
        updateForm
      }
    },
    {
      title: t('widget-custom-theme'),
      component: WidgetCustomTheme,
      componentProps: {
        form: form.value,
        updateForm
      }
    },
    {
      title: t('widget-copy-script'),
      component: WidgetCopyScript
    }
  ]
})
const isDiffWithOrigin = computed(() => {
  return !isEqual(originForm.value, form.value)
})

const updateForm = (key: IFormKey, value: string | WidgetType) => {
  if (key === 'widgetType') {
    form.value.widgetType = value as WidgetType
    return
  }

  form.value[key] = value
}
const fetchConfig = async () => {
  try {
    isLoading.value = true
    const response = await axios.get(`/chat/enterpoints/config/${token.value}`)
    config.value = response?.data?.data?.data

    form.value = {
      widgetType: config.value?.widget_type || 'circle',
      buttonColor: config.value?.float_button_color || '#C2512B',
      buttonImageUrl: config.value?.widget_logo,
      buttonTextColor: config.value?.float_button_text_color || '#ffffff',
      buttonText: config.value?.float_button_text || t('contact_us_text')
    }
    originForm.value = { ...form.value }
  } catch (error) {
    console.log('error', error)
  } finally {
    isLoading.value = false
  }
}
const submitConfig = async () => {
  try {
    await axios.post('/dashboard/enterpoint', {
      id: config.value?.id,
      token: token.value,
      name: config.value?.name,
      widget_type: form.value.widgetType,
      float_button_color: form.value.buttonColor,
      float_button_text_color: form.value.buttonTextColor,
      float_button_text: form.value.buttonText,
      widget_logo: form.value.buttonImageUrl,
      is_valid: true
    })
    notificationsStore.showSuccess({
      title: t('api-message')
    })
    originForm.value = { ...form.value }
  } catch (error) {
    console.log('error', error)
  }
}

onMounted(() => {
  fetchConfig()
})
</script>

<template>
  <div v-if="!isLoading" class="intro-y">
    <BoxHead :title="$t('edit-float-button')">
      <template #right>
        <CButton
          variant="primary"
          class="text-white disabled:opacity-50"
          :disabled="!isDiffWithOrigin"
          @click="submitConfig"
          >{{ $t('save-btn') }}</CButton
        >
      </template>
    </BoxHead>
    <div class="p-5">
      <Steps :items="steps" />
    </div>
  </div>
</template>
