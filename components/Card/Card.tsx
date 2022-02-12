import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import {
  Heading,
  HTMLComponentProps,
  isNil,
  LinkableComponentProps,
  useClasses,
  useLinkProps,
  useProps,
} from '../../common';
import baseClasses from './Card.module.css';

export interface CardProps extends HTMLComponentProps, LinkableComponentProps {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   *
   * If `props.href` is set, this value will default to `"a"`.
   *
   * @default "div"
   */
  component?: React.ElementType;

  /**
   * The title.
   */
  title: string;
}

const displayName = 'Card';

export const Card = React.forwardRef<HTMLElement, CardProps>(function Card(
  props,
  ref
) {
  // Props
  const {
    children,
    className,
    classes: classesProp,
    component,
    href,
    rel,
    target,
    title,
    ...restProps
  } = useProps(displayName, props);

  const { linkProps } = useLinkProps({ rel, target });

  const isLink = !isNil(href);
  const Component = component || (isLink ? 'a' : 'div');

  // Styles
  const classes = useClasses(displayName, baseClasses, classesProp);

  const rootClassName = clsx(classes.BASE, className, classes.root);

  const componentNode = (
    <Component
      className={rootClassName}
      ref={ref}
      {...linkProps}
      {...restProps}
    >
      <Heading>{title}</Heading>

      {children}
    </Component>
  );

  if (isNil(href)) return componentNode;

  return (
    <Link href={href} passHref>
      {componentNode}
    </Link>
  );
});
