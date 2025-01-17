import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import axios from '../../../../axios'
import { useDeleteModalStore } from '../../../../stores/modals/deleteModal'
import { useNotificationsStore } from '../../../../stores/notifications'

type SurveyContent = {
  content: string
  type: string
  options: string[]
  id?: number
}

export default function useSurveySetting() {
  const { t } = useI18n()
  const isChange = ref(false)
  const showHowToModal = ref(false)
  const showEditContentSlidOver = ref(false)
  const isInit = ref(true)
  const route = useRoute()
  const mode = ref('list')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const surveys = ref<any[]>([])
  const selectedSurvey = ref<number>(-1)
  const sruveyTitle = ref('')
  const surveyTriggerWord = ref('')
  const surveyEnd = ref('')
  const surveyContents = ref<SurveyContent[]>([])
  const selectedContentIdx = ref<number>(0)
  const contentOptions = ref<string[]>(['', ''])
  const flowType = ref('choice')
  const saving = ref(false)
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
    surveys.value = res.data.Result.data
  }

  const addSurveyContent = () => {
    surveyContents.value.push({
      content: '',
      type: 'choice',
      options: []
    })
    isChange.value = true
  }

  const editSurveyContent = (idx: number) => {
    selectedContentIdx.value = idx
    flowType.value =
      surveyContents.value[selectedContentIdx.value].type || 'choice'
    contentOptions.value =
      surveyContents.value[selectedContentIdx.value].options.length > 0
        ? surveyContents.value[selectedContentIdx.value].options
        : ['', '']
    showEditContentSlidOver.value = true
  }

  const delSurveyContent = (item: SurveyContent, idx: number) => {
    // eslint-disable-next-line no-debugger
    debugger
    if (item.id) {
      deletContent(item.id)
    }
    surveyContents.value.splice(idx, 1)
  }

  const addOption = () => {
    contentOptions.value.push('')
    isChange.value = true
  }

  const delOption = (idx: number) => {
    contentOptions.value.splice(idx, 1)
  }

  const postSurvey = (saveSurvey: boolean = false) => {
    isChange.value = false
    if (!saveSurvey) {
      if (surveys.value[selectedSurvey.value]?.survey.id) {
        return {
          data: {
            data: {
              data: { id: surveys.value[selectedSurvey.value].survey.id }
            }
          }
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
      ...(mode.value === 'edit' &&
        surveys.value[selectedSurvey.value]?.survey.id && {
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
    return axios
      .post('survey/flow', {
        idx: 0,
        lang: locale.value,
        list_text: '',
        setting: [content],
        sort: 1,
        survey_id: surveyId,
        token,
        type: flowType.value,
        ...(mode.value === 'edit' &&
          surveys.value[selectedSurvey.value].surveyFlow[
            selectedContentIdx.value as keyof typeof surveys.value
          ] && {
            id: surveys.value[selectedSurvey.value].surveyFlow[
              selectedContentIdx.value as keyof typeof surveys.value
            ].id
          })
      })
      .then(() => {
        isChange.value = true
      })
  }

  const saveContent = async (isEditFlow: boolean) => {
    const { data } = await postSurvey()
    const surveyId = data.data.data.id
    if (isEditFlow) {
      await setFlow(surveyId)
    }
    if (!surveys.value.some((s) => s.survey.is_use)) {
      await releaseSurvey(surveyId)
    }
    await getSurveys()
    selectedSurvey.value = surveys.value.findIndex(
      (s) => s.survey.id === surveyId
    )

    const survey = surveys.value[selectedSurvey.value]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    surveyContents.value = survey.surveyFlow.map((s: any) => {
      return {
        content: s.setting[0].text,
        type: s.type,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options: s.setting[0].actions.map((o: any) => o.text),
        id: s.id
      }
    })
    useNotificationsStore().showSaveSuccess()
    showEditContentSlidOver.value = false
    mode.value = 'edit'
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
        options: s.setting[0].actions.map((o: any) => o.text),
        id: s.id
      }
    })
    mode.value = 'edit'
  }

  const deletContent = (id: number) => {
    return axios
      .delete('survey/flow', {
        data: {
          id,
          token
        }
      })
      .then(() => {
        getSurveys()
      })
  }

  const confirmDelete = (item: SurveyContent, idx: number) => {
    if (!item.content) {
      return delSurveyContent(item, idx)
    }
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('qrcode-page-delete-check-title'),
      content: t('survey-confirm-delete-question'),
      cancelButtonText: t('disconnect-line-modal-cancel-btn'),
      confirmButtonText: t('delete-btn'),
      onSubmit: () => delSurveyContent(item, idx)
    })
  }

  const confirmDeleteSurvey = (surveyId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('qrcode-page-delete-check-title'),
      content: t('survey-confirm-delete-survey'),
      cancelButtonText: t('disconnect-line-modal-cancel-btn'),
      confirmButtonText: t('delete-btn'),
      onSubmit: () => deleteSurvey(surveyId)
    })
  }

  const deleteSurvey = (id: number) => {
    return axios
      .delete('survey', {
        data: {
          id,
          token
        }
      })
      .then(() => {
        getSurveys()
      })
  }

  const resetForm = () => {
    sruveyTitle.value = ''
    surveyTriggerWord.value = ''
    surveyEnd.value = ''
    surveyContents.value = []
  }

  const createSurvey = () => {
    resetForm()
    selectedSurvey.value = -1
    mode.value = 'create'
  }

  const copySurvey = (id: number) => {
    return axios
      .post('survey/copy', {
        id,
        token
      })
      .then(() => {
        getSurveys()
      })
  }

  const enableSurvey = async (id: number) => {
    await releaseSurvey(id)
    getSurveys()
  }

  const saveSurvey = async () => {
    saving.value = true
    await postSurvey(true)
    const survey = surveys.value[selectedSurvey.value]
    if (survey.survey.is_use) {
      await releaseSurvey(survey.survey.id)
    }
    useNotificationsStore().showSaveSuccess()
    await getSurveys()
    saving.value = false
    mode.value = 'list'
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
    isInit,
    isChange,
    saving,
    getSurveys,
    addSurveyContent,
    delSurveyContent,
    addOption,
    delOption,
    editSurveyContent,
    saveContent,
    editSurvey,
    deletContent,
    confirmDelete,
    confirmDeleteSurvey,
    createSurvey,
    copySurvey,
    enableSurvey,
    saveSurvey
  }
}
