import Head from 'next/head';

import { Text } from '../../common';
import {
  Card,
  EncyclopediaHighlightsGrid,
  FeaturedLore,
  HeroBanner,
} from '../../components';
import { EncyclopediaEntry, getAllEncyclopediaEntries } from '../../lib';
import {
  buildPagePath,
  buildPageTitle,
  SiteAreaData,
  tr,
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
        <title>{buildPageTitle(tr('mars.title.selfName'))}</title>
      </Head>

      <HeroBanner title={tr('mars.title.selfName')} />

      <FeaturedLore worldId={WorldData.MARS.id}>
        <Text>{tr('common.message.placeholderText')}</Text>
      </FeaturedLore>

      <EncyclopediaHighlightsGrid
        encyclopediaPath={buildPagePath(
          WorldData.MARS.id,
          SiteAreaData.ENCYCLOPEDIA.id
        )}
        title={tr('common.title.encyclopedia')}
      >
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
      </EncyclopediaHighlightsGrid>
    </>
  );
}
