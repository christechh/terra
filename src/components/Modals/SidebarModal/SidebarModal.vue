<script setup lang="ts">
import { PropType, ref } from 'vue'
import { Dialog } from '../../../base-components/Headless'
import CloseIcon from '../../Icons/CloseIcon.vue'
import { Colors } from '../../../utils/design-patterns'

defineOptions({
  name: 'SidebarModal'
})
const props = defineProps({
  detail: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Object as PropType<any>,
    default: () => ({})
  }
})

const open = ref(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const setOpen = (value: boolean) => {
  open.value = value
}

const getSpanTitle = (key: string) => {
  switch (key) {
    case 'enterPointName':
      return 'payment-flow-details-chatrooms-name'
    case 'paymentUserName':
      return 'payment-flow-details-payers-nickname'
    case 'amount':
      return 'payment-flow-details-amount'
    case 'requestAt':
      return 'payment-flow-request-time'
    case 'paymentAt':
      return 'payment-flow-payment-time'
    case 'paymentStatus':
      return 'payment-flow-details-status'
    case 'paymentMethod':
      return 'payment-flow-details-payment-method'
    case 'paymentNote':
      return 'payment-flow-details-memo'
    default:
      return
  }
}

defineExpose({
  setOpen
})
</script>

<template>
  <div>
    <!-- BEGIN: Modal Content -->
    <Dialog
      class="payment-dialog"
      :open="open"
      @close="
        () => {
          setOpen(false)
        }
      "
    >
      <Dialog.Panel
        class="payment-dialog-panel"
        style="position: fixed; height: 100vh; right: 0; margin-top: -4rem"
      >
        <Dialog.Title class="payment-dialog-title">
          <h2
            class="mr-auto text-base font-semibold"
            :style="[{ color: Colors.gray }]"
          >
            {{ $t('payment-flow-details') }}
          </h2>
          <div
            class="mt-2.5 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white"
            @click="() => setOpen(false)"
          >
            <CloseIcon />
          </div>
        </Dialog.Title>
        <Dialog.Description
          class="payment-dialog-desc w-full grid-cols-12 gap-4 gap-y-3"
        >
          <ul
            class="w-full space-y-4 text-left text-gray-500 dark:text-gray-400"
          >
            <template v-for="key in Object.keys(props.detail)" :key="key">
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="font-semibold" v-if="key !== 'currency'">{{
                  $t(`${getSpanTitle(key)}`)
                }}</span>
                <span
                  v-if="key === 'paymentStatus'"
                  class="font-bold font-semibold text-black"
                  style="margin-left: auto"
                  >{{ $t(`${props.detail[key]}`) }}</span
                >
                <span
                  v-else-if="key === 'paymentMethod'"
                  class="font-bold font-semibold text-black"
                  style="margin-left: auto"
                  >{{
                    props.detail[key]
                      ? $t(`${props.detail[key]}`)
                      : $t('payment-flow-unpaid')
                  }}</span
                >
                <span
                  v-else-if="key === 'amount'"
                  class="font-bold font-semibold text-black"
                  style="margin-left: auto"
                  >{{
                    `${props.detail['currency']} ${props.detail[key]}`
                  }}</span
                >
                <span
                  v-else-if="key !== 'currency'"
                  class="font-bold font-semibold text-black"
                  style="margin-left: auto"
                  >{{ props.detail[key] }}</span
                >
              </li>
            </template>
          </ul>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
    <!-- END: Modal Content -->
  </div>
</template>
