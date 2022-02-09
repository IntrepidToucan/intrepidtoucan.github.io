import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { useClasses, useLinkProps, useProps } from '../../hooks';
import type { HTMLComponentProps, LinkableComponentProps } from '../../types';
import { isNil } from '../../utils';
import baseClasses from './Button.module.css';

export interface ButtonProps
  extends HTMLComponentProps,
    LinkableComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * If `props.href` is set, this value will default to `"a"`.
   *
   * @default "button"
   */
  component?: React.ElementType;
}

const displayName = 'Button';

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  function Button(props, ref) {
    // Props
    const {
      children,
      classes: classesProp,
      className,
      component,
      href,
      rel,
      target,
      ...restProps
    } = useProps(displayName, props);

    const { linkProps } = useLinkProps({ rel, target });

    const isLink = !isNil(href);
    const Component = component || (isLink ? 'a' : 'button');

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

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
