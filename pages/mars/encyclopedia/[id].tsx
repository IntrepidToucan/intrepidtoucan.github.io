import Head from 'next/head';

import { HeroBanner } from '../../../components';
import {
  FullEncyclopediaEntry,
  getAllEncyclopediaEntryIds,
  getEncyclopediaEntry,
} from '../../../lib';
import { buildPageTitle, tr, WorldData } from '../../../utils';

interface GetStaticPropsResult {
  props: {
    entry: FullEncyclopediaEntry;
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllEncyclopediaEntryIds(WorldData.MARS.id).map((id) => ({
      params: { id },
    })),
  };
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}): Promise<GetStaticPropsResult> {
  return {
    props: {
      entry: await getEncyclopediaEntry(WorldData.MARS.id, id),
    },
  };
}

export default function MarsEncyclopediaHome({
  entry: { contentHtml, title },
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>
          {buildPageTitle(
            title,
            tr('common.title.encyclopedia'),
            tr('mars.title.selfName')
          )}
        </title>
      </Head>

      <HeroBanner title={title} />

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
