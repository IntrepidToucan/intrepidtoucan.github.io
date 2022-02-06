import { Head, Html, Main, NextScript } from 'next/document';

import { buildDataAttributeName } from '../components/utils';
import { Namespace, ThemeId } from '../utils';

export default function Document() {
  return (
    <Html>
      <Head />

      <body
        {...{
          [buildDataAttributeName('theme', { namespace: Namespace.GLOBAL })]:
            ThemeId.DARK,
        }}
      >
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
