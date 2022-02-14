import clsx from 'clsx';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import { tr } from '../../utils';
import { NextImage } from '../NextImage';
import baseClasses from './HeroBanner.module.css';

export interface HeroBannerProps extends HTMLComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "header"
   */
  component?: React.ElementType;

  /**
   * The title.
   */
  title: string;
}

const displayName = 'HeroBanner';

export const HeroBanner = React.forwardRef<HTMLElement, HeroBannerProps>(
  function HeroBanner(props, ref) {
    // Props
    const {
      children,
      className,
      classes: classesProp,
      component: Component = 'header',
      title,
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <NextImage
          alt={tr('mars.message.heroBanner.altText')}
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/mars/hero-banner.jpg"
        />

        <Heading className={classes.title}>{title}</Heading>

        {children}
      </Component>
    );
  }
);
