<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch } from 'vue'
import { Dialog } from '../../../base-components/Headless'
import Button from '../../../base-components/Button'
import { Colors } from '../../../utils/design-patterns'
import {
  FormLabel,
  FormSwitch,
  FormInput,
  FormSelect
} from '../../../base-components/Form'
import { ISimpleFormButtons, ISimpleFormInputs } from './types'

defineOptions({
  name: 'SimpleFormModal'
})
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  initForm: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  inputs: {
    type: Array as PropType<ISimpleFormInputs[]>,
    required: true
  },
  buttons: {
    type: Array as PropType<ISimpleFormButtons[]>,
    required: true
  }
})
const emits = defineEmits(['submit'])

const open = ref(false)
// const title = ref("");
const form = ref<any>(props.initForm)
const normalizeButtons = computed(() =>
  props.buttons.map((button) => {
    const defaultProps = {
      variant: 'outline-secondary',
      onClick: () => {}
    }
    return {
      ...defaultProps,
      ...button
    }
  })
)

const setOpen = (value: boolean) => {
  open.value = value
}
const handleClick = (onClick: ISimpleFormButtons['onClick'], event: any) => {
  const data = {
    form: form.value,
    event
  }
  onClick(data)
}
const getComponent = (componentName: string) => {
  switch (componentName) {
    case 'input':
      return FormInput
    case 'switch':
      return FormSwitch
    case 'select':
      return FormSelect
    default:
      return FormInput
  }
}
const handleInput = (key: string, value: string) => {
  form.value[key] = value
}
const handleSubmit = () => {
  emits('submit', { form: form.value })
}

onMounted(() => {
  form.value = props.inputs.reduce((acc, input) => {
    acc[input.name] = ''
    return acc
  }, {} as any)
})

watch(
  () => props.initForm,
  () => {
    form.value = props.initForm
  }
)

defineExpose({
  setOpen
})
</script>

<template>
  <div>
    <!-- BEGIN: Modal Content -->
    <Dialog
      :open="open"
      @close="
        () => {
          setOpen(false)
        }
      "
    >
      <Dialog.Panel>
        <form @submit.prevent="handleSubmit">
          <Dialog.Title>
            <h2
              class="mr-auto text-base font-semibold"
              :style="[{ color: Colors.gray }]"
            >
              {{ title }}
            </h2>
          </Dialog.Title>
          <Dialog.Description class="grid grid-cols-12 gap-4 gap-y-3">
            <div
              class="col-span-12 sm:col-span-12"
              :key="`modal-form-wrapper-${index}`"
              v-for="(input, index) in inputs"
            >
              <FormLabel :htmlFor="`modal-form-${index}`">
                {{ input.label }}
              </FormLabel>

              <component
                :id="`modal-form-${index}`"
                :is="getComponent(input?.component || 'input')"
                :type="input?.type || 'text'"
                :required="input?.required || false"
                :disabled="input?.disabled || false"
                :value="form[input.name]"
                :placeholder="input.placeholder"
                @input="
                  (event: any) => handleInput(input.name, event.target.value)
                "
              />
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div class="flex gap-3 justify-end">
              <Button
                v-for="(button, index) in normalizeButtons"
                :key="`simplet-form-modal-button-${index}`"
                :variant="button.variant"
                class="px-6"
                @click="(event) => handleClick(button.onClick, event)"
              >
                {{ button.text }}
              </Button>
            </div>
          </Dialog.Footer>
        </form>
      </Dialog.Panel>
    </Dialog>
    <!-- END: Modal Content -->
  </div>
</template>
