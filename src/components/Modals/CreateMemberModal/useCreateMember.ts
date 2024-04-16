/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useMemberStore } from '../../../stores/member'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateMemberPayload {
  review_status: number
  amount: number
  [key: string]: any
}

export default function useCreateUser(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  member?: any
) {
  const { companyId } = useCompany()
  const payload: CreateMemberPayload = reactive(
    member
      ? member
      : {
          review_status: 2,
          amount: 1
        }
  )
  const { review_status, amount } = toRefs(payload)

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (member) {
      const newValue: CreateMemberPayload = {
        ...member,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key] = newValue[key]
        }
      })
      // Object.assign(payload, { ...member, ...extend })
    }
  })

  // 在 reactive 對象中保存原始數據
  const originalData = reactive({ ...member })

  const submit = async (type: string, callback: () => void) => {
    const action = type

    // 構建要發送的數據，僅包含有實際更改的字段
    const sendData: any = {}
    Object.keys(payload).forEach((key) => {
      console.log(payload[key])
      if (
        (member && payload[key] !== originalData[key]) ||
        (!member && payload[key] !== '')
      ) {
        sendData[key] = payload[key]
      }
    })

    let actionMap: any = {}

    console.log(1, payload)
    console.log(2, sendData)

    actionMap = {
      update_wallet: () =>
        axios.put(
          `/members/${member.id}?action=delete&amount=${sendData.amount}`
        ),
      update: () =>
        axios.put(
          `/members/${member.id}?review_status=${sendData.review_status}`
        )
    }

    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useMemberStore().fetchMember({
      companyId: companyId.value ?? 1,
      page: 1
    })
  }

  return {
    review_status,
    amount,
    submit
  }
}
