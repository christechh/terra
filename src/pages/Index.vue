<script setup lang="ts">
import _ from 'lodash'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">首頁</h2>
  <div>
    <br />
    <DarkModeSwitcher />
    <div>{{ $t('hello') }} 登入頁面 /dashboard/login</div>
  </div>
</template>
