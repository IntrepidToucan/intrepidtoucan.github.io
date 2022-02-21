import Head from 'next/head';
import React from 'react';

import { Heading } from '../../common';
import { NextTextLink } from '../../components';
import { getAllInspirationEntries, InspirationEntry } from '../../lib';
import {
  buildPagePath,
  buildPageTitle,
  GlobalAreaData,
  GlobalData,
  tr,
} from '../../utils';

interface GetStaticPropsResult {
  props: {
    entries: InspirationEntry[];
  };
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  return {
    props: {
      entries: getAllInspirationEntries(),
    },
  };
}

export default function InspirationHome({
  entries,
}: GetStaticPropsResult['props']) {
  return (
    <>
      <Head>
        <title>{buildPageTitle(tr('global.title.inspiration'))}</title>
      </Head>

      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        <Heading>{tr('global.title.inspiration')}</Heading>

        {Object.entries(
          entries.reduce<{ [category: string]: InspirationEntry[] }>(
            (result, entry) => {
              const { category } = entry;

              if (!result[category]) result[category] = [];

              result[category].push(entry);

              return result;
            },
            {}
          )
        )
          .sort(([categoryA], [categoryB]) =>
            categoryA.localeCompare(categoryB)
          )
          .reduce<React.ReactElement[]>((result, [category, entries]) => {
            result.push(<Heading level={2}>{category}</Heading>);

            entries.forEach(({ id, title }) => {
              result.push(
                <NextTextLink
                  href={buildPagePath(
                    GlobalData.id,
                    GlobalAreaData.INSPIRATION.id,
                    id
                  )}
                  key={id}
                >
                  {title}
                </NextTextLink>
              );
            });

            return result;
          }, [])}
      </div>
    </>
  );
}
