import { ref } from 'vue'
import axios from '../../../axios'

export default function useActiveLog() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeLogs: any = ref([])
  const allLogs = ref([])
  const showActiveLogPopup = ref(false)

  const getLogs = async (page: number, pageSize: number) => {
    return axios.get('/user/login', { params: { page, pageSize } })
  }

  const getUserActiveLog = () => {
    getLogs(0, 5).then((res) => {
      const { data } = res.data.data
      activeLogs.value = data
    })
  }

  const viewMore = async () => {
    const res = await getLogs(0, 999)
    const { data } = res.data.data
    allLogs.value = data
    showActiveLogPopup.value = true
  }

  return {
    showActiveLogPopup,
    activeLogs,
    allLogs,
    getUserActiveLog,
    viewMore
  }
}
