<script setup lang="ts">
import Breadcrumb from '../../../base-components/Breadcrumb'
import { useLinkPage } from '../../../composables/useLinkPage'

const { token, routeTitle, linkDetailBaseSetting } = useLinkPage()
</script>

<template>
  <Breadcrumb>
    <Breadcrumb.Link to="/dashboard">
      {{ $t('my-pages') }}
    </Breadcrumb.Link>
    <Breadcrumb.Link active :to="linkDetailBaseSetting">
      {{ token }}
    </Breadcrumb.Link>
    <Breadcrumb.Link>{{ routeTitle }}</Breadcrumb.Link>
  </Breadcrumb>
</template>
