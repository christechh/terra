<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../../../axios'
import Button from '../../../base-components/Button'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import { useSuccessModalStore } from '../../../stores/modals/successModal'
// import { useNotificationsStore } from '../../../stores/notifications'
import { useCompanyStore } from '../../../stores/company'
const successModalStore = useSuccessModalStore()
const router = useRouter()

const status = computed(() => successModalStore.status)
const title = computed(() => successModalStore.title)
const content = computed(() => successModalStore.content)
const cancelButtonText = computed(() => successModalStore.cancelButtonText)
const confirmButtonText = computed(() => successModalStore.confirmButtonText)
const link = computed(() => successModalStore.link)
const icon = computed(() => successModalStore.icon)
const iconColor = computed(() => successModalStore.iconColor)
// const submitVariant = computed(() => {
//   if (iconColor.value === 'text-primary') {
//     return 'primary'
//   }

//   return 'primary'
// })

const setOpen = (value: boolean) => {
  successModalStore.setOpen({ status: value })
}

const deleteExec = async () => {
  const { deleteType, deleteData, onSubmit } = successModalStore
  switch (deleteType) {
    case 'account':
      await axios.delete('/user')
      break
    case 'company':
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      useCompanyStore().deleteCompany((deleteData as any).id)
      break
    case 'chatLink': {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { token, id } = deleteData as any
      await axios.post('/dashboard/enterpoint', { id, token, is_valid: false })
      router.push('/dashboard')
      break
    }
    case 'callback': {
      onSubmit && onSubmit()
      setOpen(false)
      return // Break here
    }
    case 'course':
      break
  }
  // useNotificationsStore().showDeleteSuccess()
  setOpen(false)
}
</script>

<template>
  <div>
    <Dialog
      :open="status"
      @close="
        () => {
          setOpen(false)
        }
      "
    >
      <Dialog.Panel>
        <div class="p-5 text-center">
          <Lucide
            :icon="icon || 'XCircle'"
            class="mx-auto mt-3 h-16 w-16"
            :class="iconColor || 'text-danger'"
          />
          <div class="mt-5 text-3xl">{{ title }}</div>
          <div class="mt-2 text-slate-500">
            {{ content }}
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            type="button"
            variant="outline-secondary"
            @click="
              () => {
                setOpen(false)
              }
            "
            class="mr-1 w-24 border-slate-500 focus:ring-transparent dark:border-slate-300"
          >
            {{ cancelButtonText || $t('cancel-btn') }}
          </Button>
          <router-link :to="link">
            <Button
              type="button"
              variant="primary"
              class="w-30 ml-5"
              @click="deleteExec"
            >
              {{ confirmButtonText || $t('delete-btn') }}
            </Button>
          </router-link>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
</template>
