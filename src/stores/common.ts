import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      showSaved: false
    }
  },
  getters: {},
  actions: {
    successfullySaved() {
      this.showSaved = true
      setTimeout(() => {
        this.showSaved = false
      }, 2000)
    }
  }
})
