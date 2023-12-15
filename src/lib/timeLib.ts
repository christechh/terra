export const convertYmdHis = (date?: string | null) => {
  if (!date) {
    return ''
  }
  return new Date(date).toLocaleString('zh-tw', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  })
}
export const convertYmd = (date: string) => {
  if (!date) {
    return ''
  }
  const inputDate = new Date(date)
  const firstDayOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    1
  )
  return firstDayOfMonth.toLocaleString('zh-tw', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}
export const convertMonthRange = (date: string) => {
  if (!date) {
    return ''
  }
  const inputDate = new Date(date)
  const firstDayOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    1
  )

  const lastDayOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() + 1,
    1
  )
  lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1)

  return (
    firstDayOfMonth.toLocaleString('zh-tw', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }) +
    ' ~ ' +
    lastDayOfMonth.toLocaleString('zh-tw', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  )
}
export const convertFirstDayOfMonth = (date: string) => {
  if (!date) {
    return ''
  }
  const inputDate = new Date(date)
  const firstDayOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    1
  )
  return firstDayOfMonth.toLocaleString('zh-tw', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}

export const convertLastDayOfMonth = (date: string) => {
  if (!date) {
    return ''
  }
  const inputDate = new Date(date)
  const lastDayOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() + 1,
    1
  )
  lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1)

  return lastDayOfMonth.toLocaleString('zh-tw', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}

export const convertLastMonth = (date: string) => {
  if (!date) {
    return ''
  }
  const inputDate = new Date(date)

  inputDate.setMonth(inputDate.getMonth() - 1)
  return inputDate.toISOString()
}
