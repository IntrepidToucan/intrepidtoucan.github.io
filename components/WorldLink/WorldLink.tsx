import clsx from 'clsx';
import React from 'react';

import {
  HTMLComponentProps,
  TextLink,
  useClasses,
  useProps,
} from '../../common';
import baseClasses from './WorldLink.module.css';

export interface WorldLinkProps
  extends HTMLComponentProps,
    Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>> {
  /**
   * The Call to Action text.
   *
   * @default "Go"
   */
  ctaText?: string;
}

const displayName = 'WorldLink';

export const WorldLink = React.forwardRef<HTMLElement, WorldLinkProps>(
  function WorldLink(props, ref) {
    // Props
    const {
      children,
      classes: classesProp,
      className,
      component: Component = 'div',
      ctaText = 'Go',
      href,
      ...restProps
    } = useProps(displayName, props);

    // Styles
    const classes = useClasses(displayName, baseClasses, classesProp);

    const rootClassName = clsx(classes.BASE, className, classes.root);

    return (
      <Component className={rootClassName} ref={ref} {...restProps}>
        {children}

        <TextLink href={href} variant="button">
          {ctaText}
        </TextLink>
      </Component>
    );
  }
);
