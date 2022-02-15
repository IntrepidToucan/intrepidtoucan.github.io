import { buildStringFromSegments } from '../common';
import { GlobalData } from './constants';
import { tr } from './i18nHelpers';
import type { GlobalAreaId, GlobalId, WorldAreaId, WorldId } from './types';

export function buildPagePath(
  domainId?: GlobalId | WorldId,
  areaId?: GlobalAreaId | WorldAreaId,
  ...pageSegments: string[]
): string {
  return (
    '/' +
    buildStringFromSegments(
      [domainId === GlobalData.id ? null : domainId, areaId, ...pageSegments],
      '/'
    )
  );
}

export function buildPageTitle(...titleSegments: string[]): string {
  return buildStringFromSegments(
    [...titleSegments, tr('global.title.selfName')],
    ' | '
  );
}
