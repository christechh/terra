<script setup lang="ts">
import Button from '../../../base-components/Button'
import Lucide from '../../../base-components/Lucide'
import { Dialog } from '../../../base-components/Headless'
import usePlanModal from './composables/usePlanModal'

const emit = defineEmits(['close'])
const { plans, customContent, planUid, planChoice, getPlanUrl } = usePlanModal()
</script>

<template>
  <component :is="Dialog" :open="true" size="md">
    <component
      :is="Dialog.Panel"
      class="!w-[calc(100%_-_40px)] bg-[#f8f8f8] p-4 xl:!w-[1200px]"
    >
      <div class="m-3 flex justify-end">
        <Lucide
          icon="X"
          :size="32"
          class="cursor-pointer rounded-full bg-[#f4f4f5] stroke-2.5 p-2 text-[#7f7f7f]"
          @click="() => emit('close')"
        />
      </div>
      <div
        class="mx-6 mt-10 flex flex-col items-center gap-8 pb-6 web:grid web:grid-cols-4"
      >
        <div v-for="(item, index) in plans" :key="item.price">
          <div
            :class="[
              index === 2
                ? 'origin-bottom bg-[#02b13f] shadow-2xl md:scale-y-105'
                : 'bg-white',
              'my-6 h-[550px] w-full max-w-[330px] rounded-[30px] p-[30px]'
            ]"
          >
            <div class="flex w-full justify-end">
              <p
                v-if="item.plan_uid === 'light_month'"
                class="mb-[20px] w-fit rounded-full bg-[#21713d] px-[15px] py-[2px] text-[10px] font-semibold text-white"
              >
                {{ $t('pricing-addnew24') }}
              </p>
            </div>

            <div
              :class="[index === 2 ? 'text-white' : 'text-black', 'mb-[25px] ']"
            >
              <span
                :class="[
                  index === 2 ? 'text-white' : 'text-[#2d3748]',
                  'text-[20px] font-black'
                ]"
              >
                {{ $t('pricing-plan251') }}
              </span>
              <span
                :class="[
                  index === 2 ? 'text-white' : 'text-[#2d3748]',
                  'mx-1 text-[36px] font-black '
                ]"
              >
                {{ $t(String(item.price)) }}
              </span>
              <span
                :class="[
                  index === 2 ? 'text-white' : 'text-[#939393]',
                  'text-base font-black'
                ]"
              >
                {{ $t('pricing-plan253') }}
              </span>
            </div>
            <div
              :class="[
                index === 2 ? 'text-white' : 'text-black',
                'mb-10 text-[28px] font-black'
              ]"
            >
              {{ $t(item.version) }}
            </div>
            <div
              :class="[
                index === 2 ? 'text-white' : 'text-[#757575]',
                'mb-6 min-h-[83px] text-base font-semibold'
              ]"
            >
              {{ $t(item.description) }}
            </div>
            <a :href="getPlanUrl(item.plan_uid, item.href)" target="_blank">
              <Button
                :variant="index === 2 ? 'outline-primary' : 'soft-primary'"
                :class="[
                  index === 2 && 'bg-white hover:!bg-white',
                  item.plan_uid === planUid && 'bg-gray-500 text-gray-700',
                  index === 2 &&
                    item.plan_uid === planUid &&
                    'bg-gray-300 text-gray-600 hover:!bg-gray-300',
                  'mb-5 w-full whitespace-nowrap px-5'
                ]"
                size="lg2"
                :rounded="true"
                :disabled="item.plan_uid === planUid"
                >{{ planChoice(item.plan_uid) }}
              </Button>
            </a>
            <div>
              <div
                :class="[index === 2 ? 'text-white' : 'text-[#959796]']"
                v-for="(data, idx) in item.content"
                :key="`planContent${idx}`"
              >
                <div class="mb-2.5 flex">
                  <div
                    class="mr-4 h-fit rounded-full bg-[#e6f7ec] p-1 text-[#03b240]"
                  >
                    <Lucide icon="Check" :size="12" />
                  </div>
                  <div class="flex-1">
                    {{ $t(data) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center">
        <div
          class="mx-6 mb-10 flex max-w-[330px] flex-col items-center justify-between rounded-[30px] bg-white p-[30px] py-10 dark:bg-darkmode-600 web:w-full web:max-w-none web:flex-row"
        >
          <div class="flex-1">
            <b class="text-[28px] leading-8">{{ $t('pricing-addnew22') }}</b>
            <div class="my-8 grid gap-3 lg:grid-cols-3">
              <div v-for="item in customContent" :key="item">
                <div class="flex items-start">
                  <div
                    class="mr-4 h-fit rounded-full bg-[#e6f7ec] p-1 text-[#03b240]"
                  >
                    <Lucide icon="Check" :size="12" />
                  </div>
                  <p class="text-base text-[#959796]">{{ $t(item) }}</p>
                </div>
              </div>
            </div>
            <a href="https://pinchat.me/contact" target="_blank">
              <Button variant="soft-primary" size="lg2" :rounded="true">
                {{ $t('menu-label-1') }}
              </Button>
            </a>
          </div>
          <div class="flex-1">
            <div class="w-[200px]">
              <img
                src="@/assets/images/plan-modal-custom.png"
                class="h-ull w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </component>
  </component>
</template>
