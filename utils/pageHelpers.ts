import { buildStringFromSegments } from '../common';
import { APP_NAME } from './constants';
import type { SiteAreaId, WorldId } from './types';

export function buildPagePath(
  worldId: WorldId,
  areaId: SiteAreaId,
  ...pageSegments: string[]
): string {
  return '/' + buildStringFromSegments([worldId, areaId, ...pageSegments], '/');
}

export function buildPageTitle(...titleSegments: string[]): string {
  return buildStringFromSegments([...titleSegments, APP_NAME], ' | ');
}
