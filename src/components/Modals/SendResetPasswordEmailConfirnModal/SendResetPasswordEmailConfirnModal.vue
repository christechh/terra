<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Button from '../../../base-components/Button'
import { Dialog } from '../../../base-components/Headless'

const { t } = useI18n()
const router = useRouter()
</script>
<template>
  <Dialog :open="true">
    <Dialog.Panel>
      <div class="p-5">
        <div class="text-2xl font-bold text-primary">
          {{ t('send-reset-email-title') }}
        </div>
        <div class="mt-2">{{ t('send-reset-email-message') }}</div>
        <div class="mt-5 text-right">
          <Button variant="primary" @click="router.push({ name: 'login' })">{{
            t('send-reset-btn')
          }}</Button>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
