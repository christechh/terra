<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Button from '../../../base-components/Button'
import { FormInput, FormSelect } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'

type Option = {
  title: string
  link: string
}

type WelcomeLink = {
  title: string
  link: string
  type: string
  links: Option[]
}

type Props = {
  selectActionBtns: WelcomeLink
}

const emit = defineEmits(['close', 'save'])
const props = defineProps<Props>()

const type = ref('link')
const options = ref<Option[]>([])
const title = ref('')
const link = ref('')

const deleteOption = (idx: number) => {
  options.value.splice(idx, 1)
}

const onSave = () => {
  emit('save', {
    title: title.value,
    title_cn: title.value,
    title_de: title.value,
    title_en: title.value,
    title_es: title.value,
    title_fr: title.value,
    title_ja: title.value,
    title_kr: title.value,
    'title_pt-br': title.value,
    title_ro: title.value,
    title_th: title.value,
    title_vi: title.value,
    title_zh: title.value,
    type: type.value,
    link: link.value,
    links: options.value,
    open: true
  })
  emit('close')
}

onMounted(() => {
  const { selectActionBtns } = props
  if (selectActionBtns) {
    title.value = selectActionBtns.title
    type.value = selectActionBtns.type
    link.value = selectActionBtns.link
    options.value = selectActionBtns.links
  }
})
</script>

<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[400px]">
      <header class="relative mb-5 text-center text-xl">
        {{ $t('welcome-link-add-link') }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </header>
      <main class="h-[530px] overflow-y-auto p-1">
        <div>
          <span class="mr-2 text-danger">*</span
          ><span>{{ $t('welcome-link-button-title') }}</span>
        </div>
        <FormInput
          type="text"
          :placeholder="$t('welcome-link-button-title-placeholder')"
          class="mb-2 mt-2"
          v-model="title"
        />
        <span>{{ $t('welcome-link-type') }}</span>
        <FormSelect class="mt-2" v-model="type">
          <option value="link">{{ $t('welcome-link-link') }}</option>
          <option value="select">{{ $t('welcome-link-menu') }}</option>
        </FormSelect>
        <template v-if="type === 'link'">
          <div class="mt-2">
            <span class="mr-2 text-danger">*</span
            ><span>{{ $t('welcome-link-link') }}</span>
          </div>
          <FormInput
            type="text"
            :placeholder="$t('welcome-link-link-placeholder')"
            class="mt-2"
            v-model="link"
          />
        </template>
        <template v-if="type === 'select'">
          <div
            class="relative mt-3 rounded-xl border p-5"
            v-for="(option, key) in options"
            :key="key"
          >
            <Lucide
              icon="X"
              class="absolute right-[5px] top-[5px] cursor-pointer text-[#939393]"
              width="16"
              @click="deleteOption(key)"
            />
            <div>
              <span class="mr-2 text-danger">*</span>
              <span>{{ $t('edit-rich-menu-title') }}{{ key + 1 }}</span>
            </div>
            <FormInput
              class="mt-2"
              type="text"
              :placeholder="$t('welcome-link-title-placeholder')"
              v-model="option.title"
            />
            <div class="mt-2">
              <span class="mr-2 text-danger">*</span>
              <span>{{ $t('welcome-link-link') }}{{ key + 1 }}</span>
            </div>
            <FormInput
              class="mt-2"
              type="text"
              :placeholder="$t('welcome-link-link-placeholder')"
              v-model="option.link"
            />
          </div>
          <button
            class="mt-3 flex w-full items-center justify-center rounded border border-dashed bg-dashboard_bg p-4 text-primary"
            @click="() => options.push({ title: '', link: '' })"
          >
            <Lucide icon="PlusCircle" color="#C2512B" class="mr-2" />{{
              $t('add-setting-option')
            }}
          </button>
        </template>
      </main>
      <footer class="mt-5 flex justify-between">
        <Button
          variant="outline-primary"
          class="flex-1 border border-primary"
          @click="emit('close')"
          >{{ $t('cancel-btn') }}</Button
        >
        <Button variant="primary" class="ml-2 flex-1" @click="onSave">{{
          $t('save-btn')
        }}</Button>
      </footer>
    </Dialog.Panel>
  </Dialog>
</template>
