import { defineStore } from 'pinia'
import axios from '../axios'
import { SubAccountRole } from '../utils/common'
import { useCommonStore } from './common'
const { successfullySaved } = useCommonStore()

export interface IQuery {
  lang: string
  token: string
}
interface IRule {
  token: string
  rule: string
}
export interface ITransferItem {
  key: string
  accountName: string
  rules: IRule[]
  curRole: string
  curToken: string
}

export interface IBatchUpdateForm {
  query: IQuery
  sourceList: ITransferItem[]
  targetList: ITransferItem[]
  shareAvatars: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasCurrentEnterpoint = (account: any, linkToken: string): boolean => {
  if (!(account.rules && account.rules.length > 0)) return false
  let flag = false
  const rules = account.rules
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    if (rule.token === linkToken) {
      flag = true
      break
    }
  }
  return flag
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCurrentRoleFromRules = (rules: any, linkToken: string): string => {
  let role = SubAccountRole.ADMIN
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    if (rule.token === linkToken) {
      role = rule.rule
      break
    }
  }
  return role
}

const replacedCurrentRole = (account: ITransferItem): void => {
  const rules = account.rules
  if (rules.length == 0) {
    const rule: IRule = {
      token: '',
      rule: ''
    }
    rule.token = account.curToken
    rule.rule = account.curRole
    account.rules = []
    account.rules.push(rule)
  }
  let found = false
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    if (rule.token == account.curToken) {
      found = true
      rule.rule = account.curRole
      break
    }
  }
  if (!found) {
    const rule: IRule = {
      token: '',
      rule: ''
    }
    rule.token = account.curToken
    rule.rule = account.curRole
    account.rules.push(rule)
  }
  account.rules = rules
}

const removeCurrentRole = (account: ITransferItem): void => {
  const rules = account.rules
  const replaced = []
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    if (rule.token != account.curToken) {
      replaced.push(rule)
    }
  }
  account.rules = replaced
}

export const useSubAccountStore = defineStore('subAccounts', {
  state: () => {
    return {
      subAccountRawData: null,
      transferSource: [] as ITransferItem[],
      transferTarget: [] as ITransferItem[],
      shareAvatars: false,
      allTransferList: [] as ITransferItem[],
      submitDisabled: true,
      rawListSortByKey: [] as ITransferItem[]
    }
  },
  getters: {},
  actions: {
    async getSubAccountList(query: IQuery) {
      try {
        // 1. get query params or local storage
        const token = query.token
        if (!token) return

        // 2. request sub account info
        const url = `/enterpoint/${token}/subAccounts`
        const res = await axios.get(url)

        // 3. update subAccountData
        const rawData = res.data.data
        this.subAccountRawData = rawData
        this.shareAvatars = rawData.shareAvatars

        // 4. format data
        // transferSource, transferTarget
        const list = rawData.list
        const sourceList: ITransferItem[] = []
        const targetList: ITransferItem[] = []

        if (!(list && list.length > 0)) return

        for (let i = 0; i < list.length; i++) {
          const curSubAccount = list[i]
          if (!hasCurrentEnterpoint(curSubAccount, token)) {
            sourceList.push({
              key: `${curSubAccount.id}`,
              accountName: curSubAccount.name,
              rules: curSubAccount.rules ? curSubAccount.rules : [],
              curRole: '',
              curToken: token
            })
            continue
          }
          const curRole = getCurrentRoleFromRules(curSubAccount.rules, token)
          targetList.push({
            key: `${curSubAccount.id}`,
            accountName: curSubAccount.name,
            rules: curSubAccount.rules ? curSubAccount.rules : [],
            curRole: curRole,
            curToken: token
          })
        }
        this.transferSource = sourceList
        this.transferTarget = targetList
        this.allTransferList = [...sourceList, ...targetList]
        this.allTransferList.sort((a, b) =>
          a.accountName.localeCompare(b.accountName)
        )
        this.rawListSortByKey = [...sourceList, ...targetList].sort(
          (a, b) => parseInt(a.key) - parseInt(b.key)
        )
      } catch (error) {
        // 1. print error
        console.log('getSubAccountList error : \n', JSON.stringify(error))
        // 2. show error mesage
      }
    },
    async updateSubAccountData(form: IBatchUpdateForm) {
      try {
        this.toggleSubmitDisabled(true)
        // 1. format data
        const { sourceList, targetList, shareAvatars } = form
        const withoutEnterpoint = []
        const withinEnterpoint = []
        for (let i = 0; i < sourceList.length; i++) {
          const sourceAccount = sourceList[i]
          removeCurrentRole(sourceAccount)
          withoutEnterpoint.push({
            id: parseInt(sourceAccount.key),
            rules: sourceAccount.rules,
            curRole: sourceAccount.curRole
          })
        }
        for (let i = 0; i < targetList.length; i++) {
          const targetAccount = targetList[i]
          replacedCurrentRole(targetAccount)
          withinEnterpoint.push({
            id: parseInt(targetAccount.key),
            rules: targetAccount.rules,
            curRole: targetAccount.curRole
          })
        }
        const body = {
          shareAvatars,
          withoutEnterpoint,
          withinEnterpoint
        }

        const { token } = form.query
        const url = `/enterpoint/${token}/subAccounts/rules`
        const res = await axios.put(url, JSON.stringify(body))

        // 2. if ok, dispatch get subaccount list
        // if (res.statusCode == 200)
        console.log('update res :\n', JSON.stringify(res))
        successfullySaved()
        await this.getSubAccountList(form.query)

        // 3. not ok, throw error
      } catch (error) {
        // 1. print error
        console.log('updateSubAccountData error : \n', JSON.stringify(error))
        // 2. show error message
      }
    },
    updateToAdmin(moveKeys: string[]) {
      let i = 0,
        j = 0
      const list = [...this.rawListSortByKey]
      moveKeys.sort((a, b) => parseInt(a) - parseInt(b))
      while (i < moveKeys.length && j < list.length) {
        if (list[j].key == moveKeys[i]) {
          list[j].curRole = SubAccountRole.ADMIN
          j++
          i++
          continue
        }
        j++
      }
      this.allTransferList = list.sort((a, b) =>
        a.accountName.localeCompare(b.accountName)
      )
    },
    removeRole(moveKeys: string[]) {
      let i = 0,
        j = 0
      const list = [...this.rawListSortByKey]
      moveKeys.sort((a, b) => parseInt(a) - parseInt(b))
      while (i < moveKeys.length && j < list.length) {
        if (list[j].key == moveKeys[i]) {
          list[j].curRole = ''
          j++
          i++
          continue
        }
        j++
      }
      this.allTransferList = list.sort((a, b) =>
        a.accountName.localeCompare(b.accountName)
      )
    },
    toggleSubmitDisabled(disabled: boolean) {
      this.submitDisabled = disabled
    }
  }
})
