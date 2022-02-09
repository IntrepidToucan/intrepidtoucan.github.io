import Head from 'next/head';

import { WorldHeroBanner } from '../../components';
import { buildPageTitle, WorldName } from '../../utils';

export default function MarsHome() {
  return (
    <>
      <Head>
        <title>{buildPageTitle([WorldName.MARS])}</title>
      </Head>

      <WorldHeroBanner title={WorldName.MARS} />
    </>
  );
}
