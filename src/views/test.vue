<template>
  <n-button @click="data.showFun">读取</n-button>
  <n-button @click="data.addFun">存入</n-button>
  <n-button @click="data.removeFun">移除</n-button> {{ data.show }}
</template>
<script setup lang="ts">
import _ from "lodash";
import { reactive, watchEffect } from "vue";

const data = reactive({
  show: <any>true,
  aaa: "11",
  showFun: () => {
    data.show = localStorage.getItem("myCat");
    console.log(localStorage.getItem("myCat"));
  },
  addFun: () => {
    localStorage.setItem("myCat", "Tom");
    console.log("已添加");
    data.show = localStorage.getItem("myCat");
    data.aaa = "5";
  },
  removeFun: () => {
    localStorage.removeItem("myCat");
    data.aaa = "11";
    console.log("已移除");
    data.show = localStorage.getItem("myCat");
  },
});

watchEffect(() => {
  // console.log(data.show);
  console.log(data.aaa);
});
</script>
