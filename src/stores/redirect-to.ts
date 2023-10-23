import { defineStore } from 'pinia'

export interface RedirectTo {
  path: string
  version: number
  // status: boolean;
}

export const useRedirectToStore = defineStore('redirect_to', {
  state: (): RedirectTo => ({
    path: '/',
    version: 0
    // status: false,
  }),
  getters: {
    getPath(state) {
      return state.path
    }
  },
  actions: {
    redirect(input: { path: string }) {
      this.path = input.path
      this.version = new Date().getTime()
      // this.status = true;
    }
  }
})
