import { computed, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { StepItem } from '../../Steps/StepItem'
import FormInput from '@/base-components/Form/FormInput.vue'
import CopyText from '@/components/CopyText/index.vue'
import { useLinkPage } from '../../../composables/useLinkPage'

export type ConnectType =
  | 'line'
  | 'what-app'
  | 'messenger'
  | 'instagram'
  | 'slack'

const connectTypes = [
  'line',
  'what-app',
  'messenger',
  'instagram',
  'slack'
] as const

export const useThird = (type: ConnectType) => {
  if (!connectTypes.includes(type)) {
    return {
      title: computed(() => ''),
      subtitle: computed(() => ''),
      steps: computed(() => [])
    }
  }

  const { t } = useI18n()
  const { token } = useLinkPage()

  const dictionary = computed(() => {
    return {
      line: {
        title: t('integrate-line-official-account'),
        subtitle: h('div', null, [
          h('span', null, t('connect-line-refer')),
          h(
            'a',
            {
              class: 'underline',
              href: 'https://funtek.notion.site/LINE-3619724eb9974bb48c163071248eee29', // TODO: 語系
              target: '_blank'
            },
            t('article-link')
          ),
          h('span', null, t('teaching'))
        ]),
        steps: [
          { title: t('line-connect-step1') },
          { title: t('line-connect-step2') },
          {
            title: t('line-connect-step3'),
            component: h('div', { class: 'flex flex-col' }, [
              h('span', { class: 'pb-2' }, 'Channel Access Token'),
              h(FormInput, {
                inputClass: 'bg-[#f6f6f6]'
              })
            ])
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
        subtitle: h('div', null, [
          h('span', null, t('what-app-txt2')),
          h('span', null, t('what-app-txt3')),
          h(
            'a',
            {
              class: 'underline',
              href: 'https://funtek.notion.site/LINE-3619724eb9974bb48c163071248eee29', // TODO: 語系
              target: '_blank'
            },
            t('what-app-txt3-1')
          ),
          h('span', null, t('what-app-txt3-2'))
        ]),
        steps: []
      },
      messenger: {
        title: t('integrate-messenger'),
        subtitle: h('div', null, '')
      },
      instagram: {
        title: t('integrate-instagram'),
        subtitle: h('div', null, '')
      },
      slack: {
        title: t('integrate-slack'),
        subtitle: h('div', null, '')
      }
    } as {
      [key in ConnectType]: {
        title: string
        subtitle: ReturnType<typeof h>
        steps?: StepItem[]
      }
    }
  })

  console.log('type', type)

  return {
    title: computed(() => dictionary.value[type].title),
    subtitle: computed(() => dictionary.value[type].subtitle),
    steps: computed(() => dictionary.value[type].steps)
  }
}
