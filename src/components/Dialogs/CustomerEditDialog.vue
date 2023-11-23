<script setup lang="ts">
import { useRoute } from 'vue-router'
import { defineProps, defineEmits, PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Dialog from '../../base-components/Headless/Dialog'
import Avatar from '../Avatar/index.vue'
import FormInput from '../../base-components/Form/FormInput.vue'
import FormTextarea from '../../base-components/Form/FormTextarea.vue'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import axios from '../../axios'
import { ICustomer } from '../../pages/LinkDetail/CustomerPage.vue'

interface IInput {
  label: string
  component?: string | typeof FormInput | typeof FormTextarea
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
const emit = defineEmits(['close'])

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
      componentProps: {
        modelValue: props.form.phone,
        name: 'phone',
        type: 'text'
      },
      class: ''
    },
    {
      label: t('client-list-appointment'),
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
        name: 'other',
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
  }).catch(() => {
    // TODO: handle error
  })
}
</script>

<template>
  <Dialog :open="open" @close="handleClose">
    <Dialog.Panel class="-mt-16 mr-0 h-screen sm:w-[720px]">
      <Dialog.Description class="relative">
        <div class="absolute right-4 top-4 flex justify-end">
          <img
            class="export-modal-close cursor-pointer"
            src="@/assets/images/modal-close.png"
            @click="handleClose"
          />
        </div>
        <div>
          <Avatar
            :name="form.nickname"
            :avatar="form.avatar"
            class="h-[60px] w-[60px]"
          />
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
