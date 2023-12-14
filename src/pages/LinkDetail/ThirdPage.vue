<script setup lang="ts">
import { ref, h, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import Tabs from '@/components/Tabs/index.vue'
import Breadcrumb from '@/components/LinkDetail/Common/Breadcrumb.vue'
import BaseConnect from '@/components/LinkDetail/Thirds/BaseConnect.vue'
import WhatAppDisconnect from '@/components/LinkDetail/Thirds/WhatAppDisconnect.vue'
import { useThird } from '../../components/LinkDetail/Thirds/useThird'

const { t } = useI18n()
const { fetchConfig } = useThird()

const tabs = ref([
  {
    id: 'line',
    name: t('qrcode-setting-tab-line-connect'),
    render: () => {
      return h(
        'div',
        null,
        h(BaseConnect, {
          type: 'line'
        })
      )
    }
  },
  {
    id: 'what-app',
    name: t('what-app-txt1'),
    component: h('div', null, [
      h(BaseConnect, {
        type: 'what-app'
      }),
      h(WhatAppDisconnect, {
        class: 'mt-2'
      })
    ])
    // render: () => {
    //   return h('div', null, [
    //     h(BaseConnect, {
    //       type: 'what-app'
    //     }),
    //     h(WhatAppDisconnect, {
    //       class: 'mt-2'
    //     })
    //   ])
    // }
  },
  {
    id: 'messenger',
    name: t('messenger-txt1'),
    render: () => {
      return h(
        'div',
        null,
        h(BaseConnect, {
          type: 'messenger'
        })
      )
    }
  },
  {
    id: 'instagram',
    name: t('instagram-txt1'),
    render: () => {
      return h(
        'div',
        null,
        h(BaseConnect, {
          type: 'instagram'
        })
      )
    }
  },
  {
    id: 'slack',
    name: t('slack-txt1'),
    render: () => {
      return h(
        'div',
        null,
        h(BaseConnect, {
          type: 'slack'
        })
      )
    }
  }
])

onMounted(() => {
  fetchConfig && fetchConfig()
})
</script>

<template>
  <section>
    <Breadcrumb />
    <Tabs :tabs="tabs" />
  </section>
</template>
