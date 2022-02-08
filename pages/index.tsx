import Head from 'next/head';

import { WorldLink } from '../components';
import { buildPageTitle } from '../utils';

export default function Home() {
  return (
    <>
      <Head>
        <title>{buildPageTitle()}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <WorldLink href="/mars" />
    </>
  );
}
