import { Head, Html, Main, NextScript } from 'next/document';

import { buildDataAttributeName } from '../common';
import { GlobalData, ThemeId } from '../utils';

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body
        {...{
          [buildDataAttributeName('theme', { namespace: GlobalData.id })]:
            ThemeId.DARK,
        }}
      >
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
