import Head from 'next/head';

import { Text } from '../../common';
import {
  Card,
  EncyclopediaGrid,
  FeaturedLore,
  HeroBanner,
} from '../../components';
import { buildPageTitle, WorldName } from '../../utils';

export default function MarsHome() {
  return (
    <>
      <Head>
        <title>{buildPageTitle([WorldName.MARS])}</title>
      </Head>

      <HeroBanner title={WorldName.MARS} />

      <FeaturedLore>
        <Text>Lorem ipsum...</Text>
      </FeaturedLore>

      <EncyclopediaGrid>
        <Card href="/mars/encyclopedia" title="Foo" />
        <Card title="Bar" />
        <Card title="Baz" />
      </EncyclopediaGrid>
    </>
  );
}
