<script setup lang="ts">
import { ref, computed, PropType, watch } from 'vue'

import Option1 from '@/assets/images/widget_style1.png'
import Option2 from '@/assets/images/widget_style2.png'
import Option3 from '@/assets/images/widget_style2_1.png'
import Option4 from '@/assets/images/widget_style3.png'
import { useI18n } from 'vue-i18n'
import { IForm, WidgetType } from './index.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  form: {
    type: Object as PropType<IForm>,
    required: true
  },
  updateForm: {
    type: Function,
    required: true
  }
})

const { t } = useI18n()

const currentValue = ref(props.form.widgetType)
const options = computed<
  {
    value: WidgetType
    label: string
    img: string
  }[]
>(() => {
  return [
    {
      value: 'circle',
      label: t('widget-type-circle'),
      img: Option1
    },
    {
      value: 'rectangle',
      label: t('widget-type-rectangle-right'),
      img: Option2
    },
    {
      value: 'rectangle_left',
      label: t('widget-type-rectangle-left'),
      img: Option3
    },
    {
      value: 'full',
      label: t('widget-type-full'),
      img: Option4
    }
  ]
})

const updateValue = (value: WidgetType) => {
  currentValue.value = value
  props.updateForm('widgetType', value)
}

watch(
  () => props.form.widgetType,
  (value) => {
    currentValue.value = value
  }
)
</script>

<template>
  <div class="mb-[28px]">
    <div class="mb-2 mt-1 font-semibold">{{ props.title }}</div>
    <div
      class="flex w-full flex-row items-start justify-between"
      style="background-color: #f6f6f6; border-radius: 10px; padding: 20px"
    >
      <div
        class="flex cursor-pointer flex-row"
        v-for="option in options"
        :key="option.value"
        @click="updateValue(option.value)"
      >
        <input
          type="radio"
          :checked="currentValue === option.value"
          class="input mr-3 border text-primary"
          name="widget_type"
          value="circle"
        />
        <div class="type_right">
          <div class="" style="">{{ option.label }}</div>
          <img :src="option.img" width="200" height="135" />
        </div>
      </div>
    </div>
  </div>
</template>
