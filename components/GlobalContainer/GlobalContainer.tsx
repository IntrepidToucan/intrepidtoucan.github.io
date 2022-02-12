import clsx from 'clsx';
import React from 'react';

import { HTMLComponentProps, useClasses, useProps } from '../../common';
import baseClasses from './GlobalContainer.module.css';

export interface GlobalContainerProps extends HTMLComponentProps {}

const displayName = 'GlobalContainer';

export const GlobalContainer = React.forwardRef<
  HTMLElement,
  GlobalContainerProps
>(function GlobalContainer(props, ref) {
  // Props
  const {
    children,
    className,
    classes: classesProp,
    component: Component = 'div',
    ...restProps
  } = useProps(displayName, props);

  // Styles
  const classes = useClasses(displayName, baseClasses, classesProp);

  const rootClassName = clsx(classes.BASE, className, classes.root);

  return (
    <Component className={rootClassName} ref={ref} {...restProps}>
      {children}
    </Component>
  );
});
