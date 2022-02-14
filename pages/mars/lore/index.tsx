import Head from 'next/head';

import { Card, HeroBanner, LoreEntriesGrid } from '../../../components';
import { getAllLoreEntries, LoreEntry } from '../../../lib';
import {
  buildPagePath,
  buildPageTitle,
  SiteAreaData,
  tr,
  WorldData,
} from '../../../utils';

interface GetStaticPropsResult {
  props: {
    entries: LoreEntry[];
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  return {
    props: {
      entries: getAllLoreEntries(WorldData.MARS.id),
    },
  };
}

export default function MarsLoreHome({
  entries,
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(tr('common.title.lore'), tr('mars.title.selfName'))}
        </title>
      </Head>

      <HeroBanner title={tr('common.title.lore')} />

      <LoreEntriesGrid>
        {entries.map(({ id, title }) => (
          <Card
            href={buildPagePath(
              WorldData.MARS.id,
              SiteAreaData.LORE.id,
              WorldData.MARS.loreData.MAIN.id,
              id
            )}
            key={id}
            title={title ?? id}
          />
        ))}
      </LoreEntriesGrid>
    </>
  );
}
