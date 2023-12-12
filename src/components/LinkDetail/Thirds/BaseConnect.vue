<script setup lang="ts">
import { ref, PropType } from 'vue'

import BoxHead from '@/components/Box/BoxHead.vue'
import CButton from '@/base-components/Button/Button.vue'
import Steps from '@/components/Steps/index.vue'
import { ConnectType, useThird } from './useThird'

defineOptions({
  name: 'BaseConnect'
})
const props = defineProps({
  type: {
    type: String as PropType<ConnectType>,
    required: true
  }
})

const isDiffWithOrigin = ref(false)
const { title, subtitle, steps } = useThird(props.type)

console.log('steps', steps.value)

const saveConfig = () => {
  console.log('saveConfig')
}
</script>

<template>
  <div>
    <BoxHead :title="title">
      <template #subtitle>
        <component :is="subtitle" />
      </template>
      <template #right>
        <div class="flex items-center">
          <CButton
            variant="primary"
            class="w-24 text-white disabled:opacity-50"
            :disabled="!isDiffWithOrigin"
            @click="saveConfig"
          >
            {{ $t('save-btn') }}
          </CButton>
        </div>
      </template>
    </BoxHead>
    <div class="p-5">
      <Steps :items="steps" />
    </div>
  </div>
</template>
