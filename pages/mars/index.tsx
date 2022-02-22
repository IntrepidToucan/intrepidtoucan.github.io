import Head from 'next/head';

import { Text } from '../../common';
import {
  Card,
  EncyclopediaHighlightsGrid,
  FeaturedLore,
  HeroBanner,
} from '../../components';
import {
  EncyclopediaEntry,
  FullLoreEntry,
  getAllEncyclopediaEntries,
  getLatestLoreEntry,
} from '../../lib';
import {
  buildPagePath,
  buildPageTitle,
  tr,
  WorldAreaData,
  WorldData,
} from '../../utils';

interface GetStaticPropsResult {
  props: {
    encyclopediaEntries: EncyclopediaEntry[];
    loreEntry: FullLoreEntry;
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  const loreEntry = await getLatestLoreEntry(WorldData.MARS.id);

  return {
    props: {
      encyclopediaEntries: getAllEncyclopediaEntries(WorldData.MARS.id),
      loreEntry,
    },
  };
}

export default function MarsHome({
  encyclopediaEntries,
  loreEntry,
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle(tr('mars.title.selfName'))}</title>
      </Head>

      <HeroBanner
        alt={tr('mars.message.heroBanner.altText')}
        src="/images/mars/hero-banner-v1.jpg"
        title={tr('mars.title.selfName')}
      />

      <FeaturedLore
        entryId={loreEntry.id}
        loreId={WorldData.MARS.loreData.MAIN.id}
        worldId={WorldData.MARS.id}
      >
        <Text
          component="div"
          dangerouslySetInnerHTML={{ __html: loreEntry.contentHtml }}
        />
      </FeaturedLore>

      <EncyclopediaHighlightsGrid
        encyclopediaHref={buildPagePath(
          WorldData.MARS.id,
          WorldAreaData.ENCYCLOPEDIA.id
        )}
        title={tr('common.title.encyclopedia')}
      >
        {encyclopediaEntries.map(({ id, title }) => (
          <Card
            href={buildPagePath(
              WorldData.MARS.id,
              WorldAreaData.ENCYCLOPEDIA.id,
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
