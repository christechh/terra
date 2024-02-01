<script setup lang="ts">
import FormInput from '@/base-components/Form/FormInput.vue'
import HeadShots from '@/components/HeadShots/HeadShots.vue'
import { computed, defineEmits, defineProps, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import axios from '../../axios'
import { FormCheck } from '../../base-components/Form'
import { Dialog } from '../../base-components/Headless'
import Lucide from '../../base-components/Lucide'
import { useNotificationsStore } from '../../stores/notifications'
interface Props {
  modelValue: boolean
}
enum LinkType {
  Direct = 'direct',
  Group = 'group'
}
const notificationStore = useNotificationsStore()
const router = useRouter()
const { t } = useI18n()
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const linkType = ref<LinkType>(LinkType.Direct)
const title = ref('')
const name = ref('')
const token = ref<string>('')
const avatarImageId = ref(5141)
const domain = import.meta.env.VITE_DOMAIN
const isTokenValid = computed(() => {
  return !/\W/.test(token.value)
})
const imgObj: { [key: number]: string } = {
  5141: 'https://pinchatbeta.s3.ap-northeast-1.amazonaws.com/user/d1664a78247f2c0c3dc1ccd7af89b6ee.png',
  5142: 'https://pinchatbeta.s3.ap-northeast-1.amazonaws.com/user/11cb5d623d8021fb0ba389f3ff9b0318.png',
  5143: 'https://pinchatbeta.s3.ap-northeast-1.amazonaws.com/user/4371167567f6cbadf9094946600f353d.png',
  5144: 'https://pinchatbeta.s3.ap-northeast-1.amazonaws.com/user/f55e9650ec3e9af6c594957cd172dd4b.png'
}
const avatar = ref(imgObj[avatarImageId.value])
const completed = ref(false)
const close = () => {
  emit('update:modelValue', false)
}
const create = async () => {
  await axios.post('/dashboard/enterpoint', {
    ...{
      token: 'ejfwoijefiowejfowiejfowiejfowi',
      type: 'group',
      name: 'nickname',
      title: 'nameeofijwoeifoweifjo',
      image_id: 5141,
      id: '',
      nickname_input_placeholder: '',
      nickname_input_placeholder_en: '',
      nickname_input_placeholder_fr: '',
      nickname_input_placeholder_ja: '',
      'nickname_input_placeholder_pt-br': '',
      nickname_input_placeholder_ro: '',
      nickname_input_placeholder_es: '',
      nickname_input_placeholder_th: '',
      nickname_input_placeholder_vi: '',
      nickname_input_placeholder_de: '',
      welcome: 'Hello!',
      welcome_cn: 'Hello!',
      welcome_en: 'Hello!',
      welcome_fr: 'Bonjour, comment puis-je vous aider?',
      welcome_ja: 'こんにちは、どうされましたか？',
      welcome_kr: '안녕하세요, 무엇을 도와 드릴까요?',
      'welcome_pt-br': 'Olá, como posso ajudá-lo?',
      welcome_ro: 'Buna, cu ce te pot ajuta?',
      welcome_es: '¿Hola, como puedo ayudarte?',
      welcome_th: 'สวัสดีฉันจะช่วยคุณได้อย่างไร?',
      welcome_vi: 'Xin chào, tôi có thể giúp gì cho bạn?',
      welcome_de: 'Guten Tag, wie kann ich Ihnen helfen?',
      start_btn_text: '',
      start_btn_text_cn: '',
      start_btn_text_en: '',
      start_btn_text_fr: '',
      start_btn_text_ja: '',
      start_btn_text_kr: '',
      'start_btn_text_pt-br': '',
      start_btn_text_ro: '',
      start_btn_text_es: '',
      start_btn_text_th: '',
      start_btn_text_vi: '',
      start_btn_text_de: '',
      welcome_message: 'Hello!',
      welcome_message_cn: 'Hello!',
      welcome_message_en: 'Hello!',
      welcome_message_fr: 'Bonjour, comment puis-je vous aider?',
      welcome_message_ja: 'こんにちは、どうされましたか？',
      welcome_message_kr: '안녕하세요, 무엇을 도와 드릴까요?',
      'welcome_message_pt-br': 'Olá, como posso ajudá-lo?',
      welcome_message_ro: 'Buna, cu ce te pot ajuta?',
      welcome_message_es: '¿Hola, como puedo ayudarte?',
      welcome_message_th: 'สวัสดีฉันจะช่วยคุณได้อย่างไร?',
      welcome_message_vi: 'Xin chào, tôi có thể giúp gì cho bạn?',
      welcome_message_de: 'Guten Tag, wie kann ich Ihnen helfen?',
      show_landing: true,
      show_save_popup: false,
      bind_bot: false,
      chat_logo: '',
      background_color: '#f7f8f9',
      start_btn_color: '#02B13F',
      start_btn_text_color: '#ffffff',
      chat_header_color: '#02B13F',
      chat_header_text_color: '#FFFFFF',
      chat_bubble_color: '#DDEFE0',
      chat_bubble_border_color: '#DDEFE0',
      chat_bubble_text_color: '#000000',
      float_button_color: '#02B13F',
      float_button_text_color: '#ffffff',
      float_button_text: 'Contact Us',
      widget_logo: '',
      rich_menu_setting: [
        {
          icon: '',
          title: '',
          type: 'text',
          sendText: '',
          url: ''
        },
        {
          icon: '',
          title: '',
          type: 'text',
          sendText: '',
          url: ''
        },
        {
          icon: '',
          title: '',
          type: 'text',
          sendText: '',
          url: ''
        },
        {
          icon: '',
          title: '',
          type: 'text',
          sendText: '',
          url: ''
        },
        {
          icon: '',
          title: '',
          type: 'text',
          sendText: '',
          url: ''
        },
        {
          icon: '',
          title: '',
          type: 'text',
          sendText: '',
          url: ''
        }
      ],
      show_rich_menu: false,
      default_open_rich_menu: true,
      welcome_link_prime_color: '#02B13F',
      welcome_link_second_color: '#ffffff',
      welcome_link_setting: [
        {
          title: '',
          type: 'link',
          link: '',
          links: [
            {
              title: '',
              link: ''
            }
          ],
          open: false
        }
      ],
      welcome_text_color: '#939393',
      welcome_bg_type: 'image',
      welcome_bg_image:
        'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/1f77b4ff50d6279648b27a42ed999826.png',
      subAccount: [
        {
          id: '',
          account: '',
          password: '',
          rules: ['chat'],
          notifyType: 'email',
          notifyEmail: '',
          notifyPhone: '',
          notifyOpen: true,
          isDelete: false
        }
      ],
      widget_domain: 'pinchat.me',
      is_valid: true
    },
    title: title.value,
    name: name.value,
    token: token.value,
    image_id: avatarImageId.value,
    type: linkType.value
  })
  completed.value = true
}
const randomToken = () => {
  let result = ''
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const charactersLength = characters.length
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
const copyToPasteboard = async (text: string) => {
  const el = document.createElement('textarea')
  const domain = import.meta.env.VITE_DOMAIN as string
  el.value = `${domain}/${text}`
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  notificationStore.showSuccess({ title: t('copy-notify'), content: '' })
}
const navigateToSettings = () => {
  router.push(
    `/dashboard/enterpoint?token=${token.value}&type=${linkType.value}`
  )
}
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      token.value = randomToken()
    }
  }
)
</script>

<template>
  <Dialog :open="modelValue" size="md" @close="close">
    <Dialog.Panel class="p-7">
      <div class="relative flex items-center justify-between pb-5">
        <div class="mx-auto text-lg font-bold">
          {{
            completed
              ? $t('dashboard-create-room-success-title')
              : $t('create-new-link')
          }}
        </div>
        <Lucide
          icon="X"
          class="absolute right-0 cursor-pointer"
          @click="
            () => {
              emit('update:modelValue', false)
            }
          "
        />
      </div>
      <div class="flex flex-col gap-6 text-[14px]">
        <template v-if="completed">
          <div class="desc">{{ $t('dashboard-create-room-success-desc') }}</div>
          <div
            class="flex items-center rounded-md bg-[#f6f6f6] px-3 py-2 text-[#7b7b7b]"
          >
            {{ domain }}/ <span class="text-black">{{ token }}</span>
            <img
              class="ml-2 cursor-pointer"
              width="16"
              height="16"
              src="@/assets/images/copy.png"
              alt=""
              @click="copyToPasteboard(token)"
            />
          </div>
          <div class="flex gap-4">
            <button
              class="pointer-events-auto grow-[1] cursor-pointer rounded-xl border border-solid border-primary p-3 font-bold text-primary"
              @click="close"
            >
              {{ $t('cancel-btn') }}
            </button>
            <button
              class="pointer-events-auto grow-[2] cursor-pointer rounded-xl bg-primary p-3 font-bold text-white"
              @click="navigateToSettings"
            >
              {{ $t('dashboard-create-room-go-edit-button') }}
            </button>
          </div>
        </template>
        <template v-else>
          <div class="section">
            <div class="flex items-center gap-1">
              {{ $t('edit-category') }}
              <div v-tooltip:top.tootip="$t('tip-chatroom-type')">
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="desc">
              {{ $t('direct-desc') }}
            </div>
            <div class="mt-2 flex items-center gap-3">
              <FormCheck>
                <FormCheck.Input
                  type="radio"
                  v-model="linkType"
                  :value="LinkType.Direct"
                />
                <FormCheck.Label>
                  {{ $t('edit-one-to-one') }}
                </FormCheck.Label>
              </FormCheck>
              <FormCheck>
                <FormCheck.Input
                  type="radio"
                  v-model="linkType"
                  :value="LinkType.Group"
                />
                <FormCheck.Label>
                  {{ $t('edit-group-chat') }}
                </FormCheck.Label>
              </FormCheck>
            </div>
          </div>
          <div class="section">
            <div class="flex items-center gap-1">
              {{ $t('qrcode-page-url') }}
              <div v-tooltip:top.tootip="$t('tip-chatroom-url')">
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <div class="desc">
              {{ $t('customize-url') }}
            </div>
            <div
              class="mt-2 flex items-center rounded-md bg-[#f6f6f6] px-3 py-2 text-[#7b7b7b]"
            >
              <div>{{ domain }}/</div>
              <input
                type="text"
                class="w-full flex-1 border-transparent p-0 text-[14px] text-black focus:border-transparent focus:ring-0"
                maxlength="30"
                v-model="token"
              />
            </div>
            <div
              v-if="token.length < 5 || token.length > 30 || !isTokenValid"
              class="mt-1 text-xs text-[#ff4d4f]"
            >
              {{ $t('error-characters5to15') }}
            </div>
          </div>
          <div class="section">
            <div class="flex items-center gap-1">
              {{ $t('edit-chatroom-name') }}
              <div v-tooltip:top.tootip="$t('tip-chatroom-name')">
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormInput
              v-model="title"
              :placeholder="$t('create-placeholder-chatroom')"
              class="mt-1"
              type="text"
            />
          </div>
          <div class="section">
            <div class="flex items-center gap-1">
              {{ $t('qrcode-page-name') }}
              <div v-tooltip:top.tootip="$t('tip-chatroom-nickname')">
                <Lucide icon="HelpCircle" width="14" />
              </div>
            </div>
            <FormInput
              v-model="name"
              :placeholder="$t('create-placeholder-display-name')"
              class="mt-1"
              type="text"
            />
          </div>
          <div class="section">
            <div class="flex items-center gap-1">
              {{ $t('qrcode-page-avatar') }}
            </div>
            <HeadShots
              v-model:avatar="avatar"
              v-model:image_id="avatarImageId"
            />
          </div>
          <button
            class="pointer-events-auto cursor-pointer rounded-xl bg-primary p-3 font-bold text-white"
            @click="create"
          >
            {{ $t('dashboard-create-room-button') }}
          </button>
        </template>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
<style scoped>
.section {
  @apply flex flex-col;
}
.desc {
  @apply text-[12px] text-[#7b7b7b];
}
</style>
