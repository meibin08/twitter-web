import { ConfigProvider } from 'antd';
import cookies from './cookie';

const setThemeColor = (theme = '') => {
  const nextThemeColor = decodeURIComponent(theme || cookies.get('themeColor') || '#1d9bf0');
  if (nextThemeColor) {
    const root = document.querySelector(':root') as HTMLElement;
    if (root) {
      root?.style?.setProperty('--primary-color', nextThemeColor);
      root?.style?.setProperty('--primary-color-bg', nextThemeColor);
    }
    ConfigProvider.config({
      theme: {
        primaryColor: nextThemeColor,
        infoColor: nextThemeColor,
      },
    });
  }
};
export default setThemeColor;
