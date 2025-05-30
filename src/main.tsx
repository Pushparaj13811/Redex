import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import RouterProvider from './routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
