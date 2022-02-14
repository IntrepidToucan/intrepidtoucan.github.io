import { buildStringFromSegments } from '../common';
import { tr } from './i18nHelpers';
import type { SiteAreaId, WorldId } from './types';

export function buildPagePath(
  worldId?: WorldId,
  areaId?: SiteAreaId,
  ...pageSegments: string[]
): string {
  return '/' + buildStringFromSegments([worldId, areaId, ...pageSegments], '/');
}

export function buildPageTitle(...titleSegments: string[]): string {
  return buildStringFromSegments(
    [...titleSegments, tr('global.title.selfName')],
    ' | '
  );
}
