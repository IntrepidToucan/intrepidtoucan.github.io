import clsx from 'clsx';
import React from 'react';

import { useClasses, useProps } from '../../hooks';
import type { HTMLComponentProps } from '../../types';
import baseClasses from './Heading.module.css';

export interface HeadingProps extends HTMLComponentProps {
  /**
   * The level of the heading.
   *
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const displayName = 'Heading';

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  function Heading(props, ref) {
    // Props
    const {
      children,
      classes: classesProp,
      className,
      component,
      level = 1,
      ...restProps
    } = useProps(displayName, props);

    const Component = component ?? `h${level}`;

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        {children}
      </Component>
    );
  }
);
