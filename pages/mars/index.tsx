import Head from 'next/head';
import Link from 'next/link';

import { Heading, TextLink } from '../../components/common';
import { buildPageTitle, WorldName } from '../../utils';

export default function MarsHome() {
  return (
    <>
      <Head>
        <title>{buildPageTitle([WorldName.MARS])}</title>
      </Head>

      <main>
        <Heading>{WorldName.MARS}</Heading>

        <Link href="/" passHref>
          <TextLink>Home</TextLink>
        </Link>
      </main>
    </>
  );
}
