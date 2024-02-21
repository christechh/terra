<script setup lang="ts">
import { computed } from 'vue'
import Button from '../../../base-components/Button'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import { useWaningModalStore } from '../../../stores/modals/warrningModal'

const showModal = computed(() => useWaningModalStore().status)
const modalText = computed(() => useWaningModalStore().text)
const content = computed(() => useWaningModalStore().content)
const type = computed(() => useWaningModalStore().type)
const showCancel = computed(() => useWaningModalStore().showCancel)
const icon = computed(() => {
  if (type.value === 'success') {
    return 'CheckCircle'
  }

  if (type.value === 'warning' || type.value === 'info') {
    return 'AlertCircle'
  }

  if (type.value === 'danger') {
    return 'XCircle'
  }

  return 'XCircle'
})
const iconColor = computed(() => {
  if (type.value === 'success') {
    return 'text-success'
  }

  if (type.value === 'warning') {
    return 'text-warning'
  }

  if (type.value === 'danger') {
    return 'text-danger'
  }

  if (type.value === 'info') {
    return 'text-[#C2512B]'
  }

  return 'text-warning'
})

const setWarningModalPreview = (value: boolean) => {
  useWaningModalStore().displayModal({ status: value })
}

const clickHandler = () => {
  setWarningModalPreview(false)
  const callback = useWaningModalStore().callback
  if (callback) {
    callback()
  }
}
</script>

<template>
  <div>
    <!-- BEGIN: Modal Content -->
    <Dialog
      :open="showModal"
      @close="
        () => {
          setWarningModalPreview(false)
        }
      "
    >
      <Dialog.Panel>
        <div class="p-5 text-center">
          <Lucide
            :icon="icon"
            class="mx-auto mt-3 h-16 w-16"
            :class="iconColor"
          />
          <div class="mt-5 text-3xl"></div>
          <div class="mt-2 text-3xl font-bold text-dark">
            {{ modalText }}
          </div>
          <div class="mt-2 text-sm text-slate-500" v-if="content">
            {{ content }}
          </div>
        </div>
        <div
          class="flex items-center justify-center gap-3 px-5 pb-8 text-center"
        >
          <Button
            v-if="showCancel"
            class="w-24 border"
            variant="outline-secondary"
            @click="() => setWarningModalPreview(false)"
            >{{ $t('cancel-btn') }}</Button
          >
          <Button
            type="button"
            variant="primary"
            @click="() => clickHandler()"
            class="w-24"
          >
            Ok
          </Button>
        </div>
        <!-- <div
          class="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400"
        >
          <a href="" class="text-primary"> </a>
        </div> -->
      </Dialog.Panel>
    </Dialog>
    <!-- END: Modal Content -->
  </div>
</template>
