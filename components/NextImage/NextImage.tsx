import Image, { ImageProps } from 'next/image';
import React from 'react';

// Opt out of image optimization (see https://github.com/vercel/next.js/discussions/19065).
const customLoader: ImageProps['loader'] = ({ src }) => src;

export function NextImage(props: ImageProps): JSX.Element {
  return <Image alt="" loader={customLoader} {...props} />;
}
