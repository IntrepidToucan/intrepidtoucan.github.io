import Head from 'next/head';

import { Text } from '../../common';
import {
  Card,
  EncyclopediaGrid,
  FeaturedLore,
  HeroBanner,
} from '../../components';
import { EncyclopediaEntry, getAllEncyclopediaEntries } from '../../lib';
import {
  buildPagePath,
  buildPageTitle,
  SiteAreaData,
  WorldData,
} from '../../utils';

interface GetStaticPropsResult {
  props: {
    encyclopediaEntries: EncyclopediaEntry[];
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  return {
    props: {
      encyclopediaEntries: getAllEncyclopediaEntries(WorldData.MARS.id),
    },
  };
}

export default function MarsHome({
  encyclopediaEntries,
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle(WorldData.MARS.name)}</title>
      </Head>

      <HeroBanner title={WorldData.MARS.name} />

      <FeaturedLore worldId={WorldData.MARS.id}>
        <Text>Lorem ipsum...</Text>
      </FeaturedLore>

      <EncyclopediaGrid>
        {encyclopediaEntries.map(({ id, title }) => (
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
