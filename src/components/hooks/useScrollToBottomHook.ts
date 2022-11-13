import { useEffect } from 'react';
import { throttleFn } from '@/utils/tools';
export const useScrollToBottomHook = (target: HTMLElement | Document, callback: () => void, reactionDistance = 0) => {
  useEffect(() => {
    const currentDom = target;
    const handleScroll = (e: any) => {
      let { scrollHeight = 0, scrollTop = 0, offsetHeight = 0 } = document.documentElement;
      if (scrollHeight - scrollTop - offsetHeight <= reactionDistance) {
        callback();
      }
    };
    currentDom!.addEventListener('scroll', throttleFn(handleScroll, 800), false);
    return () => {
      // 组件销毁时清除绑定事件
      currentDom!.removeEventListener('scroll', handleScroll, false);
    };
  }, [callback, reactionDistance, target]);
};
export default useScrollToBottomHook;
