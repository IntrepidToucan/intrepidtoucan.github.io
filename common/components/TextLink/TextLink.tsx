import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { isNil } from '../../../utils';
import { useClasses, useProps } from '../../hooks';
import { useLinkProps } from '../../hooks/useLinkProps';
import type { HTMLComponentProps, LinkableComponentProps } from '../../types';
import baseClasses from './TextLink.module.css';

export interface TextLinkProps
  extends HTMLComponentProps,
    LinkableComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "a"
   */
  component?: React.ElementType;

  /**
   * The visual variant of the component.
   *
   * @default "text"
   */
  variant?: 'button' | 'text';
}

const displayName = 'TextLink';

export const TextLink = React.forwardRef<HTMLElement, TextLinkProps>(
  function TextLink(props, ref) {
    // Props
    const {
      children,
      classes: classesProp,
      className,
      component: Component = 'a',
      href,
      rel,
      target,
      variant = 'text',
      ...restProps
    } = useProps(displayName, props);

    const { linkProps } = useLinkProps({ rel, target });

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root, {
      [classes.rootButton]: variant === 'button',
      [classes.rootText]: variant === 'text',
    });

    const componentNode = (
      <Component
        className={rootClassName}
        ref={ref}
        {...linkProps}
        {...restProps}
      >
        {children}
      </Component>
    );

    if (isNil(href)) return componentNode;

    return (
      <Link href={href} passHref>
        {componentNode}
      </Link>
    );
  }
);
