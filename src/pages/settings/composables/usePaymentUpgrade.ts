import { storeToRefs } from 'pinia'
import { useDarkModeStore } from '../../../stores/dark-mode'
import { ref, reactive, watch, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import axios from '../../../axios'
import countryCodes, { CountryProperty } from 'country-codes-list'
import { AxiosRequestConfig } from 'axios'
type PaymentInfo = {
  uid: string
  phone: string
  name: string
  prime: string
  email: string
  invoice_title: string
  invoice_address: string
  uniform_invoice_numbers: string
  additional_rule: []
  ip: string
  user_agent: string
  payment_type: number
  invoice_type: number
  coupon_code: string
}
type CardInfo = {
  number: string | number
  ccv: string | number
  expiry: string | number
}
export default function usePaymentUpgrade() {
  const phoneCode = ref('')
  const paymentInfo = reactive<PaymentInfo>({
    uid: '',
    phone: '',
    name: '',
    prime: '',
    email: '',
    invoice_title: '',
    invoice_address: '',
    uniform_invoice_numbers: '',
    additional_rule: [],
    ip: '',
    user_agent: '',
    payment_type: 1, // 1:信用卡 0:line pay
    invoice_type: 0, // 0:二聯 1:三聯
    coupon_code: ''
  })
  const cardInfo = reactive<CardInfo>({
    number: 1,
    ccv: 1,
    expiry: 1
  })

  const { locale } = useI18n()
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
  const disabledUseCouponBtn = computed(() => {
    const disabled =
      !paymentInfo.coupon_code || errorMessage.value ? true : false
    return disabled
  })

  const errorMessage = ref('')
  const successDiscount = ref({
    type: '',
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
      const response = await axios.get(`/coupon/checkAvailable/${code}`, {
        skipInterceptor: true
      } as CustomAxiosRequestConfig)
      const { type, discount_value, discount_type } = response.data.data.data
      successDiscount.value = { type, discount_value, discount_type }
      console.log(successDiscount)
    } catch (error: unknown) {
      // console.log(error)
      errorMessage.value = (error as Error)!.response?.data?.message as string
    }
  }

  const { t } = useI18n()

  const discountPrice = computed(() => {
    const { discount_type, discount_value } = successDiscount.value
    if (discount_type === 'percentage')
      return Number(t(activePlan.value.price ?? '')) * (discount_value / 100)
    if (discount_type === 'cash') {
      return discount_value || 0
    }
    return ''
  })

  const totalPrice = computed(() => {
    const { discount_type, discount_value } = successDiscount.value
    if (discount_type === 'percentage')
      return (
        Number(t(activePlan.value.price ?? '')) * (1 - discount_value / 100)
      )
    if (discount_type === 'cash') {
      return Number(t(activePlan.value.price ?? '')) - discount_value
    }
    return t(activePlan.value.price ?? '')
  })

  const showDiscount = computed(() => {
    const showArray = ['cash', 'percentage']
    return showArray.includes(successDiscount.value.discount_type)
  })

  async function resetCoupon() {
    paymentInfo.coupon_code = ''
    errorMessage.value = ''
    successDiscount.value = {
      type: '',
      discount_value: 0,
      discount_type: ''
    }
  }

  watch(
    () => paymentInfo.coupon_code,
    () => {
      successDiscount.value = {
        type: '',
        discount_value: 0,
        discount_type: ''
      }
      errorMessage.value = ''
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

  // go to pay
  async function callAPI(prime: string) {
    try {
      paymentInfo.prime = prime
      const phone = `${phoneCode.value}${paymentInfo.phone}`
      const reqData = { ...paymentInfo, phone }
      const response = await axios.post('/payment', reqData)
      TPDirect.redirect(response?.data.payment_url)
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

  return {
    phoneCode,
    paymentInfo,
    activePlan,
    showDiscount,
    discountPrice,
    totalPrice,
    isShowLinePayRadio,
    tapPayKey,
    errorMessage,
    successDiscount,
    disabledUseCouponBtn,
    disabledSubmitBtn,
    _initCountryCode,
    _initShowLinePayRadio,
    _initTapPaySDK,
    _initActivePlan,
    _verEmail,
    resetCoupon,
    _handleUseCoupon,
    _handleSubmitToPay
  }
}
