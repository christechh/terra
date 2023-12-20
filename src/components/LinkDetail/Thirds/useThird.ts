import { ref, computed, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { StepItem } from '../../Steps/StepItem'
import FormInput from '@/base-components/Form/FormInput.vue'
import CopyText from '@/components/CopyText/index.vue'
import { useLinkPage } from '../../../composables/useLinkPage'
import {
  useEnterpointsConfigStore,
  IUpdateEnterpointConfigInput
} from '../../../stores/enterpoint/config'
import { FormInputOnInputParams } from '../../../base-components/Form/FormInput.vue'
import { useNotificationsStore } from '../../../stores/notifications'
import axios from '../../../axios'
import { ISubmitForm } from '../../../stores/enterpoint/config'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export type ConnectType =
  | 'line'
  | 'what-app'
  | 'what-app-2'
  | 'messenger'
  | 'instagram'
  | 'slack'

export const useThird = (type: ConnectType) => {
  const { t, locale } = useI18n()
  const { token } = useLinkPage()
  const notificationsStore = useNotificationsStore()
  const enterpointsConfigStore = useEnterpointsConfigStore()

  const btnLoading = ref(false)

  const config = computed(() => {
    return enterpointsConfigStore.data
  })
  const lineArticle = computed(() => {
    if (locale.value === 'zh-TW') {
      return 'https://funtek.notion.site/LINE-Messenger-eb36ffbfbb924b15958c4136c6ae804e?pvs=4'
    }

    return 'https://funtek.notion.site/LINE-Messenger-ffcd84a8612047dd9dd877557b23486e?pvs=4'
  })
  const whatAppArticle = computed(() => {
    if (locale.value === 'zh-TW') {
      return 'https://funtek.notion.site/WhatsApp-59b602ad276040bba8c7dee4b6ac84aa?pvs=4'
    }

    return 'https://funtek.notion.site/WhatsApp-311bb7f48481487eaa7be12ce7112900'
  })
  const messageArticle = computed(() => {
    if (locale.value === 'zh-TW') {
      return 'https://funtek.notion.site/Messenger-56f0ee3bca054786a4d7104d709d9c0a?pvs=4'
    }

    return 'https://funtek.notion.site/Messenger-3bb7eaabe4d64fac957861edb57d9eb7?pvs=4'
  })
  const instagramArticle = computed(() => {
    if (locale.value === 'zh-TW') {
      return 'https://funtek.notion.site/Instagram-3a1b206ce41548dcb764507e80110f8c?pvs=4'
    }

    return 'https://funtek.notion.site/Instagram-b09d5e5f1a3f4879826700d1cd8e94f1?pvs=44'
  })
  const slackArticle = computed(() => {
    if (locale.value === 'zh-TW') {
      return 'https://funtek.notion.site/Slack-b23d80d4e1c44589af290e2b0250b170?pvs=4'
    }

    return 'https://funtek.notion.site/Slack-4e1bf5edb8dc4759b10ae7b700ac09b5?pvs=4'
  })
  const dictionary = computed(() => {
    return {
      line: {
        title: t('integrate-line-official-account'),
        subtitle: h(
          'div',
          {
            class: 'text-[#939393]'
          },
          [
            h('span', null, t('connect-line-refer')),
            h(
              'a',
              {
                class: 'underline text-primary',
                href: lineArticle.value,
                target: '_blank'
              },
              t('article-link')
            ),
            h('span', null, t('teaching'))
          ]
        ),
        steps: [
          { title: t('line-connect-step1') },
          { title: t('line-connect-step2') },
          {
            title: t('line-connect-step3'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h('span', { class: 'pb-2' }, 'Channel Access Token'),
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.line_messaging_channel_access_token,
                  name: 'line_messaging_channel_access_token',
                  onInput: handleChange
                })
              ])
            }
          },
          {
            title: t('line-connect-step4'),
            component: h('div', { class: 'flex flex-col' }, [
              h('span', { class: 'pb-2' }, 'Webhook'),
              h(CopyText, {
                type: 'gray',
                class: 'w-full h-[36px]',
                text: `https://api.pinchat.me/api/line/webhook/${token.value}`
              }),
              h(
                'span',
                {
                  class: 'py-2',
                  style:
                    'line-height: 1; font-size: 12px; color: #7b7b7b;word-break: break-word;'
                },
                t('line-connect-step4-1')
              )
            ])
          },
          { title: t('line-connect-step5') }
        ]
      },
      'what-app': {
        title: t('what-app-txt1'),
        subtitle: h(
          'div',
          {
            class: 'text-[#939393]'
          },
          [
            h('span', null, t('what-app-txt2')),
            h('span', null, t('what-app-txt3')),
            h(
              'a',
              {
                class: 'underline text-primary',
                href: whatAppArticle.value,
                target: '_blank'
              },
              t('what-app-txt3-1')
            ),
            h('span', null, t('what-app-txt3-2'))
          ]
        ),
        steps: [
          {
            title: t('what-app-txt4'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h(
                  'span',
                  {
                    class: 'pb-2',
                    style:
                      'line-height: 1; font-size: 12px; color: #7b7b7b;word-break: break-word;'
                  },
                  t('what-app-txt4-1')
                ),
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.whatsapp_phone_number_id,
                  name: 'whatsapp_phone_number_id',
                  placeholder: t('what-app-txt5'),
                  onInput: handleChange
                })
              ])
            }
          },
          {
            title: t('what-app-txt6'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h(CopyText, {
                  type: 'gray',
                  class: 'w-full h-[36px]',
                  text: `https://api.pinchat.me/api/whatsapp/webhook/${token.value}`
                })
              ])
            }
          },
          { title: t('what-app-txt7') },
          {
            title: t('what-app-txt8'),
            render: () =>
              h('div', null, [
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.whatsapp_access_token,
                  name: 'whatsapp_access_token',
                  placeholder: t('what-app-txt9'),
                  onInput: handleChange
                })
              ])
          },
          {
            title: t('what-app-txt10'),
            render: () =>
              h('div', null, [
                h('span', null, t('what-app-txt11')),
                h(
                  'a',
                  {
                    class: 'underline text-primary',
                    href: 'https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/',
                    target: '_blank'
                  },
                  t('what-app-txt11-1')
                ),
                h('span', null, t('what-app-txt11-2'))
              ])
          }
        ]
      },
      'what-app-2': {
        title: t('what-app-txt12'),
        subtitle: h(
          'div',
          {
            class: 'text-[#939393]'
          },
          h('span', null, t('what-app-txt13'))
        ),
        steps: [
          {
            title: t('what-app-txt14'),
            render: () => h('div', null, [h('span', null, t('what-app-txt15'))])
          },
          {
            title: t('what-app-txt16'),
            render: () => h('div', null, [h('span', null, t('what-app-txt17'))])
          }
        ]
      },
      messenger: {
        title: t('messenger-txt1'),
        subtitle: h(
          'div',
          {
            class: 'text-[#939393]'
          },
          [
            h('span', null, t('messenger-txt2')),
            h('span', null, t('messenger-txt3')),
            h(
              'a',
              {
                class: 'underline text-primary',
                href: messageArticle.value,
                target: '_blank'
              },
              t('messenger-txt3-1')
            ),
            h('span', null, t('messenger-txt3-2'))
          ]
        ),
        steps: [
          {
            title: t('messenger-txt4')
          },
          {
            title: t('messenger-txt5'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.fb_page_id,
                  name: 'fb_page_id',
                  placeholder: t('messenger-txt6'),
                  onInput: handleChange
                })
              ])
            }
          },
          {
            title: t('messenger-txt7'),
            render: () =>
              h('div', null, [
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.fb_page_access_token,
                  name: 'fb_page_access_token',
                  placeholder: t('messenger-txt8'),
                  onInput: handleChange
                })
              ])
          },
          {
            title: t('messenger-txt9'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h(CopyText, {
                  type: 'gray',
                  class: 'w-full h-[36px]',
                  text: `https://api.pinchat.me/api/fbmsg/webhook/${token.value}`
                })
              ])
            }
          },
          {
            title: t('messenger-txt10')
          }
        ]
      },
      instagram: {
        title: t('instagram-txt1'),
        subtitle: h(
          'div',
          {
            class: 'text-[#939393]'
          },
          [
            h('span', null, t('instagram-txt2')),
            h('span', null, t('instagram-txt3')),
            h(
              'a',
              {
                class: 'underline text-primary',
                href: instagramArticle.value,
                target: '_blank'
              },
              t('instagram-txt3-1')
            ),
            h('span', null, t('instagram-txt3-2'))
          ]
        ),
        steps: [
          {
            title: t('instagram-txt4')
          },
          {
            title: t('instagram-txt5'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.ig_page_id,
                  name: 'ig_page_id',
                  placeholder: t('instagram-txt6'),
                  onInput: handleChange
                })
              ])
            }
          },
          {
            title: t('instagram-txt7'),
            render: () =>
              h('div', null, [
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.ig_page_access_token,
                  name: 'ig_page_access_token',
                  placeholder: t('instagram-txt8'),
                  onInput: handleChange
                })
              ])
          },
          {
            title: t('instagram-txt9'),
            render: () => {
              return h('div', { class: 'flex flex-col' }, [
                h(CopyText, {
                  type: 'gray',
                  class: 'w-full h-[36px]',
                  text: `https://api.pinchat.me/api/instagram/webhook/${token.value}`
                })
              ])
            }
          },
          {
            title: t('messenger-txt10')
          }
        ]
      },
      slack: {
        title: t('slack-txt1'),
        subtitle: h(
          'div',
          {
            class: 'text-[#939393]'
          },
          [
            h('span', null, t('slack-txt2')),
            h('span', null, t('slack-txt3')),
            h(
              'a',
              {
                class: 'underline text-primary',
                href: slackArticle.value,
                target: '_blank'
              },
              t('slack-txt3-1')
            ),
            h('span', null, t('slack-txt3-2'))
          ]
        ),
        steps: [
          {
            title: () =>
              h('div', null, [
                h('span', null, t('slack-txt4')),
                h(
                  'a',
                  {
                    class: 'underline text-primary',
                    href: 'https://slack.com/apps/A0F7XDUAZ-incoming-webhooks?tab=more_info',
                    target: '_blank'
                  },
                  t('slack-txt4-1')
                ),
                h('span', null, t('slack-txt4-2'))
              ])
          },
          {
            title: t('slack-txt5')
          },
          {
            title: t('slack-txt6'),
            render: () =>
              h('div', null, [
                h(FormInput, {
                  inputClass: 'bg-[#f6f6f6]',
                  modelValue: config.value.slack_webhook_url,
                  name: 'slack_webhook_url',
                  placeholder: t('slack-txt7'),
                  onInput: handleChange
                })
              ])
          },
          {
            title: t('slack-txt8')
          }
        ]
      }
    } as {
      [key in ConnectType]: {
        title: string
        subtitle: ReturnType<typeof h>
        steps?: StepItem[]
      }
    }
  })
  const whatApp2Config = computed(() => {
    return dictionary.value['what-app-2']
  })

  const fetchConfig = () => {
    return enterpointsConfigStore.fetchConfig(token.value)
  }
  const updateConfig = (input: IUpdateEnterpointConfigInput) => {
    enterpointsConfigStore.updateConfig(input)
  }
  const handleChange = (data: FormInputOnInputParams) => {
    updateConfig({
      key: data.name as keyof typeof config.value,
      value: data.value
    })
  }
  const getSubmitForm = () => {
    const form: ISubmitForm = {}
    if (type === 'line') {
      form.line_messaging_channel_access_token =
        config.value.line_messaging_channel_access_token
    }
    if (type === 'what-app') {
      form.whatsapp_phone_number_id = config.value.whatsapp_phone_number_id
      form.whatsapp_access_token = config.value.whatsapp_access_token
    }
    if (type === 'messenger') {
      form.fb_page_id = config.value.fb_page_id
      form.fb_page_access_token = config.value.fb_page_access_token
    }
    if (type === 'instagram') {
      form.ig_page_id = config.value.ig_page_id
      form.ig_page_access_token = config.value.ig_page_access_token
    }
    if (type === 'slack') {
      form.slack_webhook_url = config.value.slack_webhook_url
    }
    return form
  }
  const saveConfig = async (form: ISubmitForm) => {
    try {
      btnLoading.value = true
      await axios.post('/dashboard/enterpoint', {
        id: config.value?.id,
        token: token.value,
        name: config.value?.name,
        is_valid: true,
        ...form
      })
      notificationsStore.showSuccess({
        title: t('api-message')
      })
      await fetchConfig()
    } catch (error) {
      console.log('error', error)
    } finally {
      btnLoading.value = false
    }
  }
  const onSubmit = () => {
    const form = getSubmitForm()
    saveConfig(form)
  }
  const disconnectLineToken = () => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('disconnect-line-modal-title'),
      content: t('disconnect-line-modal-message'),
      cancelButtonText: t('disconnect-line-modal-cancel-btn'),
      confirmButtonText: t('disconnect-line-modal-confirm-btn'),
      onSubmit: () => {
        saveConfig({
          line_messaging_channel_access_token: ''
        })
      }
    })
  }
  const disconnectWhatAppToken = () => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('disconnect-line-modal-title'),
      content: t('disconnect-line-modal-message'),
      cancelButtonText: t('disconnect-line-modal-cancel-btn'),
      confirmButtonText: t('disconnect-line-modal-confirm-btn'),
      onSubmit: () => {
        saveConfig({
          whatsapp_phone_number_id: '',
          whatsapp_access_token: ''
        })
      }
    })
  }
  const disconnectMessageToken = () => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('enterpoint-modal-confirm-disconnect-title'),
      content: t('enterpoint-modal-confirm-disconnect-desc'),
      cancelButtonText: t('enterpoint-modal-confirm-disconnect-cacel'),
      confirmButtonText: t('enterpoint-modal-confirm-disconnect-leave'),
      onSubmit: () => {
        saveConfig({
          fb_page_id: '',
          fb_page_access_token: ''
        })
      }
    })
  }
  const disconnectIgToken = () => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('enterpoint-modal-confirm-disconnect-title'),
      content: t('enterpoint-modal-confirm-disconnect-desc'),
      cancelButtonText: t('enterpoint-modal-confirm-disconnect-cacel'),
      confirmButtonText: t('enterpoint-modal-confirm-disconnect-leave'),
      onSubmit: () => {
        saveConfig({
          ig_page_id: '',
          ig_page_access_token: ''
        })
      }
    })
  }
  const disconnectSlackToken = () => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('enterpoint-modal-confirm-disconnect-title'),
      content: t('enterpoint-modal-confirm-disconnect-desc-slack'),
      cancelButtonText: t('enterpoint-modal-confirm-disconnect-cacel'),
      confirmButtonText: t('enterpoint-modal-confirm-disconnect-leave'),
      onSubmit: () => {
        saveConfig({
          slack_webhook_url: ''
        })
      }
    })
  }
  const whetherLeave = ({ onSubmit }: { onSubmit?: () => void }) => {
    useDeleteModalStore().showModal({
      deleteType: 'callback',
      title: t('enterpoint-modal-confirm-back-title'),
      content: t('enterpoint-modal-confirm-back-desc'),
      icon: 'MinusCircle',
      iconColor: 'text-primary',
      cancelButtonText: t('enterpoint-modal-confirm-back-cacel'),
      confirmButtonText: t('enterpoint-modal-confirm-back-leave'),
      onSubmit: () => {
        onSubmit && onSubmit()
      }
    })
  }

  return {
    title: computed(() => {
      if (!type) return ''
      return dictionary.value[type].title
    }),
    subtitle: computed(() => {
      if (!type) return ''
      return dictionary.value[type].subtitle
    }),
    steps: computed(() => {
      if (!type) return []
      return dictionary.value[type].steps
    }),
    config,
    originalConfig: computed(() => enterpointsConfigStore.originData),
    whatApp2Config,
    fetchConfig,
    isDifferent: computed(() => enterpointsConfigStore.isDifferent),
    onSubmit,
    btnLoading,
    disconnectLineToken,
    disconnectWhatAppToken,
    disconnectMessageToken,
    disconnectIgToken,
    disconnectSlackToken,
    whetherLeave
  }
}
