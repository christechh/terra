import { defineStore } from 'pinia'

export interface WarnningModal {
  text: string | null
  type: string | null
  content?: string | null
  showCancel: boolean
  status: boolean
  callback?: () => void
}

export const useWaningModalStore = defineStore('warnning_modal', {
  state: (): WarnningModal => ({
    text: null,
    type: 'warning',
    content: null,
    status: false,
    showCancel: false,
    callback: () => {}
  }),
  getters: {
    getStatus(state) {
      return state.status
    }
  },
  actions: {
    displayModal(input: { status: boolean }) {
      this.status = input.status
    },
    showModal(input: {
      text: string
      content?: string
      type?: string
      showCancel?: boolean
      callback?: () => void
    }) {
      this.text = input.text
      this.type = input?.type || 'warning'
      this.content = input.content
      this.status = true
      this.showCancel = input.showCancel || false
      this.callback = input.callback
    }
  }
})
