import clsx from 'clsx';
import React from 'react';

import { useClasses, useProps } from '../../hooks';
import type { HTMLComponentProps } from '../../types';
import baseClasses from './Text.module.css';

export interface TextProps extends HTMLComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "p"
   */
  component?: React.ElementType;

  /**
   * The size of the text.
   *
   * @default "medium"
   */
  size?: 'large' | 'medium' | 'small';
}

const displayName = 'Text';

export const Text = React.forwardRef<HTMLElement, TextProps>(function Text(
  props,
  ref
) {
  // Props
  const {
    children,
    classes: classesProp,
    className,
    component: Component = 'p',
    size = 'medium',
    ...restProps
  } = useProps(displayName, props);

  // Styles
  const classes = useClasses(displayName, baseClasses, classesProp);

  const rootClassName = clsx(classes.BASE, className, classes.root, {
    [classes.rootLarge]: size === 'large',
    [classes.rootMedium]: size === 'medium',
    [classes.rootSmall]: size === 'small',
  });

  return (
    <Component className={rootClassName} ref={ref} {...restProps}>
      {children}
    </Component>
  );
});
