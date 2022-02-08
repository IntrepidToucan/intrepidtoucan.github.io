import Head from 'next/head';

import { Heading } from '../../common';
import { buildPageTitle, WorldName } from '../../utils';

export default function MarsHome() {
  return (
    <>
      <Head>
        <title>{buildPageTitle([WorldName.MARS])}</title>
      </Head>

      <Heading>{WorldName.MARS}</Heading>
    </>
  );
}
