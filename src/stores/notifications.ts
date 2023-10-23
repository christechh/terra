import { defineStore } from 'pinia'

export interface Notifications {
  type: 'success' | 'error' | 'warning' | 'info'
  successVersion: number
  successTitle: string
  successContent: string
}

export const useNotificationsStore = defineStore('notifications', {
  state: (): Notifications => ({
    type: 'success',
    successVersion: 0,
    successTitle: '',
    successContent: ''
  }),
  getters: {
    getSuccessTitle(state) {
      return state.successTitle
    }
  },
  actions: {
    showSuccess(input: { title: string; content: string }) {
      this.type = 'success'
      this.successTitle = input.title
      this.successContent = input.content
      this.successVersion = new Date().getTime()
    },
    showError(input: { title: string; content: string }) {
      this.type = 'error'
      this.successTitle = input.title
      this.successContent = input.content
      this.successVersion = new Date().getTime()
    },
    showSaveError(message?: string, content?: string) {
      this.showError({ title: message || '儲存失敗', content: content || '' })
    },
    showSaveSuccess(message?: string) {
      this.showSuccess({ title: message || '儲存成功', content: '' })
    },
    showDeleteSuccess() {
      this.showSuccess({ title: '刪除成功', content: '' })
    }
  }
})
