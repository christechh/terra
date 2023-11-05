<script setup lang="ts">
import _ from 'lodash'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import { getColor } from '../utils/colors'
const primaryColor = getColor('primary', 0.9)
import designImg1 from '../assets/images/design-template/design-template1.png'
// import designImg2 from '../assets/images/design-template/design-template2.png'
import designImg3 from '../assets/images/design-template/design-template3.png'
</script>

<template>
  <h2 class="intro-y mt-10 text-lg font-medium">首頁</h2>
  <div>
    <div>{{ $t('hello') }} 登入頁面 /login</div>
    <br />
    <DarkModeSwitcher />
    <div :style="{ color: primaryColor }">
      store取得顏色方式: primaryColor = getColor('primary', 0.9) =>
      {{ primaryColor }}
    </div>
    <br />
    <br />
    <div>
      <div style="color: red">design template 使用方式</div>
      <div>
        (如果要自己定義,需要用到 tailwind.config.js 定義變數顏色 / _global.css
        定義共用css)
      </div>
      <br />
      <table style="width: 80%; text-align: left" class="table-border">
        <tr>
          <th style="width: 25%" class="table-border">class name</th>
          <th style="width: 25%" class="table-border">範例</th>
        </tr>
        <tr>
          <td class="table-border">.theme1-bg</td>
          <td class="table-border">
            <div class="theme1-bg" style="">.theme1-bg</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme1-font</td>
          <td class="table-border">
            <div class="theme1-font" style="">.theme1-font</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme1-border</td>
          <td class="table-border">
            <div
              class="theme1-border"
              style="border-style: dashed; border-width: 1px"
            >
              .theme1-border
            </div>
          </td>
        </tr>

        <tr>
          <td class="table-border">.theme2-bg</td>
          <td class="table-border">
            <div class="theme2-bg" style="">.theme2-bg</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme2-font</td>
          <td class="table-border">
            <div class="theme2-font" style="">.theme2-font</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme2-border</td>
          <td class="table-border">
            <div
              class="theme2-border"
              style="border-style: dashed; border-width: 1px"
            >
              .theme2-border
            </div>
          </td>
        </tr>

        <tr>
          <td class="table-border">.theme3-bg</td>
          <td class="table-border">
            <div class="theme3-bg" style="">.theme3-bg</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme3-font</td>
          <td class="table-border">
            <div class="theme3-font" style="">.theme3-font</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme3-border</td>
          <td class="table-border">
            <div
              class="theme3-border"
              style="border-style: dashed; border-width: 1px"
            >
              .theme3-border
            </div>
          </td>
        </tr>

        <tr>
          <td class="table-border">.theme4-bg</td>
          <td class="table-border">
            <div class="theme4-bg" style="">.theme4-bg</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme4-font</td>
          <td class="table-border">
            <div class="theme4-font" style="">.theme4-font</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme4-border</td>
          <td class="table-border">
            <div
              class="theme4-border"
              style="border-style: dashed; border-width: 1px"
            >
              .theme4-border
            </div>
          </td>
        </tr>

         <tr>
          <td class="table-border">.theme5-bg</td>
          <td class="table-border">
            <div class="theme5-bg" style="">.theme5-bg</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme5-font</td>
          <td class="table-border">
            <div class="theme5-font" style="">.theme5-font</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme5-border</td>
          <td class="table-border">
            <div
              class="theme5-border"
              style="border-style: dashed; border-width: 1px"
            >
              .theme5-border
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.warning-bg</td>
          <td class="table-border">
            <div class="warning-bg" style="">.warning-bg</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.warning-font</td>
          <td class="table-border">
            <div class="warning-font" style="">.warning-font</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.warning-border</td>
          <td class="table-border">
            <div
              class="warning-border"
              style="border-style: dashed; border-width: 1px"
            >
              .warning-border
            </div>
          </td>
        </tr>
        <tr style="height: 1rem">
          <td class="table-border">下方的是:依照定義設定單一class</td>
          <td class="table-border"></td>
        </tr>
        <tr>
          <td class="table-border">.disabled-font</td>
          <td class="table-border">
            <div class="disabled-font" style="">
              .disabled-font (disabled文字)
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.dashboard-bg</td>
          <td class="table-border">
            <div class="dashboard-bg" style="">.dashboard-bg(後台背景色)</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.content-bg</td>
          <td class="table-border">
            <div class="content-bg" style="">.content-bg(內容背景色)</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.theme-font</td>
          <td class="table-border">
            <div class="theme-font" style="">.theme-font (主題的文字顏色)</div>
          </td>
        </tr>
        <tr>
          <td class="table-border">.desc-font</td>
          <td class="table-border">
            <div class="desc-font" style="">.desc-font (說明文字的顏色)</div>
          </td>
        </tr>
        <tr style="height: 1rem">
          <td class="table-border">下方定義的是:複合式套用</td>
          <td class="table-border"></td>
        </tr>
        <tr>
          <td class="table-border">
            button:disabled, a:disabled, .button-disabled
          </td>
          <td class="table-border">
            <button disabled="true">button:disabled(disable按鈕底色)</button>
          </td>
        </tr>
        <tr>
          <td class="table-border">
            input[type='text'], input[type='password'], input[type='number'] bg
          </td>
          <td class="table-border">
            <input
              type="text"
              style="width: 100%"
              placeholder="input[type='text'](輸入框背景色)"
            />
          </td>
        </tr>
        <tr>
          <td class="table-border">
            input[type='text']::placeholder,
            input[type='password']::placeholder,
            input[type='number']::placeholder placeholder文字顏色
          </td>
          <td class="table-border">
            <input
              type="text"
              style="width: 100%"
              placeholder="input[type='text']::placeholder(placeholder 文字顏色)"
            />
          </td>
        </tr>
      </table>
    </div>
    <br />
    <div style="display: flex; justify-content: space-between">
      <img :src="designImg1" style="width: 63%" />
      <img :src="designImg3" style="width: 35%; height: 80%" />
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<style>
.table-border {
  border: 1px solid #000;
}
</style>
