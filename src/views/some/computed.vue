<template>
  {{ data.item }}--{{ data.x }}
  <n-input v-model:value="data.item" placeholder="请输入"></n-input>
  <n-select :options="data.list"></n-select>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";

const data = <any>reactive({
  // 被计算修改的值
  x: "",
  // 计算属性
  item: <any>computed({
    // get无参数
    get: () => {
      return data.x;
    },
    // set有参数，item的值
    set: (val: any) => {
      data.x = val.toUpperCase();
    },
  }),

  // 只读计算属性
  list: computed(() => {
    let data = [{ label: "全部", value: "-1" }];
    let label = <any>{ "0": "0", "1": "a", "2": "b", "3": "c" };
    for (var key in [1, 2, 3]) {
      data.push({
        value: key,
        label: label[key],
      });
      console.log(data)
    }
    return data;
  }),
});
</script>
