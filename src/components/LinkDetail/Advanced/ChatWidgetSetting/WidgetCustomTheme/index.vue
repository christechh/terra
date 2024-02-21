<script setup lang="ts">
import { computed, ref, PropType, watch } from 'vue'
import { IForm } from '../index.vue'
import UploadButtonImage from './UploadButtonImage.vue'
import FormInput from '@/base-components/Form/FormInput.vue'
import FormLabel from '@/base-components/Form/FormLabel.vue'
import Lucide from '@/base-components/Lucide/Lucide.vue'

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

const collapsed = ref(true)
const currentValue = ref(props.form.buttonColor)
const isCircle = computed(() => props.form.widgetType === 'circle')
const isRectangle = computed(
  () =>
    props.form.widgetType === 'rectangle' ||
    isRectangleLeft.value ||
    isFull.value
)
const isRectangleLeft = computed(
  () => props.form.widgetType === 'rectangle_left'
)
const isFull = computed(() => props.form.widgetType === 'full')
const showText = computed(() => props.form.widgetType !== 'circle')
const colors = computed(() => {
  return [
    {
      color: '#C2512B'
    },
    {
      color: '#007abf'
    },
    {
      color: '#ffa01a'
    },
    {
      color: '#ff85b0'
    },
    {
      color: '#cf93e6'
    },
    {
      color: '#e0eb76'
    }
  ]
})
const previewButtonClass = computed(() => {
  return [
    'flex items-center justify-center bg-primary text-white',
    isCircle.value && 'rounded-full w-[100px] h-[100px]',
    isRectangle.value && 'rounded-[12px] p-4',
    isRectangleLeft.value && 'flex-row-reverse',
    isFull.value && 'w-full mx-3'
  ]
})
const iconClass = computed(() => {
  return [
    isCircle.value && 'h-[60px] w-[60px]',
    isRectangle.value && 'h-[40px] w-[40px] ml-[14px]',
    isRectangleLeft.value && 'mr-[14px] !ml-0'
  ]
})

const selectColor = (color: string) => {
  currentValue.value = color
  props.updateForm('buttonColor', color)
}
const handleButtonText = (value: string) => {
  props.updateForm('buttonText', value)
}
const handleColorPicker = (event: Event) => {
  const target = event.target as HTMLInputElement
  props.updateForm('buttonColor', target.value)
}
const handleTextColorPicker = (event: Event) => {
  const target = event.target as HTMLInputElement
  props.updateForm('buttonTextColor', target.value)
}

console.log('currentValue.value', currentValue.value)

watch(
  () => props.form.buttonColor,
  (value) => {
    currentValue.value = value
  }
)
</script>

<template>
  <div class="flex flex-col gap-6 sm:flex-row">
    <div class="flex-1">
      <div
        class="flex-1 p-5"
        style="background-color: #f6f6f6; border-radius: 10px; padding: 20px"
      >
        <div class="flex items-center justify-between">
          <div
            class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md"
            :style="`background-color: ${color.color}`"
            v-for="color in colors"
            :key="color.color"
            @click="selectColor(color.color)"
          >
            <Lucide
              v-if="
                currentValue.toLocaleLowerCase() ===
                color.color.toLocaleLowerCase()
              "
              icon="Check"
              color="white"
              width="28"
            />
          </div>
          <button @click="collapsed = !collapsed">
            <Lucide
              icon="ChevronDown"
              width="20"
              class="cursor-pointer transition-all"
              :class="{ 'rotate-180': !collapsed }"
            />
          </button>
        </div>
        <div class="theme-colors" v-if="!collapsed">
          <hr class="my-5 px-0" />
          <div class="flex items-center">
            <label class="flex-1 text-black">按鈕底色</label>
            <div>
              <input
                type="color"
                name="float_button_color"
                class="input h-8 w-16 rounded-[6px] px-2 py-1"
                style="background-color: #e4e4e4"
                placeholder=""
                :value="currentValue"
                @change="handleColorPicker"
              />
            </div>
          </div>
          <div class="mt-2 flex items-center" v-if="showText">
            <label class="flex-1 text-black">文字顏色</label>
            <div>
              <input
                type="color"
                name="float_button_color"
                class="input h-8 w-16 rounded-[6px] px-2 py-1"
                style="background-color: #e4e4e4"
                placeholder=""
                :value="form.buttonTextColor"
                @change="handleTextColorPicker"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-if="showText" class="mb-5 mt-5">
        <FormLabel class="mt-1 font-semibold">
          {{ $t('widget-button-display-text') }}
        </FormLabel>
        <FormInput
          :model-value="form.buttonText"
          type="text"
          @update:modelValue="handleButtonText"
        />
      </div>

      <UploadButtonImage :form="form" :update-form="updateForm" />
    </div>

    <div class="flex-1">
      <div class="mb-2 mt-1 text-base font-semibold">
        {{ $t('widget-preview') }}
      </div>
      <div
        class="flex h-full w-full items-center justify-center"
        style="border-radius: 10px; border: solid 1px #d8d8d8"
      >
        <span
          :class="previewButtonClass"
          :style="`background-color: ${form.buttonColor}`"
        >
          <span
            v-if="showText"
            class="text-[24px]"
            :style="{
              color: form.buttonTextColor
            }"
            >{{ form.buttonText }}</span
          >
          <div :class="iconClass">
            <img
              v-if="form.buttonImageUrl"
              :src="form.buttonImageUrl"
              class="h-full w-full"
            />
            <img
              v-else
              class="h-full w-full"
              src="@/assets/images/chat_logo.png"
            />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
