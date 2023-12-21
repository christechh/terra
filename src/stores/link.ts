import { defineStore } from 'pinia'
import axios from '../axios'

export const useLinkStore = defineStore('link', {
  state: () => ({
    links: [],
    page: 1,
    pageSize: 10,
    total: 0
  }),
  actions: {
    async fetchLinks(page: number) {
      this.page = page
      try {
        const {
          data: { data }
        } = await axios.get('/chat/enterpoints/list', {
          params: {
            sort: 'createdAt',
            order: 'desc',
            page: page,
            pageSize: this.pageSize
          }
        })
        this.links = data.data
        this.total = data.counts
      } catch (error) {
        console.log(error)
      }
    }
  }
})
