import clsx from 'clsx';
import React from 'react';

import {
  Button,
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import { buildPagePath, WorldAreaData, WorldId } from '../../utils';
import baseClasses from './FeaturedLore.module.css';

export interface FeaturedLoreProps extends HTMLComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "section"
   */
  component?: React.ElementType;

  /**
   * The ID of the relevant lore entry.
   */
  entryId: string;

  /**
   * The ID of the relevant lore.
   */
  loreId: string;

  /**
   * The ID of the relevant world.
   */
  worldId: WorldId;
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
      entryId,
      loreId,
      worldId,
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <Heading>Lore</Heading>

        {children}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button href={buildPagePath(worldId, WorldAreaData.LORE.id)}>
            Read from Beginning
          </Button>

          <Button
            href={buildPagePath(
              worldId,
              WorldAreaData.LORE.id,
              loreId,
              entryId
            )}
          >
            Read More
          </Button>
        </div>
      </Component>
    );
  }
);
