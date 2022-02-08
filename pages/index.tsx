import Head from 'next/head';
import Link from 'next/link';

import { Heading } from '../common';
import { WorldLink } from '../components';
import { APP_NAME, buildPageTitle, WorldName } from '../utils';

export default function Home() {
  return (
    <>
      <Head>
        <title>{buildPageTitle()}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Heading>{APP_NAME}</Heading>

      <Link href="/mars" passHref>
        <WorldLink>{WorldName.MARS}</WorldLink>
      </Link>
    </>
  );
}
