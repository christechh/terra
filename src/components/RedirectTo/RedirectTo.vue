<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed, watchEffect, watch } from 'vue'
import { useRedirectToStore } from '../../stores/redirect-to'

const router = useRouter()

watch(
  () => useRedirectToStore().version,
  () => {
    router.push(useRedirectToStore().path)
  }
)
</script>

<template>
  <div style="display: none">
    <div>Redirect To 元件</div>
  </div>
</template>
