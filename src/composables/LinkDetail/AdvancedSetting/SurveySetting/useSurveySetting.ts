import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import axios from '../../../../axios'

type SurveyContent = {
  content: string
  type: string
  options: string[]
}

export default function useSurveySetting() {
  const showHowToModal = ref(false)
  const showEditContentSlidOver = ref(false)
  const route = useRoute()
  const mode = ref('list')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const surveys = ref<any[]>([])
  const selectedSurvey = ref<number>(0)
  const sruveyTitle = ref('')
  const surveyTriggerWord = ref('')
  const surveyEnd = ref('')
  const surveyContents = ref<SurveyContent[]>([])
  const selectedContentIdx = ref<number>(0)
  const contentOptions = ref<string[]>(['', ''])
  const flowType = ref('choice')
  const { locale } = useI18n()
  const token = route.query.token
  const langs = [
    'cn',
    'de',
    'en',
    'es',
    'fr',
    'ja',
    'kr',
    'pt-br',
    'ro',
    'th',
    'vi',
    'zh'
  ]

  const getSurveys = async () => {
    const res = await axios.get(`survey?token=${token}`)
    surveys.value = res.data.data.data
  }

  const addSurveyContent = () => {
    surveyContents.value.push({
      content: '',
      type: 'text',
      options: []
    })
  }

  const editSurveyContent = (idx: number) => {
    selectedContentIdx.value = idx
    flowType.value = surveyContents.value[selectedContentIdx.value].type
    contentOptions.value =
      surveyContents.value[selectedContentIdx.value].options
    showEditContentSlidOver.value = true
  }

  const delSurveyContent = (idx: number) => {
    surveyContents.value.splice(idx, 1)
  }

  const addOption = () => {
    contentOptions.value.push('')
  }

  const delOption = (idx: number) => {
    contentOptions.value.splice(idx, 1)
  }

  const postSurvey = (isEditFlow: boolean) => {
    if (mode.value === 'edit' && isEditFlow) {
      return {
        data: {
          data: { data: { id: surveys.value[selectedSurvey.value].survey.id } }
        }
      }
    }
    return axios.post('survey', {
      end_message: surveyEnd.value,
      end_message_cn: surveyEnd.value,
      end_message_de: surveyEnd.value,
      end_message_en: surveyEnd.value,
      end_message_es: surveyEnd.value,
      end_message_fr: surveyEnd.value,
      end_message_ja: surveyEnd.value,
      end_message_kr: surveyEnd.value,
      'end_message_pt-br': surveyEnd.value,
      end_message_ro: surveyEnd.value,
      end_message_th: surveyEnd.value,
      end_message_vi: surveyEnd.value,
      end_message_zh: surveyEnd.value,
      is_open: false,
      keyword: surveyTriggerWord.value,
      name: sruveyTitle.value,
      token: token,
      ...(mode.value === 'edit' && {
        id: surveys.value[selectedSurvey.value].survey.id
      })
    })
  }

  const releaseSurvey = (id: number) => {
    return axios.post('survey/release', {
      id,
      token
    })
  }

  const setFlow = (surveyId: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any = {
      text: surveyContents.value[selectedContentIdx.value].content
    }
    langs.forEach((l) => {
      content[l as keyof typeof content] = {
        text: surveyContents.value[selectedContentIdx.value].content
      }
    })
    content.actions =
      flowType.value === 'choice'
        ? contentOptions.value.map((o) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const res: any = { text: o, label: o }
            langs.forEach((l) => {
              res[l as keyof typeof res] = { text: o, label: o }
            })
            return res
          })
        : []
    return axios.post('survey/flow', {
      idx: 0,
      lang: locale.value,
      list_text: '',
      setting: [content],
      sort: 1,
      survey_id: surveyId,
      token,
      type: flowType.value,
      ...(mode.value === 'edit' && {
        id: surveys.value[selectedSurvey.value].surveyFlow[
          selectedContentIdx.value as keyof typeof surveys.value
        ].id
      })
    })
  }

  const saveContent = async (isEditFlow: boolean) => {
    const { data } = await postSurvey(isEditFlow)
    const surveyId = data.data.data.id
    if (isEditFlow) {
      await setFlow(surveyId)
      return (showEditContentSlidOver.value = false)
    }
    await releaseSurvey(surveyId)
    return getSurveys(), (mode.value = 'list')
  }

  const editSurvey = (idx: number) => {
    selectedSurvey.value = idx
    const survey = surveys.value[idx]
    sruveyTitle.value = survey.survey.name
    surveyTriggerWord.value = survey.survey.keyword
    surveyEnd.value = survey.survey.end_message
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    surveyContents.value = survey.surveyFlow.map((s: any) => {
      return {
        content: s.setting[0].text,
        type: s.type,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options: s.setting[0].actions.map((o: any) => o.text)
      }
    })
    mode.value = 'edit'
  }

  return {
    showHowToModal,
    showEditContentSlidOver,
    mode,
    surveys,
    selectedSurvey,
    sruveyTitle,
    surveyTriggerWord,
    surveyEnd,
    surveyContents,
    contentOptions,
    flowType,
    selectedContentIdx,
    getSurveys,
    addSurveyContent,
    delSurveyContent,
    addOption,
    delOption,
    editSurveyContent,
    saveContent,
    editSurvey
  }
}
