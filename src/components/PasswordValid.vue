<script setup lang="ts">
import { useI18n } from 'vue-i18n'

type Props = {
  isPassRule1: boolean
  isPassRule2: boolean
  isPassRule3: boolean
}
const props = defineProps<Props>()
const { t } = useI18n()
</script>
<template>
  <ul class="mb-3 mt-2 text-xs">
    <p class="mb-1">{{ t('signup-confirm-password-validation-text') }}：</p>
    <li
      class="translate-x-3 list-disc"
      :class="props.isPassRule1 ? 'text-[#d0d0d0]' : 'text-primary'"
    >
      {{ t('signup-confirm-password-validation-eight-characters') }}
    </li>
    <li
      class="translate-x-3 list-disc"
      :class="props.isPassRule2 ? 'text-[#d0d0d0]' : 'text-primary'"
    >
      {{ t('signup-confirm-password-validation-capital-letters') }}
    </li>
    <li
      class="translate-x-3 list-disc"
      :class="props.isPassRule3 ? 'text-[#d0d0d0]' : 'text-primary'"
    >
      {{ t('signup-confirm-password-validation-numbers') }}
    </li>
  </ul>
</template>
