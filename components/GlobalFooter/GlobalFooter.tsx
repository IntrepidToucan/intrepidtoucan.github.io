import clsx from 'clsx';
import React from 'react';

import {
  HTMLComponentProps,
  Text,
  TextLink,
  useClasses,
  useProps,
} from '../../common';
import { buildPagePath, GlobalAreaData, GlobalData, tr } from '../../utils';
import baseClasses from './GlobalFooter.module.css';

export interface GlobalFooterProps extends HTMLComponentProps {}

const displayName = 'GlobalFooter';

export const GlobalFooter = React.forwardRef<HTMLElement, GlobalFooterProps>(
  function GlobalFooter(props, ref) {
    // Props
    const {
      children,
      className,
      classes: classesProp,
      component: Component = 'footer',
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        {children}
        <Text>{tr('global.message.copyright')}</Text> |{' '}
        <TextLink
          href={buildPagePath(GlobalData.id, GlobalAreaData.INSPIRATION.id)}
        >
          {tr('global.title.inspiration')}
        </TextLink>
      </Component>
    );
  }
);
