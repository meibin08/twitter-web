export const Serialize = (data: any, firstCon = '&', secondCon = '=') => {
  return Object.keys(data).reduce((prev: string, key) => {
    const value = data[key];
    if (value != null) {
      prev += (prev && firstCon) + key + (String(value) && secondCon + value);
    }
    return prev;
  }, '');
};

interface Dictionary<T> {
  [key: string]: T;
}

export const Deserialize = (value: string, firstCon = '&', secondCon = '=') => {
  const result: Dictionary<string> = {};
  return value
    .replace('?', '')
    .split(firstCon)
    .reduce((prev, elem) => {
      const index = elem.indexOf(secondCon);
      if (index === -1) {
        prev[elem] = '';
      } else {
        prev[elem.slice(0, index)] = elem.slice(index + 1);
      }
      return prev;
    }, result);
};

// 日期去掉时分秒
export const removeTime = (date: string) => {
  if (date) {
    return date.split(' ')[0];
  }
  return date;
};

// 防抖
export const debounce = (fn: any, delay: number) => {
  let timer: any = null; // 借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer); // 进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
      timer = setTimeout(fn, delay);
    } else {
      timer = setTimeout(fn, delay); // 进入该分支说明当前并没有在计时，那么就开始一个计时
    }
  };
};

// 获取当前年季
export const getYearQuarterly = (parames: string) => {
  const data: any = new Date();

  const getQuarter = () => {
    const month = data.getMonth() + 1;
    if (month <= 3) {
      return 1;
    }
    if (month <= 6) {
      return 2;
    }
    if (month <= 9) {
      return 3;
    }
    if (month <= 12) {
      return 4;
    }
    return month;
  };

  if (parames === 'year') {
    const year = data.getFullYear();
    return year;
  }
  if (parames === 'quarterly') {
    const quarterly = getQuarter();
    return quarterly;
  }
};

// 获取下一个季度
export const getNextQuarterly = () => {
  let year = getYearQuarterly('year');
  let quarterly = getYearQuarterly('quarterly');
  if (quarterly === 4) {
    year += 1;
    quarterly = 1;
  } else {
    quarterly += 1;
  }
  const shortYear = parseInt(year.toString().substr(2, 4));
  const obj = {
    label: `${shortYear}Q${quarterly}`, // "21Q4"
    value: `${year},${quarterly}`, // "2021,4"
  };
  return obj;
};

// 判断数字为0
export const judgeIsZero = (num: number) => {
  if (typeof num === 'number' && !num) {
    return true;
  }
  return false;
};

// 数字添加千分位 ， 是0 就用- 代替 ,显示的时候去掉小数
export const formatThousandth = (num: any) => {
  // 去掉小数
  const newNum = parseInt(num);
  // 添加-
  if (judgeIsZero(newNum)) {
    return '--';
  }
  // 添加千分位
  return `${newNum}`.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
};
const CDN_BASE = 'https://qhrt-iue.oss-cn-shenzhen.aliyuncs.com/';
export const CDN_PREFIX = `${CDN_BASE}public/`;
export const CDN_TEMPLATES_PREFIX = `${CDN_BASE}templates/`;

// 通用延时等待跳转
export const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
