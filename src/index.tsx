import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import Store, { Persistor } from './store/index';
import skinThemeChange from '@/utils/skinTheme';
import './serviceWorker/index';

import Routes from './router/index';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
skinThemeChange('');
root.render(
  <React.Suspense fallback={<p style={{ color: '#333' }}> 当前数据数据加载中…</p>}>
    <ConfigProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.Suspense>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
