import Head from 'next/head';
import Link from 'next/link';

import { WorldLink } from '../components';
import { Heading } from '../components/common';
import { APP_NAME, buildPageTitle, WorldName } from '../utils';

export default function Home() {
  return (
    <>
      <Head>
        <title>{buildPageTitle()}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <Heading>{APP_NAME}</Heading>

        <Link href="/mars" passHref>
          <WorldLink>{WorldName.MARS}</WorldLink>
        </Link>
      </main>
    </>
  );
}
