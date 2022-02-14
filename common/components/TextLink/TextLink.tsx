import clsx from 'clsx';
import React from 'react';

import { useClasses, useLinkProps, useProps } from '../../hooks';
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
   * @default "inline"
   */
  variant?: 'inline' | 'standalone';
}

const displayName = 'TextLink';

export const TextLink = React.forwardRef<HTMLElement, TextLinkProps>(
  function TextLink(props, ref) {
    // Props
    const {
      children,
      className,
      classes: classesProp,
      component: Component = 'a',
      rel,
      target,
      variant = 'inline',
      ...restProps
    } = useProps(displayName, props);

    const { linkProps } = useLinkProps({ rel, target });

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root, {
      [classes.rootStandalone]: variant === 'standalone',
    });

    return (
      <Component
        className={rootClassName}
        ref={ref}
        {...linkProps}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);
