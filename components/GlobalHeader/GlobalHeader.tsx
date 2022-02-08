import clsx from 'clsx';
import React from 'react';

import {
  buildDataAttributeName,
  HTMLComponentProps,
  TextLink,
  useClasses,
  useProps,
} from '../../common';
import { APP_NAME, Namespace, ThemeId } from '../../utils';
import baseClasses from './GlobalHeader.module.css';

export interface GlobalHeaderProps extends HTMLComponentProps {}

const displayName = 'GlobalHeader';

export const GlobalHeader = React.forwardRef<HTMLElement, GlobalHeaderProps>(
  function GlobalHeader(props, ref) {
    // Props
    const {
      children,
      classes: classesProp,
      className,
      component: Component = 'header',
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <TextLink href="/">{APP_NAME}</TextLink>

        {children}

        <button
          onClick={() => {
            const attrName = buildDataAttributeName('theme', {
              namespace: Namespace.GLOBAL,
            });

            document.body.setAttribute(
              attrName,
              document.body.getAttribute(attrName) === ThemeId.LIGHT
                ? ThemeId.DARK
                : ThemeId.LIGHT
            );
          }}
        >
          Toggle Theme
        </button>
      </Component>
    );
  }
);
