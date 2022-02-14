import clsx from 'clsx';
import React from 'react';

import { HTMLComponentProps, useClasses, useProps } from '../../common';
import baseClasses from './LoreEntriesGrid.module.css';

export interface LoreEntriesGridProps extends HTMLComponentProps {}

const displayName = 'LoreEntriesGrid';

export const LoreEntriesGrid = React.forwardRef<
  HTMLElement,
  LoreEntriesGridProps
>(function LoreEntriesGrid(props, ref) {
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
