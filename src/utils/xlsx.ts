import * as XLSX from 'xlsx'

export const FILE_INPUT_DOMS = {
  employee: 'EMPLOYEE',
  family: 'FAMILY',
  salary: 'SALARY_ITEM'
}

export const familyExample = [
  ['員工編號*', '姓名*', '關係*', '身分證字號', '性別', '國籍', '生日'],
  ['002', '王大偉', '弟弟', 'B777777777', '男生', '台灣', '1998-01-08']
]

export const salaryExample = [
  ['員工編號*', '薪資名目*', '金額*'],
  ['005', '伙食費', '2400'],
  ['009', '基本薪資', '7000']
]

export const employeeExample = [
  [
    '姓名*',
    '員工編號*',
    '性別',
    '國籍',
    '生日',
    '身分證字號',
    '在職狀態*',
    '到職日*',
    '離職日',
    'Email',
    '地址',
    '電話',
    '銀行代碼',
    '銀行帳號',
    '身份別*',
    '計薪方式*',
    '勞工保險',
    '健保',
    '退休金',
    '自提%數',
    '說明'
  ],
  [
    '王小五',
    '013',
    '女',
    '台灣',
    '2024-09-01',
    'A19773242',
    '留職',
    '2024-09-01',
    '',
    '',
    '這是地址',
    '09288887442',
    '135',
    '321435313',
    '員工*',
    '月薪',
    '40000',
    '2000',
    '700',
    '是',
    '5'
  ]
]

export const getImportExample = (domName: string) => {
  const filename =
    domName === FILE_INPUT_DOMS.employee
      ? 'employ.xlsx'
      : domName === FILE_INPUT_DOMS.family
        ? 'family.xlsx'
        : 'salary.xlsx'
  const data =
    domName === FILE_INPUT_DOMS.employee
      ? employeeExample
      : domName === FILE_INPUT_DOMS.family
        ? familyExample
        : salaryExample

  const workbook = XLSX.utils.book_new()

  const worksheet = XLSX.utils.aoa_to_sheet(data)

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  XLSX.writeFileXLSX(workbook, filename)
}
