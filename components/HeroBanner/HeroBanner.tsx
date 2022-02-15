import clsx from 'clsx';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import { NextImage } from '../NextImage';
import baseClasses from './HeroBanner.module.css';

export interface HeroBannerProps extends HTMLComponentProps {
  /**
   * The alt text of the hero image.
   */
  alt: string;

  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * @default "header"
   */
  component?: React.ElementType;

  /**
   * The `src` the hero image.
   */
  src: string;

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
      alt,
      children,
      className,
      classes: classesProp,
      component: Component = 'header',
      src,
      title,
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <NextImage
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          src={src}
        />

        <Heading className={classes.title}>{title}</Heading>

        {children}
      </Component>
    );
  }
);
