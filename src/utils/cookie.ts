const cookies = {
  get: (name: string): string | null => {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg) || [];
    return arr.length && arr[2] ? decodeURIComponent(arr[2]) : null;
  },
  set: (name: string, value: any, expire?: any) => {
    if (value == null) return;
    if (!expire) {
      document.cookie = `${name}=${encodeURIComponent(value)};path=/`;
    } else {
      const exp = new Date();
      exp.setTime(exp.getTime() + expire * 60 * 1000);
      document.cookie = `${name}=${encodeURIComponent(value)};expires=${exp.toUTCString()};path=/`;
    }
  },
  remove: (name: string) => {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = cookies.get(name);
    if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toUTCString()};path=/`;
  },
};

export default cookies;
