import type React from 'react';

export type ClassesMap = { [className: string]: string };

export type LinkableComponentProps = Pick<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'rel' | 'target'
>;

export interface HTMLComponentProps<
  T extends HTMLElement = HTMLElement,
  U extends ClassesMap = {}
> extends Pick<React.HTMLAttributes<T>, 'className' | 'id' | 'role' | 'style'>,
    React.RefAttributes<T>,
    React.DOMAttributes<T>,
    React.AriaAttributes {
  /**
   * A React component or intrinsic JSX element string to use as the root element of the component.
   */
  component?: React.ElementType;

  /**
   * A map of class name overrides for the HTML elements within the component.
   */
  classes?: U;

  /**
   * A data attribute used as a unique identifier when querying for DOM elements in tests.
   */
  'data-testid'?: string;
}
