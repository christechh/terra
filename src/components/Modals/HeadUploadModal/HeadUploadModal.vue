<script setup lang="ts">
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import avatar1 from '../../../assets/images/head/avatar1.png'
import avatar2 from '../../../assets/images/head/avatar2.png'
import avatar3 from '../../../assets/images/head/avatar3.png'
import avatar4 from '../../../assets/images/head/avatar4.png'
import Button from '../../../base-components/Button/index'
import { ref } from 'vue'
import { FormInput, InputGroup } from '../../../base-components/Form'
import { AuthType, postRequest } from '../../../api/api'

interface Props {
  modelValue: boolean
  imageId: number
}

const { modelValue, imageId } = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'save'])

const avatars = [
  { img: avatar1, id: 5141 },
  { img: avatar2, id: 5142 },
  { img: avatar3, id: 5143 },
  { img: avatar4, id: 5144 }
]

const selectedId = ref(imageId)
const isChange = ref(false)
const isAnimate = ref(false)
const keywords = ref<{ keyword: string }[]>([])
const animatePage = ref(1)
const pageCount = ref(0)
const animateHeads = ref<{ stickerImg: string; stickerId: number }[]>([])
const selectedGIFId = ref(0)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const localImg = ref<any>(null)

const save = async () => {
  const defaultAvata = avatars.find((i) => i.id === selectedId.value)
  if (localImg.value) {
    await uploadAvatar()
  }
  emit('save', {
    ...(isAnimate.value && {
      img: animateHeads.value.find((i) => i.stickerId === selectedGIFId.value)
        ?.stickerImg
    }),
    ...(!isAnimate.value && defaultAvata
      ? {
          ...avatars.find((i) => i.id === selectedId.value)
        }
      : {
          id: selectedId.value,
          img: localImg.value
        })
  })
  emit('update:modelValue', false)
}

const getKeyWords = () => {
  fetch(
    'https://messenger.stipop.io/v1/search/keyword?userId=pinchat_v3_user_1589&lang=zh-tw',
    {
      headers: {
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  )
    .then((res) => {
      return res.json()
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then((r) => {
      const { keywordList } = r.body
      keywords.value = keywordList
    })
}
const getAnimate = () => {
  if (keywords.value.length === 0) {
    getKeyWords()
  }
  getHeads()
  isAnimate.value = true
}

// eslint-disable-next-line @typescript-eslint/ban-types
function debounce<T extends Function>(cb: T, wait = 20) {
  let h = 0
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let callable = (...args: any) => {
    clearTimeout(h)
    h = setTimeout(() => cb(...args), wait)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <T>(<any>callable)
}

const getHeads = () => {
  if (animateHeads.value.length > 0 && animatePage.value > pageCount.value) {
    return
  }
  fetch(
    `https://messenger.stipop.io/v1/search?q=&userId=pinchat_v3_user_1589&lang=zh-tw&pageNumber=${animatePage.value}`,
    {
      headers: {
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    }
  )
    .then((res) => res.json())
    .then((r) => {
      const { stickerList, pageMap } = r.body
      pageCount.value = pageMap.pageCount
      animateHeads.value = [...animateHeads.value, ...stickerList]
      animatePage.value++
    })
}

const scrollHandler = (event: Event) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const target = event.target as HTMLElement
  console.log(target.scrollHeight - target.scrollTop - 5, target.clientHeight)
  if (target.scrollHeight - target.scrollTop - 5 <= target.clientHeight) {
    debounce(getHeads, 20)()
  }
}

const gifClickhandler = (id: number) => {
  selectedGIFId.value = id
  isChange.value = true
}

const defaultAvatarClick = (id: number) => {
  selectedId.value = id
  localImg.value = null
  isChange.value = true
}

const fileChangeHandler = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (file) {
    localImg.value = file
    selectedId.value = 0
    isChange.value = true
  }
}

const uploadAvatar = async () => {
  const form = new FormData()
  form.append('file', localImg.value)
  form.append('setAvatar', 'false')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await postRequest('user/image', form, AuthType.JWT)
  const { id, url } = res.data.data
  selectedId.value = id
  localImg.value = url
}

const file2Src = (file: File) => {
  return URL.createObjectURL(file)
}
</script>

<template>
  <Dialog :open="modelValue">
    <Dialog.Panel class="rounded-xl p-3">
      <Dialog.Title>
        <Lucide
          icon="ChevronLeft"
          class="cursor-pointer"
          :class="isAnimate ? 'visible' : 'invisible'"
          @click="isAnimate = false"
        />
        <div class="mx-auto">{{ $t('editHead') }}</div>
        <Lucide
          icon="X"
          class="cursor-pointer"
          @click="
            () => {
              emit('update:modelValue', false)
            }
          "
        />
      </Dialog.Title>
      <Dialog.Description>
        <template v-if="!isAnimate">
          <div
            class="relative mx-auto rounded-full border-2 border-dashed pt-5 text-center"
            style="width: 200px; height: 200px; border-color: #c0c0c0"
          >
            <template v-if="!localImg">
              <Lucide
                icon="UploadCloud"
                class="mx-auto"
                width="48"
                height="48"
                color="#c0c0c0"
              />
              <div class="text-gray mt-4">
                <div>{{ $t('dropImgHere') }}</div>
                <div>{{ $t('or') }}</div>
                <div>{{ $t('click-to-upload-image') }}</div>
              </div>
            </template>
            <img v-else :src="file2Src(localImg)" alt="" />
            <input
              class="absolute left-0 top-0 opacity-0"
              type="file"
              style="width: 200px; height: 200px"
              @change="fileChangeHandler"
            />
          </div>
          <div class="mt-3 flex justify-around">
            <div
              v-for="avatar in avatars"
              :key="avatar.id"
              class="relative cursor-pointer"
              @click="() => defaultAvatarClick(avatar.id)"
            >
              <img :src="avatar.img" alt="avatar" width="80" height="80" />
              <Lucide
                v-if="avatar.id === selectedId"
                class="absolute bottom-0 right-0"
                icon="CheckCircle2"
                color="white"
                fill="green"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <InputGroup class="items-center rounded-lg border px-2">
            <FormInput
              class="border-0 focus-visible:ring-transparent"
              :placeholder="$t('search')"
            />
            <Lucide icon="Search" width="16" height="16" />
          </InputGroup>
          <div class="my-4 text-sm">{{ $t('trending-keywords') }}</div>
          <ul class="flex overflow-x-auto pb-3">
            <li
              v-for="keyword in keywords"
              :key="keyword.keyword"
              class="mr-2 shrink-0 cursor-pointer rounded-full bg-primary px-4 py-2 text-white"
            >
              {{ keyword.keyword }}
            </li>
          </ul>
          <ul
            class="grid h-60 grid-cols-4 gap-6 overflow-auto"
            @scroll="scrollHandler"
          >
            <li
              v-for="gif in animateHeads"
              :key="gif.stickerId"
              @click="() => gifClickhandler(gif.stickerId)"
              class="relative cursor-pointer"
            >
              <img :src="gif.stickerImg" alt="" />
              <Lucide
                v-if="gif.stickerId === selectedGIFId"
                class="absolute bottom-0 right-0"
                icon="CheckCircle2"
                color="white"
                fill="green"
              />
            </li>
          </ul>
        </template>
        <Button
          v-show="!isAnimate"
          variant="outline-primary"
          class="mt-3 w-full"
          @click="getAnimate"
          >{{ $t('select-animated-avatar') }}</Button
        >
        <Button
          variant="primary"
          class="mt-3 w-full"
          @click="save"
          :disabled="!isChange"
        >
          {{ $t('save-btn') }}
        </Button>
      </Dialog.Description>
    </Dialog.Panel>
  </Dialog>
</template>
