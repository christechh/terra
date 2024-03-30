import { useSalaryStore } from '../../../stores/salary'

export default function useSalary(companyId: number) {
  const salaryStore = useSalaryStore()
  const {
    fetchSalaries,
    fetchSalaryExtends,
    fetchSalaryGroups,
    salaries,
    salaryGroups,
    salaryExtends
  } = salaryStore

  const confirmDeleteSalary = (salaryId: number) => {
    console.log('id', salaryId)
  }

  fetchSalaries({ companyId, page: 1 })
  fetchSalaryExtends({ companyId, page: 1 })
  fetchSalaryGroups({ companyId, page: 1 })

  return {
    fetchSalaries,
    fetchSalaryExtends,
    fetchSalaryGroups,
    confirmDeleteSalary,
    salaries,
    salaryGroups,
    salaryExtends
  }
}
