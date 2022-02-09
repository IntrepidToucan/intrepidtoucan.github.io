import clsx from 'clsx';
import React from 'react';

import { HTMLComponentProps, useClasses, useProps } from '../../common';
import baseClasses from './WorldLinksGrid.module.css';

export interface WorldLinksGridProps extends HTMLComponentProps {}

const displayName = 'WorldLinksGrid';

export const WorldLinksGrid = React.forwardRef<
  HTMLElement,
  WorldLinksGridProps
>(function WorldLinksGrid(props, ref) {
  // Props
  const {
    children,
    classes: classesProp,
    className,
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
