import { prefixNames } from 'framework-utils';
export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
};
export const addZero = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export function throttleFn(f: (...args: any[]) => void, wait: number) {
  let timer: any;
  return (...args: any[]) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      f(...args);
      timer = null;
    }, wait);
  };
}

export function clsPrefix(prefixCls: string) {
  return (...classNames: string[]) => {
    const prefixClsSplicer = classNames ? `${prefixCls}__` : prefixCls;
    return prefixNames(prefixClsSplicer, ...classNames) || prefixCls;
  };
}
