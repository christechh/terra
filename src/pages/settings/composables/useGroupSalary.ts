import { computed } from 'vue'
import { useSalaryStore } from '../../../stores/salary'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useSalary(companyId: number, salaryGroupId: any) {
  const salaryStore = useSalaryStore()
  const { fetchSalaries } = salaryStore

  const salaries = computed(() => salaryStore.salaries)

  fetchSalaries({ companyId, salaryGroupId, page: 1 })

  return {
    fetchSalaries,
    salaries
  }
}
