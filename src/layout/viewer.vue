<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-button
        @click="
          () => {
            messageSuccess('111');
          }
        "
        >弹窗</n-button
      ></n-message-provider
    >
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import { useDialog, useLoadingBar, useMessage, useNotification } from "naive-ui";
import { messageSuccess } from "../lib";

const loadingBar = useLoadingBar();
(window as any).$loading = loadingBar;

const message = useMessage();
(window as any).$message = message;

const notify = useNotification();
(window as any).$notify = notify;

const dialog = useDialog();
(window as any).$dialog = dialog;
</script>
