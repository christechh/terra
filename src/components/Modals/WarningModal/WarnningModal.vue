<script setup lang="ts">
  import { computed } from "vue";
  import { Dialog } from "../../../base-components/Headless";
  import Lucide from "../../../base-components/Lucide";
  import Button from "../../../base-components/Button";
  import { useWaningModalStore } from "../../../stores/modals/warrningModal";

  const showModal = computed(() => useWaningModalStore().status);
  const modalText = computed(() => useWaningModalStore().text);
  const content = computed(() => useWaningModalStore().content);
  const type = computed(() => useWaningModalStore().type);
  const icon = computed(() => {
    if (type.value === "success") {
      return "CheckCircle";
    }

    if (type.value === "warning") {
      return "AlertCircle";
    }

    if (type.value === "danger") {
      return "XCircle";
    }

    return "XCircle";
  });
  const iconColor = computed(() => {
    if (type.value === "success") {
      return "text-success";
    }

    if (type.value === "warning") {
      return "text-warning";
    }

    if (type.value === "danger") {
      return "text-danger";
    }

    return "text-warning";
  });

  const setWarningModalPreview = (value: boolean) => {
    useWaningModalStore().displayModal({ status: value });
  };
</script>

<template>
  <div>
    <!-- BEGIN: Modal Content -->
    <Dialog
      :open="showModal"
      @close="
        () => {
          setWarningModalPreview(false);
        }
      "
    >
      <Dialog.Panel>
        <div class="p-5 text-center">
          <Lucide
            :icon="icon"
            class="w-16 h-16 mx-auto mt-3"
            :class="iconColor"
          />
          <div class="mt-5 text-3xl"></div>
          <div class="mt-2 text-dark text-4xl font-bold">
            {{ modalText }}
          </div>
          <div class="mt-2 text-slate-500 text-lg" v-if="content">
            {{ content }}
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            type="button"
            variant="primary"
            @click="
              () => {
                setWarningModalPreview(false);
              }
            "
            class="w-24"
          >
            Ok
          </Button>
        </div>
        <!-- <div
          class="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400"
        >
          <a href="" class="text-primary"> </a>
        </div> -->
      </Dialog.Panel>
    </Dialog>
    <!-- END: Modal Content -->
  </div>
</template>
