import Head from 'next/head';

import { HeroBanner } from '../../../components';
import { EncyclopediaEntry, getAllEncyclopediaEntries } from '../../../lib';
import { buildPageTitle, WorldData } from '../../../utils';

interface GetStaticPropsResult {
  props: {
    entries: EncyclopediaEntry[];
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  return {
    props: {
      entries: getAllEncyclopediaEntries(WorldData.MARS.id),
    },
  };
}

export default function MarsEncyclopediaHome({
  entries,
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle(WorldData.MARS.name)}</title>
      </Head>

      <HeroBanner title="Encyclopedia" />

      {JSON.stringify(entries)}
    </>
  );
}
