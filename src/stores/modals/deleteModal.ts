import { defineStore } from 'pinia'

export interface DeleteModal {
  deleteType: string
  deleteData: object
  title: string
  content: string
  status: boolean
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
      onSubmit?: () => void
      cancelButtonText?: string
      confirmButtonText?: string
    }) {
      this.deleteType = input.deleteType
      this.deleteData = input.deleteData || {}
      this.title = input.title
      this.content = input.content
      this.status = true
      this.onSubmit = input.onSubmit
      this.cancelButtonText = input.cancelButtonText || ''
      this.confirmButtonText = input.confirmButtonText || ''
    }
  }
})
