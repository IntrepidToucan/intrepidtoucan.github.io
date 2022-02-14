import Head from 'next/head';

import { Text } from '../common';
import { WorldLink, WorldLinksGrid } from '../components';
import { buildPagePath, buildPageTitle, tr, WorldData } from '../utils';

export default function Home() {
  return (
    <>
      <Head>
        <title>{buildPageTitle()}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <WorldLinksGrid>
        <WorldLink
          href={buildPagePath(WorldData.MARS.id)}
          title={tr('mars.title.selfName')}
        >
          <Text>{tr('common.message.placeholderText')}</Text>
        </WorldLink>
      </WorldLinksGrid>
    </>
  );
}
