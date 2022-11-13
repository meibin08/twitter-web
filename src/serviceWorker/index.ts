export {};
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('开始运行啦', process.env.NODE_SWVERSION);
    const navigatorServiceWorker = navigator.serviceWorker;
    navigatorServiceWorker
      .register('/service-worker.js?v=' + process.env.NODE_SWVERSION, {
        scope: '/',
      })
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
