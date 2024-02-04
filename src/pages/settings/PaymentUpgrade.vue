<script setup lang="ts">
import { onMounted } from 'vue'
import Lucide from '../../base-components/Lucide/Lucide.vue'
import { FormCheck, InputGroup } from '../../base-components/Form'
import FormInput from '../../base-components/Form/FormInput.vue'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import ContryCodePicker from '../../components/ContryCodePicker'
import usePaymentUpgrade from './composables/usePaymentUpgrade'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const {
  phoneCode,
  paymentInfo,
  activePlan,
  showDiscount,
  discountPrice,
  totalPrice,
  isShowLinePayRadio,
  tapPayKey,
  errorMessage,
  paymentErrorMsg,
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
} = usePaymentUpgrade()

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
        <!-- 小計 -->
        <div
          v-if="showDiscount"
          class="mt-2.5 flex items-center justify-between text-base text-[#939393]"
        >
          <p>{{ $t('paymnet_upgrade19-1') }}</p>
          <p>
            <span>{{ $t('pricing-plan251') }}</span>
            <span>{{ $t(activePlan?.price ?? '') }}</span>
            <span>{{ $t('pricing-plan253') }}</span>
          </p>
        </div>
        <!-- 折扣 -->
        <div
          v-if="showDiscount"
          class="mt-2.5 flex items-center justify-between text-base text-[#939393]"
        >
          <p>{{ $t('paymnet_upgrade19-2') }}</p>
          <p>
            <span>-</span>
            <span>{{ $t('pricing-plan251') }}</span>
            <span>{{ discountPrice }}</span>
          </p>
        </div>
        <!-- 總計 -->
        <div
          class="mt-2.5 flex items-center justify-between text-xl text-[#02b13f]"
        >
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
        <div class="rounded-[20px] bg-white p-4 shadow-xl dark:bg-darkmode-600">
          <div class="md:flex">
            <div class="flex flex-1 p-4">
              <FormLabel
                class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
              >
                {{ $t('payment-name') }}
              </FormLabel>
              <FormInput
                v-model="paymentInfo.name"
                :placeholder="$t('paymnet_upgrade25')"
                class="col-span-3"
              />
            </div>
            <div class="flex flex-1 p-4">
              <FormLabel
                class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
              >
                {{ $t('client-list-phone-number') }}
              </FormLabel>
              <InputGroup class="col-span-3">
                <ContryCodePicker
                  v-model="phoneCode"
                  :white="true"
                  class="shadow-sm dark:bg-darkmode-800"
                />
                <FormInput
                  v-model="paymentInfo.phone"
                  :placeholder="$t('912 345 678')"
                  class="col-span-3"
                />
              </InputGroup>
            </div>
          </div>
          <div class="flex p-4">
            <FormLabel
              class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
              >{{ $t('payment-email') }}</FormLabel
            >
            <FormInput
              v-model="paymentInfo.email"
              :placeholder="$t('paymnet_upgrade28')"
              :class="[
                'col-span-3',
                _verEmail(paymentInfo.email) ? '' : 'text-red-500'
              ]"
            />
          </div>

          <div
            v-show="paymentInfo.payment_type === 1"
            class="flex w-full justify-center p-4"
          >
            <FormLabel
              class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
            >
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
              <FormLabel
                class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
              >
                {{ $t('paymnet_upgrade30') }}
              </FormLabel>
              <div
                :key="tapPayKey"
                class="tappay h-[40px] w-full flex-1 rounded-md p-3 shadow-sm dark:bg-darkmode-800 dark:text-white"
                id="card-expiration-date"
              ></div>
            </div>
            <div class="flex flex-1 p-4">
              <FormLabel
                class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
              >
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
        <div class="rounded-[20px] bg-white p-4 shadow-xl dark:bg-darkmode-600">
          <div class="flex w-full flex-wrap items-center p-4 md:flex-nowrap">
            <div class="relative flex w-full md:mr-8 md:w-[50%]">
              <FormLabel
                class="mb-0 mt-2 flex-shrink-0 whitespace-nowrap pr-[15px] text-end md:w-[100px]"
              >
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
                  class="absolute mt-1 text-[12px] text-red-500"
                >
                  {{ errorMessage }}
                </p>
                <div
                  v-if="successDiscount.discount_value"
                  class="absolute mt-1 text-[12px] text-primary"
                >
                  <p v-if="successDiscount.type === 'all_rules'">
                    {{
                      $t('paymnet_upgrade53', {
                        x: successDiscount.discount_value
                      }) + ')'
                    }}
                  </p>
                  <p v-else>
                    <span v-if="showDiscount">
                      {{
                        $t('paymnet_upgrade50', {
                          x: successDiscount.discount_value
                        })
                      }}
                    </span>
                    <span v-if="!showDiscount">
                      {{ $t('paymnet_upgrade57') }}
                      {{
                        '(' +
                        $t('payment-free-trial', {
                          x: successDiscount.discount_value
                        }) +
                        ')'
                      }}
                    </span>
                    <span v-if="successDiscount.discount_type === 'percentage'"
                      >{{ $t('paymnet_upgrade51') + ')' }}
                    </span>
                    <span v-if="successDiscount.discount_type === 'cash'"
                      >{{ $t('paymnet_upgrade52') + ')' }}
                    </span>
                  </p>
                </div>
                <div
                  v-show="paymentInfo.coupon_code"
                  class="absolute right-3 top-1/2 flex -translate-y-1/2"
                >
                  <div
                    class="cursor-pointer rounded-full bg-[#bfbfbf] p-1 text-white"
                    @click="resetCoupon"
                  >
                    <Lucide icon="X" :size="9" class="stroke-[3]"></Lucide>
                  </div>
                  <Lucide
                    v-if="successDiscount.discount_type"
                    icon="Check"
                    :size="18"
                    class="ml-2 stroke-[4] text-primary"
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
                'mx-auto my-0 w-[100px] rounded-lg p-[10px_18px] font-semibold transition-all duration-300 md:m-0',
                disabledUseCouponBtn
                  ? 'bg-[#eeeeee] text-[#898e99]'
                  : 'bg-[#02b13f] text-white',
                errorMessage || successDiscount.discount_type ? 'mt-8' : 'mt-4'
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
          <a href="https://pinchat.me/contact" target="_blank">
            <span class="text-[#02b13f]">
              {{ $t('paymnet_upgrade391') }}
            </span>
          </a>
        </p>
        <!-- 三聯式 -->
        <div
          v-if="paymentInfo.invoice_type === 1"
          class="rounded-[20px] bg-white p-4 shadow-xl dark:bg-darkmode-600"
        >
          <div class="flex w-full justify-center p-4">
            <FormLabel
              class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
            >
              {{ $t('paymnet_upgrade35') }}
            </FormLabel>
            <FormInput
              v-model="paymentInfo.invoice_title"
              :placeholder="$t('paymnet_upgrade36')"
              class="col-span-3"
            />
          </div>
          <div class="flex w-full justify-center p-4">
            <FormLabel
              class="mb-0 mt-2 w-[100px] flex-shrink-0 pr-[15px] text-end"
            >
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
      <div :class="['relative', paymentErrorMsg ? 'mb-10' : 'mb-5']">
        <button
          @click="() => (disabledSubmitBtn ? {} : _handleSubmitToPay())"
          :class="[
            'w-full rounded-lg p-[12px_18px] font-semibold transition-all duration-300',
            disabledSubmitBtn
              ? 'bg-[#eeeeee] text-[#898e99]'
              : 'bg-[#02b13f] text-white hover:bg-[#028e81]'
          ]"
        >
          {{ $t('payment-check-out') }}
        </button>
        <p
          v-if="paymentErrorMsg"
          class="absolute mt-1 text-[12px] text-red-500"
        >
          {{ paymentErrorMsg }}
        </p>
      </div>
      <!-- 注意事項 -->
      <ul class="list-inside list-disc text-xs leading-5 text-[#939393]">
        <li>{{ $t('paymnet_upgrade41') }}</li>
        <li>
          <span class="mr-1">{{ $t('paymnet_upgrade42') }}</span>
          <a
            href="https://pinchat.me/zh-tw/terms"
            target="_blank"
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
