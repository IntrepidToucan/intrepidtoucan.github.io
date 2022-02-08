import clsx from 'clsx';
import React from 'react';

import { HTMLComponentProps, Text, useClasses, useProps } from '../../common';
import baseClasses from './GlobalFooter.module.css';

export interface GlobalFooterProps extends HTMLComponentProps {}

const displayName = 'GlobalFooter';

export const GlobalFooter = React.forwardRef<HTMLElement, GlobalFooterProps>(
  function GlobalFooter(props, ref) {
    // Props
    const {
      children,
      classes: classesProp,
      className,
      component: Component = 'footer',
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        {children}

        <Text>Copyright © 2022 Intrepid Toucan</Text>
      </Component>
    );
  }
);
