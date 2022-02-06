import merge from 'deepmerge';
import React from 'react';

import type { ClassesMap } from '../types';
import { buildBaseClassName } from '../utils';

type UseClassesResult<T> = { BASE: string } & T;

function mergeStrings(str1: string, str2: string): string {
  return str1.concat(str2);
}

function customMerge() {
  return mergeStrings;
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

    return merge.all([baseResult, userClasses], {
      customMerge,
    }) as UseClassesResult<T>;
  }, [baseClasses, componentName, userClasses]);
}
