<script setup lang="ts">
import DarkModeSwitcher from './components/DarkModeSwitcher/DarkModeSwitcher.vue'
import RedirectTo from './components/RedirectTo/RedirectTo.vue'
</script>
<template>
  <RouterView />
  <DarkModeSwitcher />
  <RedirectTo />
</template>
