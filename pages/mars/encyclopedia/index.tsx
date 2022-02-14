import Head from 'next/head';

import { HeroBanner } from '../../../components';
import { EncyclopediaEntry, getAllEncyclopediaEntries } from '../../../lib';
import { buildPageTitle, tr, WorldData } from '../../../utils';

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
        <title>
          {buildPageTitle(
            tr('common.title.encyclopedia'),
            tr('mars.title.selfName')
          )}
        </title>
      </Head>

      <HeroBanner title={tr('common.title.encyclopedia')} />

      {JSON.stringify(entries)}
    </>
  );
}
