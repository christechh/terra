<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { Slideover } from '../../../base-components/Headless'
import Button from '../../../base-components/Button'
import Lucide from '../../../base-components/Lucide'
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
  }
}

onMounted(() => {
  Object.keys(props.detail).filter((key) => getSpanTitle(key))
})

defineExpose({
  setOpen
})
</script>

<template>
  <div>
    <!-- BEGIN: Modal Content -->
    <Slideover
      class="payment-dialog"
      :open="open"
      @close="
        () => {
          setOpen(false)
        }
      "
    >
      <Slideover.Panel
        class="payment-dialog-panel rounded-none"
        style="position: fixed; height: 100vh; right: 0"
      >
        <Slideover.Title class="payment-dialog-title">
          <h2
            class="mr-auto text-base font-semibold"
            :style="[{ color: Colors.gray }]"
          >
            {{ $t('payment-flow-details') }}
          </h2>
          <Lucide
            icon="X"
            class="absolute right-2.5 top-2.5 cursor-pointer text-[#939393]"
            @click="() => setOpen(false)"
          />
        </Slideover.Title>
        <Slideover.Description
          class="payment-dialog-desc w-full grid-cols-12 gap-4 gap-y-3"
        >
          <ul
            class="w-full space-y-4 text-left text-gray-500 dark:text-gray-400"
          >
            <template
              v-for="key in Object.keys(props.detail).filter((key) =>
                getSpanTitle(key)
              )"
              :key="key"
            >
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span v-if="key !== 'currency'">{{
                  $t(`${getSpanTitle(key)}`)
                }}</span>
                <span
                  v-if="key === 'paymentStatus'"
                  class="text-black"
                  style="margin-left: auto"
                  >{{ $t(`${props.detail[key]}`) }}</span
                >
                <span
                  v-else-if="key === 'paymentMethod'"
                  class="text-black"
                  style="margin-left: auto"
                  >{{
                    props.detail[key]
                      ? $t(`${props.detail[key]}`)
                      : $t('payment-flow-unpaid')
                  }}</span
                >
                <span
                  v-else-if="key === 'amount'"
                  class="text-black"
                  style="margin-left: auto"
                  >{{
                    `${props.detail['currency']} ${props.detail[key]}`
                  }}</span
                >
                <span
                  v-else-if="key !== 'currency'"
                  class="text-black"
                  style="margin-left: auto"
                  >{{ props.detail[key] }}</span
                >
              </li>
            </template>
          </ul>
          <div class="mt-4 flex">
            <Button class="m-auto w-4/12" variant="primary">{{
              $t('payment-flow-details-go-to-chat-room')
            }}</Button>
          </div>
        </Slideover.Description>
      </Slideover.Panel>
    </Slideover>
    <!-- END: Modal Content -->
  </div>
</template>
