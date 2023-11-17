import axios, { AxiosResponse } from 'axios'
import { ref } from 'vue'
import i18n from '../../../../i18n'

interface AnimAvatar {
  stickerImg: string
  stickerId: number
}

interface Keyword {
  keyword: string
}

const api = axios.create({
  baseURL: 'https://messenger.stipop.io/v1/',
  headers: {
    Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
  }
})

const keywords = ref<Keyword[]>([])
const animatePage = ref(1)
const pageCount = ref(0)
const search = ref<string>('')
const animateHeads = ref<AnimAvatar[]>([])

const getKeyWords = () => {
  api
    .get('search/keyword', {
      params: {
        userId: 'pinchat_v3_user_1589',
        lang: i18n.global.locale.value
      }
    })
    .then((res: AxiosResponse) => {
      const { keywordList } = res.data.body
      keywords.value = keywordList
    })
}
const getAnimate = () => {
  if (keywords.value.length === 0) {
    getKeyWords()
  }
  getHeads()
}

const getHeads = () => {
  if (animateHeads.value.length > 0 && animatePage.value > pageCount.value) {
    return
  }
  api
    .get('search', {
      params: {
        q: search.value,
        userId: 'pinchat_v3_user_1589',
        lang: i18n.global.locale.value,
        pageNumber: animatePage.value
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    })
    .then((res) => {
      const { stickerList, pageMap } = res.data.body
      if (stickerList && pageMap) {
        pageCount.value = pageMap.pageCount
        animateHeads.value = [...animateHeads.value, ...stickerList]
        animatePage.value++
      }
    })
}

export default function useAvatar() {
  return {
    keywords,
    animatePage,
    search,
    animateHeads,
    getAnimate,
    getHeads
  }
}
