<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Lucide from '../../../../base-components/Lucide'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  survey: any
  showEnable: boolean
}

const props = defineProps<Props>()

const openMenu = ref(false)
const survey = computed(() => props.survey)

const emit = defineEmits(['edit', 'delete', 'copy', 'enable'])
const hideMenu = () => {
  openMenu.value = false
}

watch(openMenu, () => {
  if (openMenu.value) {
    setTimeout(() => {
      window.addEventListener('click', hideMenu)
    }, 0)
  } else {
    window.removeEventListener('click', hideMenu)
  }
})
</script>

<template>
  <div
    class="mb-2 flex items-center justify-between rounded-lg bg-input_bg px-5 py-2"
  >
    <div class="w-2/5">
      <div>
        {{ survey.survey.name }}
        <span
          v-if="survey.survey.is_use"
          class="ml-2 bg-[#e3f2a5] px-2 py-1 text-xs text-primary"
          ><span
            class="inline-block h-[6px] w-[6px] rounded-full bg-primary"
          ></span>
          {{ $t('in_use') }}</span
        >
      </div>
      <div class="mt-2 text-xs text-[#939393]">
        {{ $t('created_at') }}
        {{ new Date(survey.survey.createdAt).toLocaleString() }}
      </div>
    </div>
    <div class="w-[10%]">{{ survey.surveyFlow.length }}</div>
    <div class="w-[10%]">{{ survey.survey.complete }}</div>
    <div class="w-[30%]">
      {{ new Date(survey.survey.updatedAt).toLocaleString() }}
    </div>
    <div class="more relative w-[5%]">
      <Lucide
        icon="MoreHorizontal"
        class="cursor-pointer"
        @click="openMenu = !openMenu"
      />
      <ul
        v-if="openMenu"
        class="absolute right-0 z-10 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-slate-800"
      >
        <li
          class="w-[90px] cursor-pointer px-4 py-2 hover:bg-[#eaeaea] dark:hover:bg-slate-700"
          @click="emit('edit')"
        >
          {{ $t('edit-title') }}
        </li>
        <li
          class="w-[90px] cursor-pointer px-4 py-2 hover:bg-[#eaeaea] dark:hover:bg-slate-700"
          @click="emit('copy')"
        >
          {{ $t('duplicate') }}
        </li>
        <li
          class="w-[90px] cursor-pointer px-4 py-2 hover:bg-[#eaeaea] dark:hover:bg-slate-700"
          v-if="showEnable && !survey.survey.is_use"
          @click="emit('enable')"
        >
          {{ $t('survey-is-open-switch') }}
        </li>
        <li
          class="w-[90px] cursor-pointer px-4 py-2 text-danger hover:bg-[#eaeaea] dark:hover:bg-slate-700"
          @click="emit('delete')"
        >
          {{ $t('delete-btn') }}
        </li>
      </ul>
    </div>
  </div>
</template>
