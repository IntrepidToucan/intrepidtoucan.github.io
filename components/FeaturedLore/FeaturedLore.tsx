import clsx from 'clsx';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import baseClasses from './FeaturedLore.module.css';

export interface FeaturedLoreProps extends HTMLComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "section"
   */
  component?: React.ElementType;
}

const displayName = 'FeaturedLore';

export const FeaturedLore = React.forwardRef<HTMLElement, FeaturedLoreProps>(
  function FeaturedLore(props, ref) {
    // Props
    const {
      children,
      className,
      classes: classesProp,
      component: Component = 'section',
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <Heading>Lore</Heading>

        {children}
      </Component>
    );
  }
);
