import { defineStore } from 'pinia'
import { set } from 'lodash'
import { isEqual } from 'lodash'
import axios from '../../axios'

interface IStateOriginData {
  id: number
  name: string
  line_messaging_channel_access_token: string
  whatsapp_phone_number_id: string
  whatsapp_access_token: string
  fb_page_id: string
  fb_page_access_token: string
  ig_page_access_token: string
  ig_page_id: string
  slack_webhook_url: string
}
interface IState {
  originData: IStateOriginData
  data: IStateOriginData
  isDifferent: boolean
}
export interface IUpdateEnterpointConfigInput {
  key: keyof IStateOriginData
  value: string
}
export interface ISubmitForm {
  line_messaging_channel_access_token?: string
  whatsapp_phone_number_id?: string
  whatsapp_access_token?: string
  fb_page_id?: string
  fb_page_access_token?: string
  ig_page_access_token?: string
  ig_page_id?: string
  slack_webhook_url?: string
}

const defaultData: IStateOriginData = {
  id: 0,
  name: '',
  line_messaging_channel_access_token: '',
  whatsapp_phone_number_id: '',
  whatsapp_access_token: '',
  fb_page_id: '',
  fb_page_access_token: '',
  ig_page_access_token: '',
  ig_page_id: '',
  slack_webhook_url: ''
}
export const useEnterpointsConfigStore = defineStore('enterpointsConfig', {
  state: (): IState => ({
    originData: defaultData,
    data: defaultData,
    isDifferent: false
  }),
  actions: {
    async fetchConfig(token: string) {
      try {
        const response = await axios.get(`/chat/enterpoints/config/${token}`)
        const configData = response.data.data.data
        const transformData = {
          ...configData,
          line_messaging_channel_access_token:
            configData.line_messaging_channel_access_token || '',
          whatsapp_phone_number_id: configData.whatsapp_phone_number_id || '',
          whatsapp_access_token: configData.whatsapp_access_token || '',
          fb_page_id: configData.fb_page_id || '',
          fb_page_access_token: configData.fb_page_access_token || '',
          ig_page_access_token: configData.ig_page_access_token || '',
          ig_page_id: configData.ig_page_id || '',
          slack_webhook_url: configData.slack_webhook_url || ''
        }

        this.data = { ...transformData }
        this.originData = { ...transformData }
        this.isDifferent = false
      } catch (error) {
        console.log('error', error)
      }
    },
    updateConfig(input: IUpdateEnterpointConfigInput) {
      set(this.data, input.key, input.value)
      const newData = { ...this.data }
      set(newData, input.key, input.value)
      this.isDifferent = !isEqual(newData, this.originData)
    },
    cleanDifferent() {
      this.isDifferent = false
      this.data = { ...this.originData }
    }
  }
})
