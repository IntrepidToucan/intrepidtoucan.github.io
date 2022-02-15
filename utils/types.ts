import type {
  GlobalAreaData,
  GlobalData,
  WorldAreaData,
  WorldData,
} from './constants';

export type GlobalAreaId =
  typeof GlobalAreaData[keyof typeof GlobalAreaData]['id'];
export type GlobalId = typeof GlobalData['id'];

export type WorldAreaId =
  typeof WorldAreaData[keyof typeof WorldAreaData]['id'];
export type WorldId = typeof WorldData[keyof typeof WorldData]['id'];
