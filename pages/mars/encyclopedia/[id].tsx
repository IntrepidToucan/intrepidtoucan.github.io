import Head from 'next/head';

import { HeroBanner } from '../../../components';
import { FullEncyclopediaEntry, getAllEntryIds, getEntry } from '../../../lib';
import { buildPageTitle, WorldData } from '../../../utils';

interface GetStaticPropsResult {
  props: {
    entry: FullEncyclopediaEntry;
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllEntryIds(WorldData.MARS.id).map((id) => ({
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
      entry: await getEntry(WorldData.MARS.id, id),
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
          {buildPageTitle(title, `${WorldData.MARS.name} Encyclopedia`)}
        </title>
      </Head>

      <HeroBanner title={title} />

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
