<script setup lang="ts">
import { computed, ref } from 'vue'
import CreateCompanyModal from '../components/Modals/CreateCompanyModal'
import useCompany from './settings/composables/useCompany'

const { companies } = useCompany()

const showCreateCompanyModal = ref(false)
const selectedCompanyIndex = ref(-1)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedCompany: any = computed(
  () => companies.value[selectedCompanyIndex.value] || null
)
</script>

<template>
  <div class="mt-5 grid grid-cols-12 gap-6">123</div>

  <CreateCompanyModal
    v-if="showCreateCompanyModal"
    @close="showCreateCompanyModal = false"
    :company="selectedCompany"
    :idx="selectedCompanyIndex"
  />
</template>
