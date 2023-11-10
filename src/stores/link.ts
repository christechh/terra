import { defineStore } from 'pinia'
import axios from '../axios'

export const useLinkStore = defineStore('link', {
  state: () => ({
    links: []
  }),
  actions: {
    async fetchLinks() {
      try {
        const {
          data: {
            data: { data }
          }
        } = await axios.get('/chat/enterpoints/list?sort=createdAt&order=desc')
        this.links = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
