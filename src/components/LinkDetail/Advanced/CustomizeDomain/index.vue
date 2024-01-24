<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../../../../base-components/Button'
import {
  FormInput,
  FormTextarea,
  Upload
} from '../../../../base-components/Form'
import useCustomizeDomain from '../../../../composables/LinkDetail/AdvancedSetting/CustomizeDomain/useCustomizeDomain'
import VerticalSteps from '../../../VerticalSteps'
const { t } = useI18n()
const { custom_domain, hostName, isValid, validDomain } = useCustomizeDomain()
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
      <a class="text-primary" href="#">{{ t('custom-domain-go-tutorial') }}</a>
    </div>
    <div class="pl-12 pr-5 pt-5">
      <VerticalSteps>
        <VerticalSteps.Step :step="1" class="pb-9">
          <b class="text-base">{{ t('custom-domain-step-1-title') }}</b>
          <div class="mt-5">
            <span class="text-red-500">*</span>{{ t('custom-domain-name') }}
          </div>
          <FormInput v-model="custom_domain" type="text" class="mt-2" />
        </VerticalSteps.Step>
        <VerticalSteps.Step :step="2" class="pb-9">
          <b class="text-base">{{ t('custom-domain-step-2-title') }}</b>
          <div class="mt-5">{{ t('custom-domain-step-2-dns-record') }}</div>
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
              <span class="font-bold text-black">land.pageing.me</span>
            </div>
          </div>
          <div class="my-2">{{ t('custom-domain-help-title') }}</div>
          <div class="text-sm text-desc_font">
            {{ t('custom-domain-help-desc') }}
            <button class="text-primary">
              {{ t('custom-domain-help-see-desc-button') }}
            </button>
          </div>
          <Button
            class="py4 mt-5 border border-black px-5"
            @click="validDomain"
            >{{ t('custom-domain-check-domain') }}</Button
          >
          <span class="ml-2" v-if="isValid">{{
            t('custom-domain-check-success')
          }}</span>
        </VerticalSteps.Step>
        <VerticalSteps.Step :step="3" class="pb-9" is-final>
          <b class="text-base">{{ t('custom-domain-step-3-title') }}</b>
          <div class="mt-2 text-desc_font">
            {{ t('custom-domain-step-3-desc') }}
          </div>
          <Button variant="primary" class="mt-5">{{
            t('custom-domain-submit')
          }}</Button>
        </VerticalSteps.Step>
      </VerticalSteps>
    </div>
  </div>
  <div class="mt-2 rounded-lg bg-white dark:bg-darkmode-600">
    <div
      class="flex items-center justify-between border-b p-5 text-base font-bold"
    >
      {{ t('custom-domain-meta-title') }}
    </div>
    <div class="gap-3 pl-12 pr-5 pt-5 lg:flex">
      <div class="flex-1">
        <VerticalSteps>
          <VerticalSteps.Step :step="1" class="pb-9">
            <b class="text-base">{{ t('custom-domain-meta-step1-title') }}</b>
            <div class="mt-5">
              <span class="text-red-500">*</span
              >{{ t('custom-domain-meta-og-title-title') }}
            </div>
            <FormInput
              type="text"
              class="mt-2"
              :placeholder="t('custom-domain-meta-og-title-placeholder')"
            />
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="2" class="pb-9">
            <b class="text-base">{{ t('custom-domain-meta-step2-title') }}</b>
            <div class="mt-5">
              <span class="text-red-500">*</span>
              {{ t('custom-domain-meta-og-description-title') }}
            </div>
            <FormTextarea
              class="mt-2"
              :placeholder="t('custom-domain-meta-og-description-placeholder')"
            />
            <div class="mt-5">
              {{ t('custom-domain-meta-og-keys-title') }}
              <FormInput
                type="text"
                class="mt-2"
                :placeholder="t('custom-domain-meta-og-keys-placeholder')"
              />
            </div>
          </VerticalSteps.Step>
          <VerticalSteps.Step :step="3" is-final>
            <b class="text-base">{{ t('custom-domain-meta-step3-title') }}</b>
            <div class="mt-5 flex items-center gap-2">
              <div class="h-[110px] flex-1 rounded-lg bg-[#ececec]"></div>
              <Upload class="flex-1" type="img" :limit="2" />
            </div>
          </VerticalSteps.Step>
        </VerticalSteps>
      </div>
      <div class="flex-1 lg:border-l">
        <b class="text-base">{{ t('chatbot-preview-btn') }}</b>
        <div class="mt-5 rounded-xl border p-5">
          <div class="flex h-[235px] items-center justify-center border">
            {{ t('custom-domain-meta-step3-title') }}
          </div>
          <div class="mt-5 text-base font-bold">
            {{ t('custom-domain-meta-preview-og-title-text') }}
          </div>
          <div class="my-2 text-sm">
            {{ t('custom-domain-meta-preview-og-description-text') }}
          </div>
          <div class="text-desc_font">test0118.four.tw</div>
        </div>
      </div>
    </div>
  </div>
</template>
