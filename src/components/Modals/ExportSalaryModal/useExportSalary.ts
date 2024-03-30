import axios from '../../../axios'

interface ExportSalaryPayload {
  companyId: number
  salaryGroupId: number
}

export default function useExportSalary() {
  const exportSalary = (payload: ExportSalaryPayload) => {
    axios
      .post('/salary/export', {
        type: 'salary',
        companyId: payload.companyId,
        salaryGroupId: payload.salaryGroupId
      })
      .then((res) => {
        console.log('export response', res)
      })
  }

  return {
    exportSalary
  }
}
