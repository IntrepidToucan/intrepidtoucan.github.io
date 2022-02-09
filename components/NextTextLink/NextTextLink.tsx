import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import {
  isNil,
  TextLink,
  TextLinkProps,
  useClasses,
  useProps,
} from '../../common';
import baseClasses from './NextTextLink.module.css';

export interface NextTextLinkProps extends TextLinkProps {}

const displayName = 'NextTextLink';

export const NextTextLink = React.forwardRef<HTMLElement, NextTextLinkProps>(
  function NextTextLink(props, ref) {
    // Props
    const {
      classes: classesProp,
      className,
      href,
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    // Content
    const componentNode = (
      <TextLink className={rootClassName} ref={ref} {...restProps} />
    );

    if (isNil(href)) return componentNode;

    // TODO(a11y): Seems that focus doesn't go to the right place after clicking on a link
    // (see https://github.com/vercel/next.js/issues/7681). Find a way to fix this.
    return (
      <Link href={href} passHref>
        {componentNode}
      </Link>
    );
  }
);
