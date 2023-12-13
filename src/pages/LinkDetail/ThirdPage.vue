<script setup lang="ts">
import { ref, h } from 'vue'
import { useI18n } from 'vue-i18n'

import Tabs from '@/components/Tabs/index.vue'
import Breadcrumb from '@/components/LinkDetail/Common/Breadcrumb.vue'
import BaseConnect from '@/components/LinkDetail/Thirds/BaseConnect.vue'

const { t } = useI18n()

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
    render: () => {
      return h(
        'div',
        null,
        h(BaseConnect, {
          type: 'what-app'
        })
      )
    }
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
</script>

<template>
  <section>
    <Breadcrumb />
    <Tabs :tabs="tabs" />
  </section>
</template>
