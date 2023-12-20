import { defineStore } from 'pinia'
import { Icon } from '../../base-components/Lucide/Lucide.vue'

export interface DeleteModal {
  deleteType: string
  deleteData: object
  title: string
  content: string
  status: boolean
  icon: Icon
  iconColor: string
  cancelButtonText: string
  confirmButtonText: string
  onSubmit?: () => void
}

export const useDeleteModalStore = defineStore('delete_modal', {
  state: (): DeleteModal => ({
    deleteType: '',
    deleteData: {},
    title: '',
    content: '',
    status: false,
    icon: 'XCircle',
    iconColor: 'text-danger',
    cancelButtonText: '',
    confirmButtonText: '',
    onSubmit: () => {}
  }),
  getters: {
    getStatus(state) {
      return state.status
    }
  },
  actions: {
    setOpen(input: { status: boolean }) {
      this.status = input.status
    },
    showModal<T extends object>(input: {
      deleteType: string
      title: string
      content: string
      deleteData?: T
      icon?: Icon
      iconColor?: string
      onSubmit?: () => void
      cancelButtonText?: string
      confirmButtonText?: string
    }) {
      this.deleteType = input.deleteType
      this.deleteData = input.deleteData || {}
      this.title = input.title
      this.content = input.content
      this.status = true
      this.icon = input.icon || 'XCircle'
      this.iconColor = input.iconColor || 'text-danger'
      this.onSubmit = input.onSubmit
      this.cancelButtonText = input.cancelButtonText || ''
      this.confirmButtonText = input.confirmButtonText || ''
    }
  }
})
