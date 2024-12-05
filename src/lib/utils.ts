//js 加法
export const accAdd = (arg1: any, arg2: any) => {
  var r1, r2, m;
  try {
    r1 = String(arg1).split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = String(arg2).split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
};

/**js减法**/
export const accSub = (arg1: any, arg2: any) => {
  return accAdd(arg1, -arg2);
};