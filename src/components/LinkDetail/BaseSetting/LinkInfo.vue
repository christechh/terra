<script lang="ts" setup>
import VerticalSteps from '../../../components/VerticalSteps'
import useLinkInfo from '../../../composables/LinkDetail/BaseSetting/useLinkInfo'

const { type, chatUrl, deleteHandler } = useLinkInfo()
</script>
<template>
  <main class="mt-2 rounded rounded-lg bg-white dark:bg-darkmode-600">
    <header
      class="flex items-center justify-between border-b border-[#EDF2F7] p-5 text-base font-bold leading-10"
    >
      {{ $t('connent-info') }}
    </header>
    <div class="p-5 ps-11">
      <VerticalSteps>
        <VerticalSteps.Step :step="1">
          <div class="flex items-center">
            <span>{{ $t('chatbot-message-action-type') }}</span>
          </div>
          <div class="mt-3 text-[#939393]">
            {{
              type === 'direct' ? $t('edit-one-to-one') : $t('edit-group-chat')
            }}
          </div>
        </VerticalSteps.Step>
        <VerticalSteps.Step :step="2">
          <div class="flex items-center">
            <span>{{ $t('chat-link') }}</span>
          </div>
          <div class="mt-3 text-[#939393]">
            {{ chatUrl }}
          </div>
        </VerticalSteps.Step>
        <VerticalSteps.Step :step="3" isFinal>
          <div class="flex items-center">
            <span>{{ $t('delete-chat-link') }}</span>
          </div>
          <div class="mt-3 text-[#939393]">
            {{ $t('delete-chat-link-tip') }}
          </div>
          <button
            class="mt-5 rounded-lg bg-[#FF4D4F] px-5 py-2 text-white"
            @click="deleteHandler"
          >
            {{ $t('delete-btn') }}
          </button>
        </VerticalSteps.Step>
      </VerticalSteps>
    </div>
  </main>
</template>
