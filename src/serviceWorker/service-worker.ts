import { setCacheNameDetails, clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { createHandlerBoundToURL, cleanupOutdatedCaches } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';

skipWaiting();
// 更新时自动生效
clientsClaim();
//清除过期缓存
cleanupOutdatedCaches();
// 设置缓存名称
setCacheNameDetails({
  prefix: 'twitter',
  suffix: 'v0.0.1',
});
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  // denylist: [/login/, /logout/], //过滤拉地址
});
//页面路由缓存设置
registerRoute(navigationRoute);
/*项目第三方域名图片：cdn地址，属于跨域资源，我们使用StaleWhileRevalidate缓存策略*/
registerRoute(new RegExp('.*.(?:png|jpg|jpeg|svg|webp)'), new StaleWhileRevalidate({}));
registerRoute(new RegExp('.*.(?:js|css)'), new NetworkFirst({}));
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function (event) {
  console.log('self SW installed! 提示: ', event);
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', function (event: any) {
  console.log('self SW activate~! 提示: ', event);
  event.waitUntil(clientsClaim());
});
