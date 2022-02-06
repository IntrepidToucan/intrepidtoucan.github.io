import clsx from 'clsx';
import React from 'react';

import { useClasses, useProps } from '../../hooks';
import type { HTMLComponentProps } from '../../types';
import baseClasses from './WorldLink.module.css';

export interface WorldLinkProps extends HTMLComponentProps {}

const displayName = 'WorldLink';

export const WorldLink = React.forwardRef<HTMLElement, WorldLinkProps>(
  function WorldLink(props, ref) {
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
  }
);
