<script setup lang="ts">
import { useRoute } from 'vue-router'
import { defineProps, defineEmits, PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Lucide from '../../base-components/Lucide'
import Dialog from '../../base-components/Headless/Dialog'
import Avatar from '../Avatar/index.vue'
import FormInput from '../../base-components/Form/FormInput.vue'
import FormTextarea from '../../base-components/Form/FormTextarea.vue'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import FormTelInput from '../../base-components/Form/FormTelInput.vue'
import FormDatepicker from '../../base-components/Form/FormDatepicker.vue'
import axios from '../../axios'
import { ICustomer } from '../../pages/LinkDetail/CustomerPage.vue'

interface IInput {
  label: string
  component?:
    | string
    | typeof FormInput
    | typeof FormTextarea
    | typeof FormTelInput
    | typeof FormDatepicker
  componentProps: {
    modelValue: string
    name: string
    type?: string
  }
  class: string
}

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  form: {
    type: Object as PropType<ICustomer>,
    default: () => ({})
  }
})
const emit = defineEmits(['close', 'update'])

const { t } = useI18n()
const route = useRoute()

const token = computed(() => {
  return route.query.token as string
})
const inputs = computed<IInput[]>(() => {
  return [
    {
      label: t('client-list-email'),
      componentProps: {
        modelValue: props.form.email,
        name: 'email',
        type: 'email'
      },
      class: ''
    },
    {
      label: t('client-list-phone-number'),
      component: FormTelInput,
      componentProps: {
        modelValue: props.form.phone,
        name: 'phone'
      },
      class: ''
    },
    {
      label: t('client-list-appointment'),
      component: FormDatepicker,
      componentProps: {
        modelValue: props.form.date,
        name: 'date',
        type: 'text'
      },
      class: ''
    },
    {
      label: t('client-list-company-name'),
      componentProps: {
        modelValue: props.form.other,
        name: 'text',
        type: 'text'
      },
      class: ''
    },
    {
      label: t('client-list-remark'),
      component: FormTextarea,
      componentProps: {
        modelValue: props.form.memo,
        name: 'memo'
      },
      class: 'col-span-2'
    }
  ]
})
const panelOptions = computed(() => {
  return {
    enter: 'ease-in-out duration-500',
    enterFrom: 'opacity-0 -mr-16',
    enterTo: 'opacity-100',
    entered: 'opacity-100',
    leave: 'ease-in-out duration-[400ms]',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0 -mr-16'
  }
})

const getComponent = (input: IInput) => {
  return input.component || FormInput
}
const handleClose = () => {
  emit('close')
}
const handleBlur = (key: string, value: string) => {
  if (!value) return

  axios({
    method: 'post',
    url: '/customer/info',
    data: {
      data: value,
      roomId: props.form.chat_room_id,
      token: token.value,
      type: key
    }
  })
    .then(() => {
      emit('update', {
        roomId: props.form.chat_room_id,
        key,
        value
      })
    })
    .catch(() => {
      // TODO: handle error
    })
}
</script>

<template>
  <Dialog :open="open" @close="handleClose">
    <Dialog.Panel
      class="mr-0 h-screen rounded-br-none rounded-tr-none sm:w-[720px]"
      :options="panelOptions"
    >
      <Dialog.Description class="relative">
        <div
          class="absolute right-4 top-4 flex h-[24px] w-[24px] cursor-pointer justify-end transition duration-200 ease-in-out hover:opacity-50"
          @click="handleClose"
        >
          <Lucide icon="X" />
        </div>
        <div>
          <div class="flex items-center">
            <Avatar
              :name="form.nickname"
              :avatar="form.avatar"
              class="h-[60px] w-[60px]"
            />
            <p class="ml-4 text-base font-bold">{{ form.nickname }}</p>
          </div>
          <section class="mb-4 mt-4 grid grid-cols-2 gap-4">
            <div
              v-for="input in inputs"
              :key="input.label"
              :class="input.class"
            >
              <FormLabel>
                {{ input.label }}
              </FormLabel>
              <component
                v-bind="input.componentProps"
                :is="getComponent(input)"
                @blur="
                  handleBlur(input.componentProps.name, $event.target.value)
                "
              />
            </div>
          </section>
        </div>
      </Dialog.Description>
    </Dialog.Panel>
  </Dialog>
</template>
