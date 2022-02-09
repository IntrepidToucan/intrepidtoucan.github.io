import clsx from 'clsx';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import baseClasses from './WorldHeroBanner.module.css';

export interface WorldHeroBannerProps extends HTMLComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "header"
   */
  component?: React.ElementType;

  /**
   * The title to display on the banner.
   */
  title: string;
}

const displayName = 'WorldHeroBanner';

export const WorldHeroBanner = React.forwardRef<
  HTMLElement,
  WorldHeroBannerProps
>(function WorldHeroBanner(props, ref) {
  // Props
  const {
    children,
    classes: classesProp,
    className,
    component: Component = 'header',
    title,
    ...restProps
  } = useProps(displayName, props);

  // Styles
  const classes = useClasses(displayName, baseClasses, classesProp);

  const rootClassName = clsx(classes.BASE, className, classes.root);

  return (
    <Component className={rootClassName} ref={ref} {...restProps}>
      <Heading>{title}</Heading>

      {children}
    </Component>
  );
});
