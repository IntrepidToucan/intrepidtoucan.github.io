import Head from 'next/head';

import { Text } from '../../common';
import {
  Card,
  EncyclopediaGrid,
  FeaturedLore,
  HeroBanner,
} from '../../components';
import { EncyclopediaEntry, getAllEntries } from '../../lib';
import {
  buildPagePath,
  buildPageTitle,
  SiteAreaData,
  WorldData,
} from '../../utils';

interface GetStaticPropsResult {
  props: {
    entries: EncyclopediaEntry[];
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  return {
    props: {
      entries: getAllEntries(WorldData.MARS.id),
    },
  };
}

export default function MarsHome({ entries }: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle(WorldData.MARS.name)}</title>
      </Head>

      <HeroBanner title={WorldData.MARS.name} />

      <FeaturedLore>
        <Text>Lorem ipsum...</Text>
      </FeaturedLore>

      <EncyclopediaGrid>
        {entries.map(({ id, title }) => (
          <Card
            href={buildPagePath(
              WorldData.MARS.id,
              SiteAreaData.ENCYCLOPEDIA.id,
              id
            )}
            key={id}
            title={title}
          />
        ))}
      </EncyclopediaGrid>
    </>
  );
}
