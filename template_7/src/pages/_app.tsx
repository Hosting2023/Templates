import '@/src/styles/globals.css';
import '../i18n';
import type { AppProps } from 'next/app';
import { Provider, store } from '@hosting2023/redux-lib';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
