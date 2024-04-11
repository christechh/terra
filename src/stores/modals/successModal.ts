import { defineStore } from 'pinia'
import { Icon } from '../../base-components/Lucide/Lucide.vue'

export interface SuccessModal {
  deleteType: string
  deleteData: object
  title: string
  content: string
  status: boolean
  icon: Icon
  iconColor: string
  cancelButtonText: string
  confirmButtonText: string
  link: string
  onSubmit?: () => void
}

export const useSuccessModalStore = defineStore('success_modal', {
  state: (): SuccessModal => ({
    deleteType: '',
    deleteData: {},
    title: '',
    content: '',
    status: false,
    icon: 'CheckCircle',
    iconColor: 'text-success',
    cancelButtonText: '',
    confirmButtonText: '',
    link: '',
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
      deleteType?: string
      title: string
      content: string
      deleteData?: T
      icon?: Icon
      iconColor?: string
      onSubmit?: () => void
      cancelButtonText?: string
      confirmButtonText?: string
      link?: string
    }) {
      console.log(input)
      this.deleteType = input.deleteType || ''
      this.deleteData = input.deleteData || {}
      this.title = input.title
      this.content = input.content
      this.status = true
      this.icon = input.icon || 'CheckCircle'
      this.iconColor = input.iconColor || 'text-success'
      this.onSubmit = input.onSubmit
      this.cancelButtonText = input.cancelButtonText || ''
      this.confirmButtonText = input.confirmButtonText || ''
      this.link = input.link || ''
    }
  }
})
