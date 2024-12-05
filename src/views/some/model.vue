<template>
  <n-button @click="data.showFun">弹窗</n-button>
  <n-modal v-model:show="data.show" :auto-focus="false" :close-on-esc="true" :mask-closable="false" @after-enter="data.isShow" @after-leave="data.isShow">
    <n-card style="width: 80%" title="弹窗" :bordered="false" size="small" role="dialog" aria-modal="true">
      <template #header-extra> 噢！ </template>
      内容
      <template #footer> 尾部 </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  show: true,
  showFun: () => {
    data.show = true;
  },
  isShow:()=>{
    console.log(222)
  }
});
</script>
