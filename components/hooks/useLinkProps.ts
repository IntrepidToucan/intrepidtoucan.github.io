import type React from 'react';

export type UseLinkPropsParams = Pick<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'rel' | 'target'
>;

interface UseLinkPropsResult {
  linkProps: UseLinkPropsParams;
}

export function useLinkProps(params: UseLinkPropsParams): UseLinkPropsResult {
  const linkProps: UseLinkPropsResult['linkProps'] = { ...params };

  if (linkProps.target === '_blank') {
    linkProps.rel ??= 'noopener noreferrer';
  }

  return { linkProps };
}
