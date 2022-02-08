import 'normalize.css/normalize.css';
import '../styles/variables.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';

import { GlobalFooter, GlobalHeader } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalHeader />

      <main>
        <Component {...pageProps} />
      </main>

      <GlobalFooter />
    </>
  );
}
