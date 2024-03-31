/* eslint-disable */
import { ref } from 'vue'
import { useSalaryStore } from '../../../stores/salary'
// import { useNotificationsStore } from '../../../stores/notifications'
import mockData from './mockData.json'

export default function useCalculateSalaries() {
  const { fetchCalculateSalaries } = useSalaryStore()
  const loading = ref(false);

  const fetchData = async (payload: any, callback: (result: any) => void) => {
    console.log('payload', payload)
    const response = await fetchCalculateSalaries(payload)
    // const response = {
    //   data: mockData
    // }
    console.log('fetchCalculateSalaries response', response)
    callback(response.data)
  }

  return {
    loading,
    fetchData
  }
}
