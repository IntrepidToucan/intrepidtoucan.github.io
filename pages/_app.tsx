import 'normalize.css/normalize.css';
import '../styles/variables.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';

import { buildDataAttributeName, Text } from '../common';
import { Namespace, ThemeId } from '../utils';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <button
          onClick={() => {
            const attrName = buildDataAttributeName('theme', {
              namespace: Namespace.GLOBAL,
            });

            document.body.setAttribute(
              attrName,
              document.body.getAttribute(attrName) === ThemeId.LIGHT
                ? ThemeId.DARK
                : ThemeId.LIGHT
            );
          }}
        >
          Toggle Theme
        </button>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <Text>Copyright © 2022 Intrepid Toucan</Text>
      </footer>
    </>
  );
}
