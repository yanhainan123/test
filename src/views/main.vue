<template>
  <!-- <viewer> </viewer> -->
  <!-- <Form></Form> -->
  <!-- <test></test> -->
  <!-- <computed></computed> -->
  <!-- <test></test> -->
  <!-- <n-config-provider :theme-overrides="themeOverrides" style="display: flex; flex: 1">
    <n-global-style />
    <n-data-table
      @wheel="tableGroup.screenScroll"
      size="small"
      class="font_13px flex"
      flex-height
      :columns="tableGroup.columns"
      :bordered="false"
      :single-line="false"
      :data="tableGroup.data.slice(tableGroup.start, tableGroup.end)"
      :style="{
        height: `100%`,
      }"
      style="overflow: hidden"
    />
  </n-config-provider> -->
  <h1 style="display: flex;flex-direction: column;justify-content: center;align-items: center;">0.1.1</h1>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch, watchEffect } from "vue";

// import Viewer from "../layout/viewer.vue";
// import Form from './some/form.vue';
// import computed from "./some/computed.vue";
// import test from "./test.vue";
const tableGroup = reactive({
  // 表头
  columns: [
    {
      title: "序号",
      key: "index",
      width: 60,
      resizable: true,
      align: "center",
      // render: (rowData: any, rowIdx: number) => rowIdx + tableGroup.start + 1,
    },
    {
      title: "数据",
      key: "shuju",
      width: 80,
      resizable: true,
      align: "center",
      ellipsis: {
        tooltip: true,
      },
    },
  ],
  data: <any>[],
  list: <any>[],
  str: "",
  headerHeight: <any>0,
  height: <any>0,
  rowHeight: <any>20 + 1,
  start: 0,
  end: 10,
  size: 10,
  num: 2,
  // 鼠标滚动
  screenScroll(event: any) {
    getHeight();
    if (event.deltaY > 0) {
      tableGroup.start += tableGroup.num;
      tableGroup.end = tableGroup.start + tableGroup.size;
    } else {
      tableGroup.start -= tableGroup.num;
      tableGroup.end = tableGroup.start + tableGroup.size;
    }
  },
});
const getHeight = () => {
  const dataTable = document.querySelector(".n-data-table");
  const rect = dataTable?.getBoundingClientRect();
  tableGroup.height = rect?.height; // 获取 NDataTable 的高度
  console.log(tableGroup.height, tableGroup.rowHeight);
  tableGroup.size = Math.floor((tableGroup.height - tableGroup.rowHeight) / tableGroup.rowHeight);
  console.log(tableGroup.size);
};
onMounted(() => {
  for (let i = 0; i < 100; i++) {
    let temp = { shuju: Math.random() };
    tableGroup.data.push(temp);
  }
  tableGroup.screenScroll({ deltaY: 0 });
});
watch(
  () => tableGroup.start,
  (newVal: any) => {
    if (tableGroup.end >= tableGroup.data.length) {
      tableGroup.start = tableGroup.data.length - tableGroup.size < 0 ? 0 : tableGroup.data.length - tableGroup.size;
      tableGroup.end = tableGroup.data.length;
    }
    if (newVal < 0) {
      tableGroup.start = 0;
      tableGroup.end = tableGroup.start + tableGroup.size;
    }
  }
);
/**设置主题 */
const body = document.body;
const themeOverrides: any = ref(null);
watchEffect(() => {
  const theme = {
    primaryColor: "#18A058",
    primaryColorHover: "#36AD6A",
    primaryColorPressed: "#0C7A43",
  };
  themeOverrides.value = {
    common: theme,
    DataTable: {
      lineHeight: "20px",
      thPaddingSmall: "0px",
      fontSizeSmall: "13px",
      tdPaddingSmall: "0px",
    },
  };
  body.style.setProperty("--primary-color", theme.primaryColor);
  body.style.setProperty("--primary-color-hover", theme.primaryColorHover);
  body.style.setProperty("--primary-color-pressed", theme.primaryColorPressed);
});
</script>
<style scoped>
.n-data-table__row {
  height: 60px; /* 你可以根据需要设置这个值 */
}
</style>
