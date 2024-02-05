<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../../../../base-components/Button'
import {
  FormInput,
  FormTextarea,
  Upload
} from '../../../../base-components/Form'
import LoadingIcon from '../../../../base-components/LoadingIcon'
import useCustomizeDomain from '../../../../composables/LinkDetail/AdvancedSetting/CustomizeDomain/useCustomizeDomain'
import MailSample from '../../../Modals/CustomizeDomain/MailSample.vue'
import VerticalSteps from '../../../VerticalSteps'
const { t, locale } = useI18n()
const {
  custom_domain,
  hostName,
  wrongInput,
  isValid,
  doValid,
  page_title,
  page_desc,
  page_keywords,
  preview,
  networkError,
  isCustomDomainEnable,
  validing,
  activating,
  metaSaving,
  eableTime,
  isChange,
  validDomain,
  enableCustomDomain,
  saveMetadata
} = useCustomizeDomain()
const showMailSample = ref(false)
const descDoc = computed(() => {
  if (locale.value === 'zh-TW') {
    return 'https://funtek.notion.site/Meta-Tags-fbd40e13c8aa403b82aba0dca7b274d6?pvs=4'
  }
  return 'https://funtek.notion.site/Custom-Domain-and-Meta-Tags-1867f4b9bbe041978f1e4e06e22ac868'
})
</script>

<template>
  <div class="rounded-lg bg-white dark:bg-darkmode-600">
    <div
      class="flex items-center justify-between border-b p-5 text-base font-bold"
    >
      {{ t('custom-domain-title') }}
    </div>
    <div class="pl-8 pt-5 text-desc_font">
      {{ t('custom-domain-desc') }}
      <a class="text-primary" :href="descDoc" target="_blank">{{
        t('custom-domain-go-tutorial')
      }}</a>
    </div>
    <div class="pl-12 pr-5 pt-5">
      <VerticalSteps>
        <VerticalSteps.Step :step="1" class="pb-9">
          <b class="block pt-[2px] text-sm">{{
            t('custom-domain-step-1-title')
          }}</b>
          <div class="mt-5">
            <span class="text-red-500">* </span>{{ t('custom-domain-name') }}
          </div>
          <FormInput
            v-model="custom_domain"
            type="text"
            class="mt-2"
            placeholder="www.example.com"
            :class="{ 'rounded border border-red-500': wrongInput }"
          />
          <span v-if="wrongInput" class="text-xs text-red-500">{{
            t('widget-domain-format-error')
          }}</span>
        </VerticalSteps.Step>
        <VerticalSteps.Step :step="2" class="pb-9">
          <b class="block pt-[2px] text-sm">{{
            t('custom-domain-step-2-title')
          }}</b>
          <div class="mb-2 mt-5">
            {{ t('custom-domain-step-2-dns-record') }}
          </div>
          <div class="rounded-lg border border-[#e2e8f0] p-3">
            <div>
              <span class="text-[#7b7b7b]">{{
                t('custom-domain-record-class')
              }}</span>
              <span class="font-bold text-black">CNAME</span>
            </div>
            <div>
              <span class="text-[#7b7b7b]">{{
                t('custom-domain-record-host')
              }}</span>
              <span class="font-bold text-black">{{ hostName }}</span>
            </div>
            <div>
              <span class="text-[#7b7b7b]">{{
                t('custom-domain-record-value')
              }}</span>
              <span class="font-bold text-black">landing.pinchat.me</span>
            </div>
          </div>
          <div class="my-2">{{ t('custom-domain-help-title') }}</div>
          <div class="text-sm text-desc_font">
            {{ t('custom-domain-help-desc') }}
            <button class="text-primary" @click="showMailSample = true">
              {{ t('custom-domain-help-see-desc-button') }}
            </button>
          </div>
          <Button class="py4 mt-5 border border-black px-5" @click="validDomain"
            >{{ t('custom-domain-check-domain') }}
            <LoadingIcon
              v-if="validing"
              icon="oval"
              color="#00000050"
              class="ml-2 h-4"
          /></Button>
          <span
            class="ml-3"
            :class="{ 'text-red-500': !isValid }"
            v-if="doValid"
            >{{
              isValid
                ? t('custom-domain-check-success')
                : t('custom-domain-submit-message-dns-error')
            }}</span
          >
        </VerticalSteps.Step>
        <VerticalSteps.Step :step="3" class="pb-9" is-final>
          <b class="block pt-[2px] text-sm">{{
            t('custom-domain-step-3-title')
          }}</b>
          <div class="mt-2 text-desc_font">
            {{ t('custom-domain-step-3-desc') }}
          </div>
          <Button
            variant="primary"
            class="mt-5"
            :disabled="!isValid || isCustomDomainEnable"
            @click="enableCustomDomain"
            >{{ t('custom-domain-submit') }}</Button
          >
          <span class="ml-3" v-if="isCustomDomainEnable"
            >{{ isCustomDomainEnable && eableTime }}
            {{ t('custom-domain-submit-message-enable') }}</span
          >
          <span class="ml-3 text-red-500" v-if="networkError">{{
            networkError
          }}</span>
        </VerticalSteps.Step>
      </VerticalSteps>
    </div>
    <Teleport to="body" v-if="activating">
      <div
        telport
        class="fixed inset-0 z-50 flex items-center justify-center bg-[#00000040]"
      >
        <div class="w-8">
          <LoadingIcon icon="oval" color="#00000050" />
        </div>
      </div>
    </Teleport>
  </div>
  <div
    class="mt-2 rounded-lg bg-white dark:bg-darkmode-600"
    v-if="isCustomDomainEnable"
  >
    <div
      class="flex items-center justify-between border-b p-5 text-base font-bold"
    >
      {{ t('custom-domain-meta-title') }}
      <Button
        variant="primary"
        @click="saveMetadata"
        :loading="metaSaving"
        :disabled="!isChange"
        class="text-sm"
        >{{ t('save-btn') }}</Button
      >
    </div>
    <div class="gap-3 pl-12 pr-5 pt-5 lg:flex">
      <div class="flex-1">
        <VerticalSteps>
          <VerticalSteps.Step :step="1" class="pb-9">
            <b class="text-sm">{{ t('custom-domain-meta-step1-title') }}</b>
            <div class="mt-5">
              <span class="text-red-500">* </span
              >{{ t('custom-domain-meta-og-title-title') }}
            </div>
            <FormInput
              type="text"
              class="mt-2"
              :placeholder="t('custom-domain-meta-og-title-placeholder')"
              v-model="page_title"
              @input="isChange = true"
            />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2" class="pb-9">
            <b class="text-sm">{{ t('custom-domain-meta-step2-title') }}</b>
            <div class="mt-5">
              <span class="text-red-500">*</span>
              {{ t('custom-domain-meta-og-description-title') }}
            </div>
            <FormTextarea
              class="mt-2"
              :placeholder="t('custom-domain-meta-og-description-placeholder')"
              v-model="page_desc"
              @input="isChange = true"
            />
            <div class="mt-5">
              {{ t('custom-domain-meta-og-keys-title') }}
              <FormInput
                type="text"
                class="mt-2"
                :placeholder="t('custom-domain-meta-og-keys-placeholder')"
                v-model="page_keywords"
                @input="isChange = true"
              />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" is-final>
            <b class="text-sm">{{ t('custom-domain-meta-step3-title') }}</b>
            <div class="mt-5 flex items-center gap-2">
              <Upload
                :limit="5"
                v-model="preview"
                class="flex-1"
                type="img"
                show-close
              />
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1 lg:border-l lg:pl-8">
        <b class="text-sm">{{ t('chatbot-preview-btn') }}</b>
        <div class="mt-5 rounded-xl border p-5">
          <div
            class="flex min-h-[235px] items-center justify-center border p-5"
          >
            <img
              class="w-100"
              v-if="preview[0]?.data"
              :src="preview[0]?.data"
              alt=""
            />
            <span v-else>{{ t('custom-domain-meta-step3-title') }}</span>
          </div>
          <div class="mt-5 text-base font-bold">
            {{ page_title || t('custom-domain-meta-preview-og-title-text') }}
          </div>
          <div class="my-2 text-sm">
            {{
              page_desc || t('custom-domain-meta-preview-og-description-text')
            }}
          </div>
          <div class="text-desc_font">test0118.four.tw</div>
        </div>
      </div>
    </div>
  </div>
  <MailSample v-if="showMailSample" @close="showMailSample = false" />
</template>
