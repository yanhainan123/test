<template>
  <n-card size="small">
    <n-form size="small" label-placement="left" label-width="155" ref="FormRef" :model="formData">
      <n-form-item label="字符不能为空" :rule="[FormRule.RuleRequired]" path="notNull">
        <n-input style="width: 150px" size="tiny" v-model:value="formData.notNull" placeholder="请输入"></n-input>
      </n-form-item>
      <n-form-item label="数字不能为空" :rule="[FormRule.RuleNumber]" path="numberNotNull">
        <n-input-number style="width: 150px" size="tiny" v-model:value="formData.numberNotNull" :showButton="false" placeholder="请输入"></n-input-number>
      </n-form-item> </n-form
  ></n-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { FormRule } from "../../form";
import { FormInst } from "naive-ui";
const FormRef = ref<FormInst | null>();
const formData = reactive({ notNull: "", numberNotNull: 0 });
</script>
