import Head from 'next/head';

import { Text } from '../../common';
import {
  Card,
  EncyclopediaGrid,
  FeaturedLore,
  HeroBanner,
} from '../../components';
import { EncyclopediaEntry, parseEncyclopedia } from '../../lib';
import { buildPageTitle, WorldData } from '../../utils';

interface GetStaticPropsResult {
  props: {
    entries: EncyclopediaEntry[];
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  return {
    props: {
      entries: parseEncyclopedia(WorldData.MARS.id),
    },
  };
}

export default function MarsHome({ entries }: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle([WorldData.MARS.name])}</title>
      </Head>

      <HeroBanner title={WorldData.MARS.name} />

      <FeaturedLore>
        <Text>Lorem ipsum...</Text>
      </FeaturedLore>

      <EncyclopediaGrid>
        {entries.map(({ id, title }) => (
          <Card href={`/mars/encyclopedia/${id}`} key={id} title={title} />
        ))}
      </EncyclopediaGrid>
    </>
  );
}
