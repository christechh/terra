<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../../../axios'
import Button from '../../../base-components/Button'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useNotificationsStore } from '../../../stores/notifications'
import { useCompanyStore } from '../../../stores/company'
import { useUsersStore } from '../../../stores/users'
import { useSalaryStore } from '../../../stores/salary'
import { useWorkRecordStore } from '../../../stores/work-record'
import { useUserLeaveStore } from '../../../stores/user-leave'

const deleteModalStore = useDeleteModalStore()
const router = useRouter()

const status = computed(() => deleteModalStore.status)
const title = computed(() => deleteModalStore.title)
const content = computed(() => deleteModalStore.content)
const cancelButtonText = computed(() => deleteModalStore.cancelButtonText)
const confirmButtonText = computed(() => deleteModalStore.confirmButtonText)
const icon = computed(() => deleteModalStore.icon)
const iconColor = computed(() => deleteModalStore.iconColor)
const submitVariant = computed(() => {
  if (iconColor.value === 'text-primary') {
    return 'primary'
  }

  return 'danger'
})

const setOpen = (value: boolean) => {
  deleteModalStore.setOpen({ status: value })
}

const deleteExec = async () => {
  const { deleteType, deleteData, onSubmit } = deleteModalStore
  switch (deleteType) {
    case 'account':
      await axios.delete('/user')
      break
    case 'company':
      useCompanyStore().deleteCompany((deleteData as any).id)
      break
    case 'user':
      useUsersStore().deleteUser((deleteData as any).id)
      break
    case 'workRecord':
      useWorkRecordStore().deleteWorkRecord(
        (deleteData as any).companyId,
        (deleteData as any).id
      )
      break
    case 'salaryGroup':
      useSalaryStore().deleteSalaryGroup(
        (deleteData as any).companyId,
        (deleteData as any).id
      )
      break
    case 'userLeave':
      useUserLeaveStore().deleteUserLeave(
        (deleteData as any).companyId,
        (deleteData as any).id
      )
      break
    case 'chatLink': {
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
  useNotificationsStore().showDeleteSuccess()
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
          <Button
            type="button"
            :variant="submitVariant"
            class="ml-5 w-24"
            @click="deleteExec"
          >
            {{ confirmButtonText || $t('delete-btn') }}
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
</template>
