import Head from 'next/head';

import { Text } from '../common';
import { WorldLink, WorldLinksGrid } from '../components';
import { buildPageTitle } from '../utils';

export default function Home() {
  return (
    <>
      <Head>
        <title>{buildPageTitle()}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <WorldLinksGrid>
        <WorldLink href="/mars" title="Mars">
          <Text>Lorem ipsum...</Text>
        </WorldLink>
      </WorldLinksGrid>
    </>
  );
}
