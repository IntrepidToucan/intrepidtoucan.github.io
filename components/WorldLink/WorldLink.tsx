import clsx from 'clsx';
import React from 'react';

import {
  Button,
  Heading,
  HTMLComponentProps,
  useClasses,
  useProps,
} from '../../common';
import baseClasses from './WorldLink.module.css';

export interface WorldLinkProps
  extends HTMLComponentProps,
    Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>> {
  /**
   * The call to action text.
   *
   * @default "Go"
   */
  ctaText?: string;

  /**
   * The title.
   */
  title: string;
}

const displayName = 'WorldLink';

export const WorldLink = React.forwardRef<HTMLElement, WorldLinkProps>(
  function WorldLink(props, ref) {
    // Props
    const {
      children,
      className,
      classes: classesProp,
      component: Component = 'div',
      ctaText = 'Go',
      href,
      title,
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        <Heading>{title}</Heading>

        {children}

        <Button href={href}>{ctaText}</Button>
      </Component>
    );
  }
);
