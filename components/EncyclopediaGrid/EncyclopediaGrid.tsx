import clsx from 'clsx';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import baseClasses from './EncyclopediaGrid.module.css';

export interface EncyclopediaGridProps extends HTMLComponentProps {}

const displayName = 'EncyclopediaGrid';

export const EncyclopediaGrid = React.forwardRef<
  HTMLElement,
  EncyclopediaGridProps
>(function EncyclopediaGrid(props, ref) {
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
      <Heading align="center">Encyclopedia</Heading>

      <div className={classes.itemsContainer}>{children}</div>
    </Component>
  );
});
