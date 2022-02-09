import { buildStringFromSegments } from '../common';
import { APP_NAME } from './constants';

export function buildPageTitle(titleSegments: string[] = []): string {
  return buildStringFromSegments([...titleSegments, APP_NAME], ' | ');
}
