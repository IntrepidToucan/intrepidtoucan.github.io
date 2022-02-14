import { Head, Html, Main, NextScript } from 'next/document';

import { buildDataAttributeName } from '../common';
import { AppNamespace, ThemeId } from '../utils';

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body
        {...{
          [buildDataAttributeName('theme', { namespace: AppNamespace.GLOBAL })]:
            ThemeId.DARK,
        }}
      >
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
