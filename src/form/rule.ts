import type { FormItemRule } from "naive-ui";

//验证必填
export const RuleRequired: FormItemRule = {
  required: true,
  trigger: ["input", "blur"],
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (val == undefined || val == null || !/\S+/.test(val)) {
      return new Error("不能为空");
    }
    return true;
  },
};

//验证不能为空 且 为正数
export const RuleAbsNumber: FormItemRule = {
  required: true,
  trigger: ["input", "blur"],
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (val == undefined || val == null || !/\S+/.test(val)) {
      return new Error("不能为空");
    } else if (Number(val) <= 0) {
      return new Error("数值必须大于0");
    }
    return true;
  },
};

//验证不能为空 且 不能为0
export const RuleNumber: FormItemRule = {
  required: true,
  trigger: ["input", "blur"],
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (!val || !/\S+/.test(val)) {
      return new Error("不能为空");
    } else if (Number(val) == 0) {
      return new Error("数值不能为0");
    }
    return true;
  },
};

//验证不能为空 且 为正整数
export const RuleIntegralNumber: FormItemRule = {
  trigger: ["input", "blur"],
  required: true,
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (!val || !/\S+/.test(val)) {
      return new Error("不能为空");
    } else if (!/^\d*$/.test(val)) {
      return new Error("数值应该为整数");
    }
    return true;
  },
};

export const RuleTel: FormItemRule = {
  trigger: ["input", "blur"],
  required: true,
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (!val || !/\S+/.test(val)) {
      return new Error("不能为空");
    } else if (!/^(1[3|4|5|6|7|8|9])\d{9}$|^0\d{2,3}-?\d{7,8}$|^400[016789]\d{6}$|^400-[016789]\d{2}-\d{5}$/.test(val)) {
      return new Error("请输入正确的电话号码");
    }
    return true;
  },
};

export const RuleEmail: FormItemRule = {
  trigger: ["input", "blur"],
  required: true,
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (!val || !/\S+/.test(val)) {
      return new Error("不能为空");
    } else if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val)) {
      return new Error("请输入正确的邮箱");
    }
    return true;
  },
};

export const RuleFax: FormItemRule = {
  trigger: ["input", "blur"],
  required: true,
  validator: (rule: FormItemRule, val: any) => {
    if (!rule.required) return true;
    if (!val || !/\S+/.test(val)) {
      return new Error("不能为空");
    } else if (!/^(?:\d{3,4}-)?\d{7,8}/.test(val)) {
      return new Error("请输入正确的传真");
    }
    return true;
  },
};

// export const RuleLink: FormItemRule = {
//   trigger: ["input", "blur"],
//   required: false,
//   validator: (rule: FormItemRule, val: any) => {
//     if (val && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(val)) {
//       return new Error("请输入正确的网址");
//     }
//     return true;
//   },
// };

// //验证不能输入特殊符号
// export const RuleNotSpecial: FormItemRule = {
//   trigger: ["input", "blur"],
//   validator: (rule: FormItemRule, val: any) => {
//     if (val && !/^[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(val)) {
//       return new Error("不能输入特殊字符");
//     }
//     return true;
//   },
// };
