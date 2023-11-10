<script setup lang="ts">
import { computed } from 'vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import Button from '../../../base-components/Button'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useNotificationsStore } from '../../../stores/notifications'
import axios from '../../../axios'
const deleteModalStore = useDeleteModalStore()

const status = computed(() => deleteModalStore.status)
const title = computed(() => deleteModalStore.title)
const content = computed(() => deleteModalStore.content)

const setOpen = (value: boolean) => {
  deleteModalStore.setOpen({ status: value })
}

const deleteExec = async () => {
  const { deleteType } = deleteModalStore
  switch (deleteType) {
    case 'account':
      await axios.delete('/user')
      useNotificationsStore().showDeleteSuccess()
      break
    case 'course':
      break
  }
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
          <Lucide icon="XCircle" class="mx-auto mt-3 h-16 w-16 text-danger" />
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
            class="mr-1 w-24"
          >
            取消
          </Button>
          <Button
            type="button"
            variant="danger"
            class="ml-5 w-24"
            @click="deleteExec"
          >
            刪除
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
</template>
