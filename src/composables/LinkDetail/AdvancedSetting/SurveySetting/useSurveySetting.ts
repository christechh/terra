import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from '../../../../axios'

export default function useSurveySetting() {
  const showHowToModal = ref(false)
  const route = useRoute()
  const mode = ref('list')
  const surveys = ref([])
  const surveyContents = ref([])

  const getSurveys = async () => {
    const token = route.query.token
    const res = await axios.get(`survey?token=${token}`)
    surveys.value = res.data.data.data
  }

  return {
    showHowToModal,
    mode,
    surveys,
    surveyContents,
    getSurveys
  }
}
