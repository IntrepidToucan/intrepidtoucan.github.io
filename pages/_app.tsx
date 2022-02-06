import 'normalize.css/normalize.css';
import '../styles/variables.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';

import { buildDataAttributeName } from '../components/utils';
import { Namespace, ThemeId } from '../utils';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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

      <Component {...pageProps} />
    </>
  );
}
