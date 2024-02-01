<script setup lang="ts">
import {
  ConfigProvider as AConfigProvider,
  Empty as AEmpty,
  Radio as ARadio,
  RadioGroup as ARadioGroup,
  Select as ASelect,
  SelectOption as ASelectOption,
  Table as ATable,
  Tooltip as ATooltip,
  Transfer as ATransfer
} from 'ant-design-vue'
import ACol from 'ant-design-vue/es/grid/Col'
import ARow from 'ant-design-vue/es/grid/Row'

import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Button from '../../../../base-components/Button'
import {
  IBatchUpdateForm,
  IQuery,
  ITransferItem,
  useSubAccountStore
} from '../../../../stores/sub-account-setting'
import { SubAccountRole } from '../../../../utils/common'
const route = useRoute()
const { t, locale } = useI18n()
if (route.params.curLocale) {
  locale.value = route.params.curLocale as string
}
const { allTransferList, shareAvatars, submitDisabled } =
  storeToRefs(useSubAccountStore())
const {
  getSubAccountList,
  updateSubAccountData,
  updateToAdmin,
  removeRole,
  toggleSubmitDisabled
} = useSubAccountStore()

const defaultEmptyImage = AEmpty.PRESENTED_IMAGE_SIMPLE

type tableColumn = Record<string, string>

const leftTableColumns = [
  {
    dataIndex: 'accountName',
    title: t('sub-account-6')
  }
]
const rightTableColumns = [
  {
    dataIndex: 'accountName',
    title: t('sub-account-6')
  },
  {
    dataIndex: 'currentRule',
    title: t('sub-account-7')
  }
]

enum DIRECT {
  RIGHT = 'right',
  LEFT = 'left'
}

const curLang = route.params.lang as string
const curLinkToken = route.query.token as string
const defaultQuery: IQuery = {
  lang: curLang,
  token: curLinkToken
}

getSubAccountList(defaultQuery)
const targetKeys = ref<string[]>()
const targetCount = ref<number>()
const sourceCount = ref<number>()
const selectedKeys = ref<string[]>([])
const leftColumns = ref<tableColumn[]>(leftTableColumns)
const rightColumns = ref<tableColumn[]>(rightTableColumns)
const showSearch = ref<boolean>(false)
const sourceTitle = ref<string>(`${t('sub-account-4', { x: 0 })}`)
const targetTitle = ref<string>(`${t('sub-account-5', { x: 0 })}`)

const syncCountToTitle = (list: ITransferItem[]) => {
  targetKeys.value = list
    .filter((item) => item.curRole != '')
    .map((item) => item.key)
  targetCount.value = targetKeys.value.length
  sourceCount.value = allTransferList.value.length - targetCount.value
  sourceTitle.value = `${t('sub-account-4', { x: sourceCount.value })}`
  targetTitle.value = `${t('sub-account-5', { x: targetCount.value })}`
}
syncCountToTitle(allTransferList.value)

watch(
  allTransferList,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (newV: any) => {
    syncCountToTitle(newV)
  },
  {
    deep: true
  }
)

const onChange = (_: string[], direction: string, moveKeys: string[]) => {
  if (direction === DIRECT.RIGHT) {
    updateToAdmin(moveKeys)
  } else {
    removeRole(moveKeys)
  }
  toggleSubmitDisabled(false)
}

const getRowSelection = ({
  disabled,
  selectedKeys,
  onItemSelectAll,
  onItemSelect // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: Record<string, any>) => {
  return {
    getCheckboxProps: (item: Record<string, string | boolean>) => ({
      disabled: disabled || item.disabled
    }),
    onSelectAll(
      selected: boolean,
      selectedRows: Record<string, string | boolean>[]
    ) {
      toggleSubmitDisabled(false)
      const treeSelectedKeys = selectedRows
        .filter((item) => !item.disabled)
        .map(({ key }) => key)
      onItemSelectAll(treeSelectedKeys, selected)
    },
    onSelect({ key }: Record<string, string>, selected: boolean) {
      toggleSubmitDisabled(false)
      onItemSelect(key, selected)
    },
    selectedRowKeys: selectedKeys
  }
}

const unlockButtonDisabled = () => {
  toggleSubmitDisabled(false)
}

const handleFormSubmit = async () => {
  const form: IBatchUpdateForm = {
    query: defaultQuery,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sourceList: allTransferList.value.filter((item: any) => item.curRole == ''),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    targetList: allTransferList.value.filter((item: any) => item.curRole != ''),
    shareAvatars: shareAvatars.value
  }
  await updateSubAccountData(form)
}

onMounted(() => {
  /**
   * customized override ant-design style
   */
  const elements = document.querySelectorAll('.ant-transfer-list-header-title')
  if (elements != undefined) {
    for (let span in Object.entries(elements)) {
      const sibling = elements[span].previousElementSibling
      if (sibling != undefined) {
        sibling.setAttribute('style', 'display: none')
      }
    }
  }
})
</script>

<template>
  <a-config-provider>
    <template #renderEmpty>
      <a-empty :image="defaultEmptyImage">
        <template #description>
          <span>
            {{ $t('sub-account-18') }}
          </span>
        </template>
      </a-empty>
    </template>
    <a-row class="tab-panel">
      <a-row
        class="w-100 divider top-section"
        type="flex"
        justify="space-between"
        align="middle"
      >
        <h2>{{ $t('sub-account-title') }}</h2>
        <Button
          variant="primary"
          class="px-5 py-2"
          @click="handleFormSubmit"
          :disabled="submitDisabled"
        >
          {{ $t('save-btn') }}
        </Button>
      </a-row>

      <a-row class="w-100 divider transfer-section p-5">
        <a-col :span="24">
          <a-col :span="24" class="sub-account-text mb-2">
            {{ $t('sub-account-1') }}
          </a-col>
          <a-col :span="24">
            <span class="primary-text-color">
              {{ $t('sub-account-2') }}
            </span>
            <router-link target="_blank" to="/dashboard/settings/sub_account">
              <span class="primary-font-color">
                {{ $t('sub-account-3') }}
              </span>
            </router-link>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-row class="w-100" type="flex" justify="space-around">
            <a-transfer
              class="transfer-element-group"
              v-model:target-keys="targetKeys"
              v-model:selected-keys="selectedKeys"
              :data-source="allTransferList"
              :show-search="showSearch"
              :titles="[sourceTitle, targetTitle]"
              :show-select-all="false"
              :listStyle="{ width: '180px' }"
              @change="onChange"
              :locale="{ itemUnit: '', itemsUnit: '' }"
            >
              <template
                #children="{
                  direction,
                  filteredItems,
                  selectedKeys,
                  disabled: listDisabled,
                  onItemSelectAll,
                  onItemSelect
                }"
              >
                <a-table
                  :row-selection="
                    getRowSelection({
                      disabled: listDisabled,
                      selectedKeys,
                      onItemSelectAll,
                      onItemSelect
                    })
                  "
                  size="middle"
                  :columns="direction === 'left' ? leftColumns : rightColumns"
                  :data-source="filteredItems"
                  :style="{ pointerEvents: listDisabled ? 'none' : null }"
                  :pagination="{ pageSize: 10 }"
                  :scroll="{ y: 320 }"
                >
                  <template #headerCell="slotScope">
                    <template
                      v-if="slotScope?.column.dataIndex === 'currentRule'"
                    >
                      <span style="padding-right: 5px">
                        {{ $t('subaccount-role') }}
                      </span>
                      <a-tooltip placement="top">
                        <template #title>
                          <span>{{ $t('sub-account-8') }}</span
                          ><br />
                          <span>{{ $t('sub-account-9') }}</span
                          ><br />
                          <span>{{ $t('sub-account-10') }}</span
                          ><br />
                          <span>{{ $t('sub-account-11') }}</span
                          ><br />
                          <span>{{ $t('sub-account-12') }}</span>
                        </template>
                        <img
                          src="../../../../assets//images/tip.png"
                          width="14"
                          height="14"
                          style="display: inline"
                        />
                      </a-tooltip>
                    </template>
                  </template>
                  <template #bodyCell="slotScope">
                    <template
                      v-if="slotScope?.column.dataIndex === 'currentRule'"
                    >
                      <a-select
                        v-model:value="slotScope.record.curRole"
                        :dropdownMatchSelectWidth="200"
                        @change="unlockButtonDisabled"
                      >
                        <a-select-option
                          v-for="(item, key) in SubAccountRole"
                          :value="item"
                          :key="key"
                        >
                          {{ $t(`sub-${item}`) }}
                        </a-select-option>
                      </a-select>
                    </template>
                  </template>
                </a-table>
              </template>
            </a-transfer>
          </a-row>
        </a-col>
      </a-row>

      <a-row class="advanced-setting-section p-5">
        <a-col :span="24">
          <div class="sub-account-text">
            {{ $t('sub-account-19') }}
          </div>
          <div class="sub-account-subtext">
            <span>{{ $t('sub-account-20') }}</span>
          </div>
        </a-col>
        <a-col :span="24">
          <a-radio-group
            class="radio"
            v-model:value="shareAvatars"
            @change="unlockButtonDisabled"
          >
            <a-radio class="radio-1" :value="false">
              {{ $t('sub-account-21') }}
            </a-radio>
            <a-radio class="radio-2" :value="true">
              {{ $t('sub-account-22') }}
            </a-radio>
          </a-radio-group>
        </a-col>
      </a-row>
    </a-row>
  </a-config-provider>
</template>

<style scoped lang="less">
.w-100 {
  width: 100%;
}

.p-5 {
  padding: 1.25rem;
}

.divider {
  border: 0 solid #e2e8f0;
  border-bottom-width: 1px;
  border-color: rgba(237, 242, 247, 1);
}

.tab-panel {
  margin-top: 0.5rem;
  box-shadow: 0 3px 20px rgb(0 0 0 / 4%);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 14px;
}

.top-section {
  align-items: center;
  padding: 1.25rem;
  h2 {
    font-weight: 600;
    font-size: 1rem;
  }
}

.sub-account-text {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
}

.sub-account-subtext {
  font-size: 14px;
  margin-top: 7px;

  span {
    color: #939393;
  }
}

.primary-button {
  border-radius: 0.8rem;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  outline: 0;
  padding: 0.5rem 0.75rem;
  height: 100%;
  float: right;
}
.bg-theme-1 {
  background-color: #02b13f !important;
  border-color: #02b13f !important;
}
.primary-button:disabled {
  opacity: 0.5;
}

.transfer-element-group {
  width: 100%;
  height: 456px;
  margin: 10px 0;

  span.ant-transfer-list-header-selected span:nth-child(1) {
    display: none !important;
  }
}

.radio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .radio-1 {
    margin-top: 20px;
  }
  .radio-2 {
    margin-top: 20px;
  }
}
</style>
<style>
.ant-pagination-item-active {
  font-weight: 500 !important;
  border-color: #02b13f !important;
}
.ant-pagination-item-active a {
  color: #02b13f !important;
}
.ant-radio-checked .ant-radio-inner,
.ant-radio-checked:after {
  border-color: #02b13f;
}
.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
  border-color: #02b13f;
  background-color: #02b13f;
}
.ant-checkbox-inner::after {
  background: #02b13f !important;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #02b13f !important;
  border-color: #02b13f !important;
}

.ant-btn-primary {
  background-color: #02b13f !important;
  color: white;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.ant-btn-primary[disabled] {
  background: #f5f5f5 !important;
}
.primary-font-color,
.primary-font-color:hover {
  color: #02b13f;
}
.primary-text-color {
  color: #939393;
}
.ant-table-row-hover > td {
  background: #d1edd5 !important;
}
.ant-table-row-selected > td {
  background: #d8f0dc !important;
}
.ant-select-focused:where(.css-dev-only-do-not-override-u4kgz5).ant-select:not(
    .ant-select-disabled
  ):not(.ant-select-customize-input):not(.ant-pagination-size-changer)
  .ant-select-selector {
  border-color: #02b13f !important;
}
.ant-select:hover .ant-select-selector {
  border-color: #02b13f !important;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  background: #d8f0dc !important;
}
:where(.css-dev-only-do-not-override-u4kgz5).ant-checkbox-wrapper:not(
    .ant-checkbox-wrapper-disabled
  ):hover
  .ant-checkbox-inner,
:where(.css-dev-only-do-not-override-u4kgz5).ant-checkbox:not(
    .ant-checkbox-disabled
  ):hover
  .ant-checkbox-inner,
:where(.css-dev-only-do-not-override-u4kgz5).ant-checkbox-wrapper:not(
    .ant-checkbox-wrapper-disabled
  ):hover
  .ant-checkbox-checked:not(.ant-checkbox-disabled):after,
.ant-radio-wrapper:hover
  :where(.css-dev-only-do-not-override-u4kgz5).ant-radio-wrapper,
:where(.css-dev-only-do-not-override-u4kgz5).ant-radio-wrapper:hover
  .ant-radio-inner {
  border-color: #02b13f;
}
</style>
