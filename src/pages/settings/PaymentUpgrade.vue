<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDarkModeStore } from '../../stores/dark-mode'
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Lucide from '../../base-components/Lucide/Lucide.vue'
import { FormCheck, InputGroup } from '../../base-components/Form'
import usePaymentUpgrade from './composables/usePaymentUpgrade'
import FormInput from '../../base-components/Form/FormInput.vue'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import ContryCodePicker from '../../components/ContryCodePicker'
import axios from '../../axios'
import countryCodes, { CountryProperty } from 'country-codes-list'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

const { locale } = useI18n()
const { phoneCode, paymentInfo, cardInfo } = usePaymentUpgrade()
const route = useRoute()
const query = route.query

// phone code
const myCountryCodesObject = countryCodes.customList(
  'countryCode' as CountryProperty,
  '{countryNameEn}({countryNameLocal}) +{countryCallingCode}'
)
const countriesCodeList = Object.entries(myCountryCodesObject)
  .map(([key, value]) => {
    return {
      country: key,
      name: value,
      phoneCode: `+${value.split('+')[1]}`
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))
const _initCountryCode = () => {
  let activeLang = ''
  switch (locale.value) {
    case 'en-US':
      activeLang = 'US'
      break

    case 'ja-JP':
      activeLang = 'JP'
      break

    case 'zh-TW':
      activeLang = 'TW'
      break
  }

  const findCountry = countriesCodeList.find(
    (item) => item.country === activeLang
  )
  phoneCode.value = findCountry ? findCountry.phoneCode : ''
}

const darkModeStore = useDarkModeStore()
const { darkModeValue } = storeToRefs(darkModeStore)
const tapPayKey = ref(0)
const resetTapPay = () => {
  tapPayKey.value++
  nextTick(() => {
    _initTapPaySDK()
  })
}
watch(darkModeValue, () => {
  resetTapPay()
})

// pay sdk
const _initTapPaySDK = () => {
  const TAPPAY_APP_ID = Number(import.meta.env.VITE_TAPPAY_APP_ID)
  const TAPPAY_APP_KEY = import.meta.env.VITE_TAPPAY_APP_KEY
  TPDirect.setupSDK(TAPPAY_APP_ID, TAPPAY_APP_KEY, 'production')

  const fields = {
    number: {
      element: '#card-number',
      placeholder: '**** **** **** ****'
    },
    expirationDate: {
      element: '#card-expiration-date',
      placeholder: 'MM / YY'
    },
    ccv: {
      element: '#card-ccv',
      placeholder: '***'
    }
  }

  TPDirect.card.setup({
    fields,
    styles: {
      input: {
        color: darkModeValue.value ? 'white' : '#2d3748',
        'font-size': '14px',
        'font-family': 'System UI'
      },
      '::placeholder': {
        color: darkModeValue.value ? '#55637b' : 'rgba(0, 0, 0, 0.25)'
      },
      '.valid': {
        color: darkModeValue.value ? 'white' : '#2d3748'
      },
      '.invalid': {
        color: 'red',
        border: '5px solid gray',
        'border-color': 'red'
      }
    }
  })

  TPDirect.card.onUpdate(function (update) {
    cardInfo.number = update.status.number || ''
    cardInfo.expiry = update.status.expiry || ''
    cardInfo.ccv = update.status.ccv || ''
  })
}

// active plan
type PlanType = {
  type: string
  plan_uid: string
  price: string
  version: string
  description: string
  content: string[]
}
const plans: PlanType[] = [
  {
    type: 'package750',
    plan_uid: 'starter_month',
    price: 'pricing-addnew5',
    version: 'pricing-plan10',
    description: 'pricing-addnew6',
    content: [
      'pricing-plan14',
      'paymnet_upgrade4',
      'paymnet_upgrade5',
      'paymnet_upgrade6',
      'paymnet_upgrade7'
    ]
  },
  {
    type: 'package1200',
    plan_uid: 'light_month',
    price: 'pricing-addnew13',
    version: 'pricing-addnew12',
    description: 'pricing-addnew14',
    content: ['pricing-plan14', 'pricing-addnew15', 'pricing-addnew16']
  },
  {
    type: 'package1800',
    plan_uid: 'standard2_month',
    price: 'pricing-addnew18',
    version: 'pricing-addnew17',
    description: 'pricing-addnew19',
    content: [
      'pricing-plan14',
      'pricing-addnew20',
      'pricing-addnew21',
      'custom-domain-title',
      'pricing-addnew11'
    ]
  }
]
const activePlan = ref<PlanType>({
  type: '',
  plan_uid: '',
  price: '',
  version: '',
  description: '',
  content: []
})
const _initActivePlan = () => {
  const findPlan = plans.find((item) => item.type === query.type)
  if (findPlan) activePlan.value = { ...findPlan }
  paymentInfo.uid = activePlan.value.plan_uid ?? ''
}

// line pay radio
const isShowLinePayRadio = ref(false)
const _initShowLinePayRadio = () => {
  const showLangList: string[] = ['zh-TW', 'ja', 'th']
  if (showLangList.includes(locale.value)) {
    isShowLinePayRadio.value = true
  } else {
    isShowLinePayRadio.value = false
  }
}

// coupon
const disabledUseCouponBtn = computed(() =>
  paymentInfo.coupon_code ? false : true
)

const errorMessage = ref('')
const successDiscount = ref({
  discount_value: 0,
  discount_type: ''
})
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipInterceptor?: boolean
}

type Error = {
  response?: {
    data?: {
      message?: string
    }
  }
}

async function _handleUseCoupon(code: string) {
  try {
    errorMessage.value = ''
    const { data } = await axios.get(`/coupon/checkAvailable/${code}`, {
      skipInterceptor: true
    } as CustomAxiosRequestConfig)
    const { discount_value, discount_type } = data.data
    successDiscount.value = { discount_value, discount_type }
  } catch (error: unknown) {
    // console.log(error)
    errorMessage.value = (error as Error)!.response?.data?.message as string
  }
}

const { t } = useI18n()

const discountPrice = computed(() => {
  const { discount_type, discount_value } = successDiscount.value
  if (discount_type === 'percent')
    return Number(t(activePlan.value.price ?? '')) * (discount_value / 100)
  return discount_value || 0
})

const totalPrice = computed(() => {
  const { discount_type, discount_value } = successDiscount.value
  if (!discount_value) return t(activePlan.value.price ?? '')
  if (discount_type === 'percent')
    return Number(t(activePlan.value.price ?? '')) * (1 - discount_value / 100)
  return Number(t(activePlan.value.price ?? '')) - discount_value
})

async function resetCoupon() {
  paymentInfo.coupon_code = ''
  errorMessage.value = ''
  successDiscount.value = {
    discount_value: 0,
    discount_type: ''
  }
}

watch(
  () => paymentInfo.coupon_code,
  () => {
    successDiscount.value = {
      discount_value: 0,
      discount_type: ''
    }
  }
)

// verify email
const _verEmail = (email: string) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

// set disable submit button
const disabledSubmitBtn = ref(true)
const _handleDisabledSubmitBtn = () => {
  const { payment_type } = paymentInfo
  if (payment_type === 1) return _checkCardInfo()
  _checkLinePayInfo()
}
const _checkCardInfo = () => {
  const { name, phone, email } = paymentInfo
  const { number, expiry, ccv } = cardInfo
  if (
    name &&
    phone &&
    _verEmail(email) &&
    number === '' &&
    expiry === '' &&
    ccv === ''
  ) {
    _checkInvoiceInfo()
  } else {
    disabledSubmitBtn.value = true
  }
}
const _checkLinePayInfo = () => {
  const { name, phone, email } = paymentInfo
  if (name && phone && _verEmail(email)) {
    _checkInvoiceInfo()
  } else {
    disabledSubmitBtn.value = true
  }
}
const _checkInvoiceInfo = () => {
  const { invoice_type, invoice_title, uniform_invoice_numbers } = paymentInfo
  // 二聯發票
  if (invoice_type !== 1) return (disabledSubmitBtn.value = false)

  // 三聯發票
  if (invoice_title && uniform_invoice_numbers) {
    disabledSubmitBtn.value = false
  } else {
    disabledSubmitBtn.value = true
  }
}
watch(
  [paymentInfo, cardInfo],
  () => {
    _handleDisabledSubmitBtn()
  },
  { deep: true }
)

interface payResponse extends AxiosResponse {
  payment_url: string
}

// go to pay
async function callAPI(prime: string) {
  try {
    paymentInfo.prime = prime
    const response = await axios.post('/payment', paymentInfo)
    TPDirect.redirect((response as payResponse)?.payment_url)
    disabledSubmitBtn.value = false
  } catch (err) {
    // console.log(err)
    disabledSubmitBtn.value = false
  }
}

async function _handleSubmitToPay() {
  const { payment_type } = paymentInfo
  disabledSubmitBtn.value = true
  try {
    if (payment_type === 0) {
      TPDirect.linePay.getPrime(function (result) {
        callAPI(result.prime)
      })
    } else {
      TPDirect.card.getPrime((result) => {
        const tappayStatus = TPDirect.card.getTappayFieldsStatus()

        // 確認是否可以 getPrime
        if (tappayStatus.canGetPrime === false) {
          // alert('can not get prime')
          return
        }
        if (result.status !== 0) {
          // alert('get prime error ' + result.msg)
          return
        }
        // alert('get prime 成功，prime: ' + result.card.prime)
        callAPI(result?.card?.prime)
      })
    }
  } catch (error) {
    // console.log('error', error)
  }
}

// init
onMounted(() => {
  _initCountryCode()
  _initShowLinePayRadio()
  _initTapPaySDK()
  _initActivePlan()
})
</script>

<template>
  <div
    class="flex min-h-screen w-full flex-wrap sm:-ml-6 lg:-m-4 lg:flex-nowrap"
  >
    <!-- 升級版本資訊 -->
    <div
      class="w-full py-8 pl-2 pr-2 md:pl-6 md:pr-6 lg:max-w-[33.333333%] lg:flex-[0_0_33.333333%]"
    >
      <RouterLink to="/dashboard/settings/princing_plan">
        <div class="mb-1 flex cursor-pointer items-center">
          <Lucide icon="ChevronLeft" :size="20" class="stroke-2" />
          <p>{{ $t('back-button') }}</p>
        </div>
      </RouterLink>
      <div class="mb-4 flex justify-center">
        <b class="text-2xl font-black text-[#02b13f]">
          {{ $t(activePlan?.version ?? '') }}
        </b>
      </div>
      <div class="px-2">
        <div>
          <div
            v-for="(item, idx) in activePlan?.content"
            :key="`planContent${idx}`"
          >
            <div class="mb-2.5 flex">
              <div class="mr-4 rounded-full bg-[#e6f7ec] p-1 text-[#03b240]">
                <Lucide icon="Check" :size="12" />
              </div>
              <div class="flex-1">
                {{ $t(item) }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-[rgba(0, 0, 0, 0.25)] my-8 w-full border-[0.5px] border-solid"
        ></div>
        <div
          v-if="successDiscount.discount_value"
          class="flex items-center justify-between text-base text-[#939393]"
        >
          <p>{{ $t('paymnet_upgrade19-1') }}</p>
          <p>
            <span>{{ $t('pricing-plan251') }}</span>
            <span>{{ $t(activePlan?.price ?? '') }}</span>
            <span>{{ $t('pricing-plan253') }}</span>
          </p>
        </div>
        <div
          v-if="successDiscount.discount_value"
          class="flex items-center justify-between text-base text-[#939393]"
        >
          <p>{{ $t('paymnet_upgrade19-2') }}</p>
          <p>
            <span>-</span>
            <span>{{ $t('pricing-plan251') }}</span>
            <span>{{ discountPrice }}</span>
          </p>
        </div>
        <div class="flex items-center justify-between text-xl text-[#02b13f]">
          <b>{{ $t('paymnet_upgrade19-3') }}</b>
          <b class="font-black">
            <span>{{ $t('pricing-plan251') }}</span>
            <span>{{ totalPrice }}</span>
            <span>{{ $t('pricing-plan253') }}</span>
          </b>
        </div>
      </div>
    </div>

    <div
      class="h-full w-full bg-[#f8f8f8] p-4 dark:bg-darkmode-700 md:mr-[-3rem] md:p-8 md:pr-[70px]"
    >
      <!-- 付款方式 -->
      <div class="mb-10">
        <div class="mb-2.5 text-xl">{{ $t('payment-payment') }}</div>
        <div class="mb-2.5 flex items-center">
          <FormCheck class="col-span-1 mr-4">
            <FormCheck.Input
              id="creditCard"
              type="radio"
              name="paymnet_type"
              v-model="paymentInfo.payment_type"
              :value="1"
            />
            <FormCheck.Label htmlFor="creditCard">
              {{ $t('paymnet_upgrade22') }}
            </FormCheck.Label>
          </FormCheck>
          <FormCheck v-if="isShowLinePayRadio" class="col-span-1">
            <FormCheck.Input
              id="linePay"
              type="radio"
              name="paymnet_type"
              v-model="paymentInfo.payment_type"
              :value="0"
            />
            <FormCheck.Label htmlFor="linePay">
              {{ $t('paymnet_upgrade23') }}
            </FormCheck.Label>
          </FormCheck>
        </div>
        <div
          class="rounded-[20px] bg-white p-4 shadow-xl dark:bg-darkmode-600 md:p-6 md:pl-10"
        >
          <div class="md:flex">
            <div class="flex flex-1 p-4">
              <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
                {{ $t('payment-name') }}
              </FormLabel>
              <FormInput
                v-model="paymentInfo.name"
                :placeholder="$t('paymnet_upgrade25')"
                class="col-span-3"
              />
            </div>
            <div class="flex flex-1 p-4">
              <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
                {{ $t('client-list-phone-number') }}
              </FormLabel>
              <InputGroup class="col-span-3">
                <ContryCodePicker v-model="phoneCode" />
                <FormInput
                  v-model="paymentInfo.phone"
                  :placeholder="$t('912 345 678')"
                  class="col-span-3"
                  type="text"
                />
              </InputGroup>
            </div>
          </div>
          <div class="flex p-4">
            <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">{{
              $t('payment-email')
            }}</FormLabel>
            <FormInput
              v-model="paymentInfo.email"
              :placeholder="$t('paymnet_upgrade28')"
              :class="[
                'col-span-3',
                _verEmail(paymentInfo.email) ? '' : 'text-red-500'
              ]"
            />
          </div>

          <div v-show="paymentInfo.payment_type === 1" class="flex w-full p-4">
            <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
              {{ $t('paymnet_upgrade29') }}
            </FormLabel>
            <div
              :key="tapPayKey"
              class="tappay h-[40px] w-full flex-1 rounded-md p-3 shadow-sm dark:bg-darkmode-800 dark:text-white"
              id="card-number"
            ></div>
          </div>
          <div class="md:flex" v-show="paymentInfo.payment_type === 1">
            <div class="flex flex-1 p-4">
              <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
                {{ $t('paymnet_upgrade30') }}
              </FormLabel>
              <div
                :key="tapPayKey"
                class="tappay h-[40px] w-full flex-1 rounded-md p-3 shadow-sm dark:bg-darkmode-800 dark:text-white"
                id="card-expiration-date"
              ></div>
            </div>
            <div class="flex flex-1 p-4">
              <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
                {{ $t('paymnet_upgrade31') }}
              </FormLabel>
              <div
                :key="tapPayKey"
                class="tappay h-[40px] w-full flex-1 rounded-md p-3 shadow-sm dark:bg-darkmode-800 dark:text-white"
                id="card-ccv"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 使用折扣碼 -->
      <div class="mb-10">
        <div class="mb-2.5 text-xl">{{ $t('paymnet_upgrade46') }}</div>
        <div
          class="rounded-[20px] bg-white p-3 shadow-xl dark:bg-darkmode-600 md:pl-10"
        >
          <div class="flex w-full p-4 text-center">
            <div class="relative m-2 flex w-full md:mr-8 md:w-[70%]">
              <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
                {{ $t('paymnet_upgrade47') }}
              </FormLabel>
              <div class="relative h-fit w-full">
                <FormInput
                  v-model="paymentInfo.coupon_code"
                  :placeholder="$t('paymnet_upgrade48')"
                  :maxlength="15"
                  :class="[
                    'col-span-3',
                    errorMessage &&
                      'rounded-lg border border-solid border-red-400'
                  ]"
                />
                <p
                  v-if="errorMessage"
                  class="absolute ml-1 mt-1 text-[12px] text-red-500"
                >
                  {{ errorMessage }}
                </p>
                <p
                  v-if="successDiscount.discount_value"
                  class="absolute ml-1 mt-1 text-[12px] text-primary"
                >
                  {{
                    $t('paymnet_upgrade50', {
                      x: successDiscount.discount_value
                    })
                  }}
                  <span v-if="successDiscount.discount_type === 'percent'"
                    >{{ $t('paymnet_upgrade51') + ')' }}
                  </span>
                  <span v-else>{{ $t('paymnet_upgrade52') + ')' }}</span>
                </p>
                <div
                  v-show="!disabledUseCouponBtn"
                  class="absolute right-3 top-1/2 flex -translate-y-1/2"
                >
                  <div
                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-[#bfbfbf] p-1 text-white"
                    @click="resetCoupon"
                  >
                    x
                  </div>
                  <Lucide
                    v-if="successDiscount.discount_value"
                    icon="Check"
                    :size="18"
                    class="ml-2 text-primary"
                  ></Lucide>
                </div>
              </div>
            </div>

            <button
              @click="
                () =>
                  disabledUseCouponBtn
                    ? {}
                    : _handleUseCoupon(paymentInfo.coupon_code)
              "
              :class="[
                'm-2 mx-auto w-[100px] rounded-lg p-[12px_18px] font-semibold transition-all duration-300',
                disabledUseCouponBtn
                  ? 'bg-[#eeeeee] text-[#898e99]'
                  : 'bg-[#02813f] text-white'
              ]"
            >
              {{ $t('paymnet_upgrade49') }}
            </button>
          </div>
        </div>
      </div>
      <!-- 發票資訊 -->
      <div v-if="locale === 'zh-TW'" class="mb-10">
        <div class="mb-2.5 text-xl">
          {{ $t('payment-invoice-information') }}
        </div>
        <div class="mb-2.5 flex items-center">
          <FormCheck class="col-span-1 mr-4">
            <FormCheck.Input
              id="twoInvoice"
              type="radio"
              name="invoice_type"
              v-model="paymentInfo.invoice_type"
              :value="0"
            />
            <FormCheck.Label htmlFor="twoInvoice">
              {{ $t('paymnet_upgrade33') }}
            </FormCheck.Label>
          </FormCheck>
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="threeInvoice"
              type="radio"
              name="invoice_type"
              v-model="paymentInfo.invoice_type"
              :value="1"
            />
            <FormCheck.Label htmlFor="threeInvoice">
              {{ $t('paymnet_upgrade34') }}
            </FormCheck.Label>
          </FormCheck>
        </div>
        <!-- 二聯式 -->
        <p v-if="paymentInfo.invoice_type === 0">
          <span class="mr-2 text-[#939393]">{{ $t('paymnet_upgrade39') }}</span>
          <a href="https://pinchat.me/contact">
            <span class="text-[#02b13f]">
              {{ $t('paymnet_upgrade391') }}
            </span>
          </a>
        </p>
        <!-- 三聯式 -->
        <div
          v-if="paymentInfo.invoice_type === 1"
          class="bg rounded-[20px] bg-white p-3 shadow-xl dark:bg-darkmode-600 md:pl-10"
        >
          <div class="flex w-full p-4">
            <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
              {{ $t('paymnet_upgrade35') }}
            </FormLabel>
            <FormInput
              v-model="paymentInfo.invoice_title"
              :placeholder="$t('paymnet_upgrade36')"
              class="col-span-3"
            />
          </div>
          <div class="flex w-full p-4">
            <FormLabel class="mb-0 mr-2 mt-2 flex-shrink-0 text-end">
              {{ $t('paymnet_upgrade37') }}
            </FormLabel>
            <FormInput
              v-model="paymentInfo.uniform_invoice_numbers"
              :placeholder="$t('paymnet_upgrade38')"
              class="col-span-3"
            />
          </div>
        </div>
      </div>
      <!-- 確認付款 -->
      <div class="mb-5">
        <button
          @click="() => (disabledSubmitBtn ? {} : _handleSubmitToPay())"
          :class="[
            'w-full rounded-lg p-[12px_18px] font-semibold transition-all duration-300',
            disabledSubmitBtn
              ? 'bg-[#eeeeee] text-[#898e99]'
              : 'bg-[#02813f] text-white hover:bg-[#028e81]'
          ]"
        >
          {{ $t('payment-check-out') }}
        </button>
      </div>
      <!-- 注意事項 -->
      <ul class="list-inside list-disc text-xs leading-5 text-[#939393]">
        <li>{{ $t('paymnet_upgrade41') }}</li>
        <li>
          <span class="mr-1">{{ $t('paymnet_upgrade42') }}</span>
          <a
            href="https://pinchat.me/zh-tw/terms"
            class="cursor-pointer underline hover:text-[#02b13f]"
          >
            {{ $t('paymnet_upgrade421') }}
          </a>
        </li>
        <li>{{ $t('paymnet_upgrade43') }}</li>
      </ul>
    </div>
  </div>
</template>
