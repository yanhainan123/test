<template>
  {{ data.time }}
  <div style="display: flex"><n-button @click="data.reset">当前时间</n-button> <n-button @click="data.setHour">当前日期</n-button></div>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  time: Date.now(),
  reset: () => {
    data.time = Date.now();
  },
  setHour: () => {
    data.time = new Date(data.time).setHours(0, 0, 0, 0);
  },
});
console.log();
</script>
