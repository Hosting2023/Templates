import React, { createContext } from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import Header from '@/components/head';
import { persistor, store } from '@/store/store';
import '../styles/globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export const AppContext = createContext<boolean | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js', {
        scope: '/',
      });
    }
  }, []);

  const HEB = false;

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <Header>Cleaning</Header>
      <AppContext.Provider value={HEB}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <I18nextProvider i18n={i18n}>
              <Component {...pageProps} />
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </AppContext.Provider>
    </>
  );
}
