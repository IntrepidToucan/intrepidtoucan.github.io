import clsx from 'clsx';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import { tr } from '../../utils';
import { NextTextLink } from '../NextTextLink';
import baseClasses from './EncyclopediaHighlightsGrid.module.css';

export interface EncyclopediaHighlightsGridProps extends HTMLComponentProps {
  /**
   * The `href` for the link to the encyclopedia.
   */
  encyclopediaHref: string;

  /**
   * The title.
   */
  title: string;
}

const displayName = 'EncyclopediaHighlightsGrid';

export const EncyclopediaHighlightsGrid = React.forwardRef<
  HTMLElement,
  EncyclopediaHighlightsGridProps
>(function EncyclopediaHighlightsGrid(props, ref) {
  // Props
  const {
    children,
    className,
    classes: classesProp,
    component: Component = 'div',
    encyclopediaHref,
    title,
    ...restProps
  } = useProps(displayName, props);

  // Styles
  const classes = useClasses(displayName, baseClasses, classesProp);

  const rootClassName = clsx(classes.BASE, className, classes.root);

  return (
    <Component className={rootClassName} ref={ref} {...restProps}>
      <Heading align="center">{title}</Heading>

      <div className={classes.itemsContainer}>{children}</div>

      <div className={classes.actionsContainer}>
        <NextTextLink
          className={classes.encyclopediaLink}
          href={encyclopediaHref}
          variant="standalone"
        >
          {tr('common.action.seeMore')}
        </NextTextLink>
      </div>
    </Component>
  );
});
