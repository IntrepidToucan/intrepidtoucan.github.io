import type { SiteAreaData, WorldData } from './constants';

export type SiteAreaId = typeof SiteAreaData[keyof typeof SiteAreaData]['id'];
export type WorldId = typeof WorldData[keyof typeof WorldData]['id'];
