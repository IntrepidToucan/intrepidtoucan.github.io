import 'normalize.css/normalize.css';
import '../styles/variables.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import React from 'react';

import { GlobalContainer, GlobalFooter, GlobalHeader } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Copied from https://github.com/vercel/next.js/issues/7681#issuecomment-603032899.
    const focusOnBody = () => {
      /*
       * This is needed for the focus to be moved back to the beginning of the page after
       * client-side routing by next-router, we'll set it programmatically and remove on blur
       * because we don't want to focus the body if the user clicks on some parts of the body
       * that are actually not clickable.
       *
       * This is useful for click+tab interaction, where you click close to a link + tab in order
       * to focus that link – a fast way for moving the focus exactly where you want it to be.
       */
      document.body.setAttribute('tabIndex', '-1');
      document.body.focus();
    };

    const makeBodyNotFocusable = () => {
      document.body.removeAttribute('tabIndex');
    };

    Router.events.on('routeChangeStart', focusOnBody);
    document.body.addEventListener('blur', makeBodyNotFocusable);

    return () => {
      Router.events.off('routeChangeStart', focusOnBody);
      document.body.removeEventListener('blur', makeBodyNotFocusable);
    };
  }, []);

  return (
    <GlobalContainer>
      <GlobalHeader />

      <main>
        <Component {...pageProps} />
      </main>

      <GlobalFooter />
    </GlobalContainer>
  );
}
