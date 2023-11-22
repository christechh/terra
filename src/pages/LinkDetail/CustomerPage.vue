<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Table from '../../base-components/Table'
import Breadcrumb from '../../base-components/Breadcrumb'
import { useTable } from '../../composables/useTable'

interface ITag {
  id: string
  name: string
}
interface ICustomer {
  chat_room_id: string
  avatar: string
  nickname: string
  joined_at: string
  sent_at: string
  tags: ITag[]
}

const route = useRoute()
const token = computed(() => {
  return route.query.token as string
})
const itemClass = computed(() => {
  return 'flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light_yellow'
})

const { list } = useTable<ICustomer>({
  url: `/chat/enterpoints/customer/${token.value}`,
  query: {
    token: route.query.token as string
  }
})
const routeTitle = computed(() => {
  return route.meta.title
})
const linkDetailBaseSetting = computed(() => {
  return `/dashboard/enterpoint?token=${token.value}&type=direct`
})
</script>

<template>
  <section>
    <Breadcrumb class="">
      <Breadcrumb.Link to="/dashboard">
        {{ $t('my-pages') }}
      </Breadcrumb.Link>
      <Breadcrumb.Link active :to="linkDetailBaseSetting">
        {{ token }}
      </Breadcrumb.Link>
      <Breadcrumb.Link>{{ routeTitle }}</Breadcrumb.Link>
    </Breadcrumb>
    <div class="mt-6 rounded-lg bg-white p-4">
      <!-- Optimize Table component with using config. This way is bad. -->
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th class="w-[90px]">{{ $t('client-avatar') }}</Table.Th>
            <Table.Th class="w-[140px]">{{ $t('client-nickname') }}</Table.Th>
            <Table.Th>{{ $t('client-joined-on') }}</Table.Th>
            <Table.Th>{{ $t('client-last-message') }}</Table.Th>
            <Table.Th>{{ $t('client-tags') }}</Table.Th>
            <Table.Th>{{ $t('client-enter-chat') }}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr
            v-for="(customer, index) in list"
            :key="customer.chat_room_id"
          >
            <Table.Td class="w-[90px]">
              <div
                class="h-[40px] w-[40px] overflow-hidden rounded-full bg-slate-100"
              >
                <img :src="customer.avatar" />
              </div>
            </Table.Td>
            <Table.Td class="w-[140px]">{{ customer.nickname }}</Table.Td>
            <Table.Td class="text-center">{{ customer.joined_at }}</Table.Td>
            <Table.Td class="text-center">{{ customer.sent_at }}</Table.Td>
            <Table.Td class="text-center">
              <span v-for="tag in customer.tags" :key="tag.id">
                {{ tag.name }}
              </span>
            </Table.Td>
            <Table.Td class="text-center">
              <div class="flex items-center justify-center gap-3">
                <a
                  :href="`/dashboard/chat?room=${token}&roomId=${customer.chat_room_id}`"
                  :class="itemClass"
                  target="_blank"
                >
                  <img
                    class="h-5 w-5"
                    src="@/assets/images/chat.png"
                    width="20"
                    height="20"
                    style="box-shadow: none; display: inline-flex"
                  />
                </a>
                <a :class="itemClass" href="#" :data-index="index">
                  <img
                    class="h-5 w-5"
                    src="@/assets/images/writing.png"
                    width="20"
                    height="20"
                    style="box-shadow: none; display: inline-flex"
                  />
                </a>
              </div>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  </section>
</template>
