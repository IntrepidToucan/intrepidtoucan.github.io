import Head from 'next/head';

import { HeroBanner } from '../../../components';
import { FullLoreEntry, getAllLoreEntryIds, getLoreEntry } from '../../../lib';
import { buildPageTitle, tr, WorldData } from '../../../utils';

interface GetStaticPropsResult {
  props: {
    entry: FullLoreEntry;
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllLoreEntryIds(WorldData.MARS.id).map((id) => ({
      params: { id: [WorldData.MARS.loreData.MAIN.id, id] },
    })),
  };
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string[] };
}): Promise<GetStaticPropsResult> {
  return {
    props: {
      entry: await getLoreEntry(WorldData.MARS.id, id[1]),
    },
  };
}

export default function MarsLoreHome({
  entry: { contentHtml, id, title: titleProp },
}: GetStaticPropsResult['props']) {
  const title = titleProp ?? id;

  return (
    <>
      <Head>
        <title>
          {buildPageTitle(
            title,
            tr('common.title.lore'),
            tr('mars.title.selfName')
          )}
        </title>
      </Head>

      <HeroBanner title={title} />

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
