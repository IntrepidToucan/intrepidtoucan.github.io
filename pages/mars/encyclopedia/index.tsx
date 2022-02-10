import Head from 'next/head';

import { HeroBanner } from '../../../components';
import { buildPageTitle, WorldName } from '../../../utils';

export default function MarsEncyclopediaHome() {
  return (
    <>
      <Head>
        <title>{buildPageTitle([WorldName.MARS])}</title>
      </Head>

      <HeroBanner title="Encyclopedia" />
    </>
  );
}
