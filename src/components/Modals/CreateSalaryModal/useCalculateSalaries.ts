/* eslint-disable @typescript-eslint/no-explicit-any */
// import { computed, onMounted, reactive, toRefs } from 'vue'
import { useSalaryStore } from '../../../stores/salary'
// import axios from '../../../axios'
// import { useNotificationsStore } from '../../../stores/notifications'
import mockData from './mockData.json'

export default function useCalculateSalaries() {
  const { fetchCalculateSalaries } = useSalaryStore()

  const calculateSalaries = mockData

  return {
    fetchCalculateSalaries,
    calculateSalaries
  }
}
