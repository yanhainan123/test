<template>
  <n-space style="min-height: 28px">
    <n-button ghost size="small" @click="data.selectedFun(item)" v-for="item in data.markets" :key="item" :type="data.selectedMarket == item ? 'primary' : 'default'"> {{ item }}</n-button>
  </n-space>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  markets: ['1','2'],
  selectedMarket: "",
  selectedFun: (item: any) => {
    data.selectedMarket = item;
  },
});
</script>
