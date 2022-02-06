import { APP_NAME } from './constants';
import { buildStringFromSegments } from './primitiveHelpers';

export function buildPageTitle(titleSegments: string[] = []): string {
  return buildStringFromSegments([...titleSegments, APP_NAME], ' | ');
}
