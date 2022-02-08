import clsx from 'clsx';
import React from 'react';

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
      rel,
      target,
      ...restProps
    } = useProps(displayName, props);

    const { linkProps } = useLinkProps({ rel, target });

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

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
