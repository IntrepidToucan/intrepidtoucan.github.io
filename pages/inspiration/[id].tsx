import Head from 'next/head';

import { Heading } from '../../common';
import {
  FullInspirationEntry,
  getAllInspirationEntryIds,
  getInspirationEntry,
} from '../../lib';
import { buildPageTitle, tr } from '../../utils';

interface GetStaticPropsResult {
  props: {
    entry: FullInspirationEntry;
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllInspirationEntryIds().map((id) => ({
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
      entry: await getInspirationEntry(id),
    },
  };
}

export default function MarsInspirationHome({
  entry: { contentHtml, title },
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle(title, tr('global.title.inspiration'))}</title>
      </Head>

      <Heading>{title}</Heading>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
