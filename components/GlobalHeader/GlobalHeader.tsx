import clsx from 'clsx';
import React from 'react';

import {
  buildDataAttributeName,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import { AppNamespace, buildPagePath, ThemeId, tr } from '../../utils';
import { NextTextLink } from '../NextTextLink';
import baseClasses from './GlobalHeader.module.css';

export interface GlobalHeaderProps extends HTMLComponentProps {}

const displayName = 'GlobalHeader';

export const GlobalHeader = React.forwardRef<HTMLElement, GlobalHeaderProps>(
  function GlobalHeader(props, ref) {
    // Props
    const {
      children,
      className,
      classes: classesProp,
      component: Component = 'header',
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <NextTextLink href={buildPagePath()}>
          {tr('global.title.selfName')}
        </NextTextLink>

        {children}

        <button
          onClick={() => {
            const attrName = buildDataAttributeName('theme', {
              namespace: AppNamespace.GLOBAL,
            });

            document.body.setAttribute(
              attrName,
              document.body.getAttribute(attrName) === ThemeId.LIGHT
                ? ThemeId.DARK
                : ThemeId.LIGHT
            );
          }}
        >
          {tr('global.action.toggleTheme')}
        </button>
      </Component>
    );
  }
);
