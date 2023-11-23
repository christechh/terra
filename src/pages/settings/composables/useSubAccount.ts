import { ref } from 'vue'
import axios from '../../../axios'

export default function useSubAccount() {
  interface Account {
    id: number
    name: string
    account: string
    notifyOpen: boolean
    notifyType: number
  }

  const accounts = ref<Account[]>([])

  const fetchSubAccounts = () => {
    axios
      .get('user/subAccount', {
        params: {
          page: 0,
          pageSize: 100
        }
      })
      .then((res) => {
        accounts.value = res.data.data.data
      })
  }

  fetchSubAccounts()
  return {
    accounts,
    fetchSubAccounts
  }
}
