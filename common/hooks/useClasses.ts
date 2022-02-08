import mergeWith from 'lodash/mergeWith';
import React from 'react';

import type { ClassesMap } from '../types';
import { buildBaseClassName } from '../utils';

type UseClassesResult<T> = { BASE: string } & T;

function classesMergeFn(val1: unknown, val2: unknown): string | undefined {
  if (typeof val1 === 'string' && typeof val2 === 'string') {
    return val1.concat(val2);
  }

  // Returning `undefined` causes the default merge behavior to be used.
  return undefined;
}

export function useClasses<T extends ClassesMap>(
  componentName: string,
  baseClasses: T,
  userClasses: Partial<T> | undefined
): UseClassesResult<T> {
  return React.useMemo<UseClassesResult<T>>(() => {
    const baseResult: UseClassesResult<T> = {
      BASE: buildBaseClassName(componentName),
      ...baseClasses,
    };

    if (!userClasses) return baseResult;

    // Lodash `mergeWith()` mutates the original object,
    // so start with a fresh object.
    return mergeWith({}, baseResult, userClasses, classesMergeFn);
  }, [baseClasses, componentName, userClasses]);
}
