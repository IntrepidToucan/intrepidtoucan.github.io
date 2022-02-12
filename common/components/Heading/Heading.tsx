import clsx from 'clsx';
import React from 'react';

import { useClasses, useProps } from '../../hooks';
import type { HTMLComponentProps } from '../../types';
import baseClasses from './Heading.module.css';

export interface HeadingProps extends HTMLComponentProps {
  /**
   * The text alignment.
   *
   * @default "default"
   */
  align?: 'center' | 'default' | 'end' | 'start';

  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "h1"
   */
  component?: React.ElementType;

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
      align = 'default',
      children,
      className,
      classes: classesProp,
      component,
      level = 1,
      ...restProps
    } = useProps(displayName, props);

    const Component = component ?? `h${level}`;

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root, {
      [classes.rootAlignCenter]: align === 'center',
      [classes.rootAlignEnd]: align === 'end',
      [classes.rootAlignStart]: align === 'start',
    });

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        {children}
      </Component>
    );
  }
);
