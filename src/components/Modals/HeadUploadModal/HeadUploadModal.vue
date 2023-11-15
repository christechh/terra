<script setup lang="ts">
import { debounce } from 'lodash'
import { ref, watch } from 'vue'
import avatar1 from '../../../assets/images/head/avatar1.png'
import avatar2 from '../../../assets/images/head/avatar2.png'
import avatar3 from '../../../assets/images/head/avatar3.png'
import avatar4 from '../../../assets/images/head/avatar4.png'
import axios from '../../../axios'
import Button from '../../../base-components/Button/index'
import { FormInput, InputGroup } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import EmptyList from '../../EmptyList'

interface Props {
  modelValue: boolean
  imageId: number | null
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const canvas: any = ref(null)
const scale = ref<number>(2)
const search = ref<string>('')

const save = async () => {
  const defaultAvata = avatars.find((i) => i.id === selectedId.value)
  if (localImg.value) {
    await uploadAvatar()
  }
  emit('save', {
    ...(!isAnimate.value && defaultAvata
      ? {
          ...avatars.find((i) => i.id === selectedId.value)
        }
      : {
          id: selectedId.value,
          img: localImg.value
        }),
    ...(isAnimate.value && {
      img: animateHeads.value.find((i) => i.stickerId === selectedGIFId.value)
        ?.stickerImg,
      id: ''
    })
  })
  emit('update:modelValue', false)
}

const getKeyWords = () => {
  // thirdPartyApiGet('search/keyword', {
  //   userId: 'pinchat_v3_user_1589',
  //   lang: 'zh-tw'
  // })
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   .then((res: any) => {
  //     const { keywordList } = res.body
  //     keywords.value = keywordList
  //   })
}
const getAnimate = () => {
  if (keywords.value.length === 0) {
    getKeyWords()
  }
  getHeads()
  isAnimate.value = true
}

const getHeads = () => {
  if (animateHeads.value.length > 0 && animatePage.value > pageCount.value) {
    return
  }
  // thirdPartyApiGet('search', {
  //   q: search.value,
  //   userId: 'pinchat_v3_user_1589',
  //   lang: 'zh-tw',
  //   pageNumber: animatePage.value
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // }).then((res) => {
  //   const { stickerList, pageMap } = res.body
  //   if (stickerList && pageMap) {
  //     pageCount.value = pageMap.pageCount
  //     animateHeads.value = [...animateHeads.value, ...stickerList]
  //     animatePage.value++
  //   }
  // })
}

const scrollHandler = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.scrollHeight - target.scrollTop - 5 <= target.clientHeight) {
    debounce(getHeads, 200)()
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
    draw(file)
    localImg.value = file
    selectedId.value = 0
    isChange.value = true
  }
}

const draw = (file?: Blob) => {
  if (!file) {
    file = localImg.value
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    const img = new Image()
    img.onload = () => {
      canvas.value
        .getContext('2d')
        .clearRect(0, 0, canvas.value.width, canvas.value.height)
      canvas.value
        .getContext('2d')
        ?.drawImage(
          img,
          canvas.value.width / 2 - (img.width / 2) * scale.value,
          canvas.value.height / 2 - (img.height / 2) * scale.value,
          img.width * scale.value,
          img.height * scale.value
        )
    }
    img.src = event.target?.result as string
  }
  reader.readAsDataURL(file as Blob)
}

const uploadAvatar = async () => {
  const form = new FormData()
  const blob = await new Promise((resolve) => canvas.value.toBlob(resolve))
  form.append('file', blob as Blob)
  form.append('setAvatar', 'false')
  const res = await axios.post('/user/image', form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  const { id, url } = res.data.data
  selectedId.value = id
  localImg.value = url
}

const keywordClickHandler = (keyword: string) => {
  search.value = keyword
}

watch(scale, () => {
  draw()
})

watch(search, () => {
  animatePage.value = 1
  animateHeads.value = []
  debounce(getHeads, 200)()
})
</script>

<template>
  <Dialog :open="modelValue">
    <Dialog.Panel class="rounded-xl p-3">
      <Dialog.Description class="pt-0">
        <div class="flex items-center justify-between">
          <Lucide
            icon="ChevronLeft"
            class="cursor-pointer"
            :class="isAnimate ? 'visible' : 'invisible'"
            @click="isAnimate = false"
          />
          <div class="mx-auto text-base font-bold">{{ $t('editHead') }}</div>
          <Lucide
            icon="X"
            class="cursor-pointer"
            @click="
              () => {
                emit('update:modelValue', false)
              }
            "
          />
        </div>
        <template v-if="!isAnimate">
          <canvas
            ref="canvas"
            width="250"
            height="250"
            class="absolute left-1/2 top-1/2"
            style="transform: translate(-50%, -225px)"
          />
          <input
            v-if="localImg"
            id="meter--ranger"
            class="absolute h-1 w-48 focus-visible:outline-none"
            type="range"
            v-model="scale"
            min="1"
            max="4"
            style="top: 325px; left: 50%; transform: translateX(-50%)"
          />
          <div
            class="relative mx-auto mb-28 rounded-full border-2 border-dashed text-center"
            style="
              width: 200px;
              height: 200px;
              border-color: #c0c0c0;
              transform: translateY(45px);
            "
          >
            <template v-if="!localImg">
              <Lucide
                icon="UploadCloud"
                class="mx-auto mt-6"
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
            <!-- <img v-else :src="file2Src(localImg)" alt="" /> -->
            <input
              class="absolute left-0 top-0 opacity-0"
              type="file"
              style="width: 200px; height: 200px"
              @change="fileChangeHandler"
            />
          </div>
          <div class="mt-10 flex justify-around">
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
          <InputGroup class="input-group mt-3 items-center rounded-lg px-2">
            <FormInput
              v-model="search"
              class="border-0 focus-visible:ring-transparent"
              :placeholder="$t('search')"
              type="text"
            />
            <Lucide icon="Search" width="16" height="16" />
          </InputGroup>
          <div class="my-4 text-sm">{{ $t('trending-keywords') }}</div>
          <ul class="flex overflow-x-auto pb-3">
            <li
              v-for="keyword in keywords"
              :key="keyword.keyword"
              class="mr-2 shrink-0 cursor-pointer rounded-full bg-primary px-4 py-2 text-white"
              @click="() => keywordClickHandler(keyword.keyword)"
            >
              {{ keyword.keyword }}
            </li>
          </ul>
          <ul
            v-if="animateHeads.length > 0"
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
          <EmptyList
            :show="animateHeads.length === 0"
            :content="$t('empty-sticker')"
          />
        </template>
        <Button
          v-show="!isAnimate"
          variant="outline-primary"
          class="mt-6 w-full"
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
