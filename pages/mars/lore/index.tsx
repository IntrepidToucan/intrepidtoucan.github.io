import Head from 'next/head';

import { Card, EncyclopediaGrid, HeroBanner } from '../../../components';
import { getAllLoreEntries, LoreEntry } from '../../../lib';
import {
  buildPagePath,
  buildPageTitle,
  SiteAreaData,
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
        <title>{buildPageTitle('Lore', WorldData.MARS.name)}</title>
      </Head>

      <HeroBanner title="Lore" />

      <EncyclopediaGrid>
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
      </EncyclopediaGrid>
    </>
  );
}
