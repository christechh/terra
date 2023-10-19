<script setup lang="ts">
  import { HTMLAttributes, ref, onMounted, inject, computed } from "vue";
  import { init, reInit } from "./notification";
  import Toastify, { Options } from "toastify-js";

  defineOptions({
    name: "TNotification",
  });

  export interface NotificationElement extends HTMLDivElement {
    toastify: ReturnType<typeof Toastify>;
    showToast: () => void;
    hideToast: () => void;
  }

  export interface NotificationProps extends /* @vue-ignore */ HTMLAttributes {
    options?: Options;
    refKey?: string;
    type: "success" | "error" | "warning" | "info";
  }

  export type ProvideNotification = (el: NotificationElement) => void;

  const props = defineProps<NotificationProps>();

  const toastifyRef = ref<NotificationElement>();

  const bindInstance = (el: NotificationElement) => {
    if (props.refKey) {
      const bind = inject<ProvideNotification>(`bind[${props.refKey}]`);
      if (bind) {
        bind(el);
      }
    }
  };

  const vNotificationDirective = {
    mounted(el: NotificationElement) {
      init(el, props);
    },
    updated(el: NotificationElement) {
      reInit(el);
    },
  };

  onMounted(() => {
    if (toastifyRef.value) {
      bindInstance(toastifyRef.value);
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const successColor = [
  //   "bg-notification-success-light",
  //   "bg-notification-error-light",
  // ];
  // const success = ["bg-notification-success-light"];
  // const error = ["bg-notification-error-light"];

  const notificationClass = computed(() => {
    // console.log("props.type", props.type);
    switch (props.type) {
      // case "success":
      //   return success;
      // case "error":
      //   return error;
      default:
        return [];
    }
  });

  // old class: hidden py-5 pl-5 border rounded-lg shadow-xl pr-14 border-slate-200/60 dark:bg-darkmode-600 dark:text-slate-300 dark:border-darkmode-600
</script>

<template>
  <div
    class="hidden"
    :class="notificationClass"
    v-notification-directive
    ref="toastifyRef"
  >
    <slot></slot>
  </div>
</template>
