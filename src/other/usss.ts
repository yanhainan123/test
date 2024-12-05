// 防抖
export const Debounce = (Fn: Function, debounceTime: number = 200) => {
  let timestamp: number = 0;
  let total = 0;
  return function (this: any, ...args: any[]) {
    timestamp = Date.now();
    total++;
    //防止并发操作的时候同时被调用，用index来判断是最后一次调用的
    setTimeout(
      (_index: number) => {
        if (total !== _index) {
          return;
        }
        if (Date.now() < timestamp + debounceTime) {
          return;
        }
        Fn.apply(this, [...args, total]);
        total = 0;
      },
      debounceTime,
      total
    );
  };
};

//  时间格式化
// yyyy-MM-dd HH:mm:ss ==> 年月日时分秒
export const DateFormat = (date: any, format: string = "yyyy-MM-dd"): string | any => {
  if (!date) {
    return date;
  }
  if (typeof date === "string" && !date.trim()) {
    console.assert(!date.trim())
    return "";
  }
  if (!format) {
    format = "yyyy-MM-dd";
  }
  //修改为支持字符串格式的日期或date对象
  date = DateParse(date);

  let formats: any = {
    "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "w+": ["日", "一", "二", "三", "四", "五", "六"][date.getDay()],
  };
  Object.keys(formats).forEach((key: string) => {
    const item = formats[key];
    format = format.replace(eval("/" + key + "/g"), function (exp) {
      return exp.length === 1 ? item : ("0" + item).substr(("0" + item).length - exp.length);
    });
  });
  return format;
};

export const DateParse = (date: any): Date => {
  if (!(date instanceof Date)) {
    if (typeof date === "number") {
      date = new Date(date);
    } else if (typeof date === "string" && date !== "") {
      const [year, month, day, hour, minute, second]: any = date.match(/\d+/gi) || [];
      date = new Date(year || 2000, (month || 1) - 1, day || 1, hour || 0, minute || 0, second || 0);
    }
  }
  return date;
};

// 生成唯一id
export const Guid = () => {
  let timestamp = new Date().getTime();
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (timestamp + Math.random() * 16) % 16 | 0;
    timestamp = Math.floor(timestamp / 16);
    return (c === "x" ? r : (r & 3) | 8).toString(16);
  });
};