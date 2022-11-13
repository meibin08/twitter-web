import React from 'react';
import { useMount } from 'ahooks';
import classnames from 'classnames';
export interface IconProps {
  type: string;
  className?: string;
  onClick?: (e: React.SyntheticEvent<any>) => void;
}

const customCache = new Set();

const CustomIcon = (props: IconProps) => {
  const { type, onClick, className = '' } = props;
  const loadSymbol = (src: string) => {
    if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof src === 'string' && src.length && !customCache.has(src)) {
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.setAttribute('data-namespace', src);
      customCache.add(src);
      document.body.appendChild(script);
    }
  };
  useMount(() => {
    loadSymbol('//at.alicdn.com/t/c/font_3743278_bc8j1deqy9j.js');
  });
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      className={classnames('twitter-icon', { [`${className}`]: !!className })}
      onClick={onClick}
    >
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};
export default CustomIcon;
