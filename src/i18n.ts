import * as VueI18n from 'vue-i18n'
import enUS from './locales/en-US.json'
import zhTW from './locales/zh-TW.json'
import jaJP from './locales/ja-JP.json'

const messages = {
  'en-US': enUS,
  'zh-TW': zhTW,
  'ja-JP': jaJP
}
const i18n = VueI18n.createI18n({
  legacy: false,
  locale: navigator.language in messages ? navigator.language : 'en-US',
  messages: messages
})

export default i18n
