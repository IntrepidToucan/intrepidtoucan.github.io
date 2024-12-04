export const IRONSWORN_CHALLENGE_RANKS = ['troublesome', 'dangeorus', 'formidable', 'extreme', 'epic'] as const;

export type IronswornAssetType = "companion" | "path" | "combat_talent" | "ritual";
export type IronswornChallengeRank = typeof IRONSWORN_CHALLENGE_RANKS[number];
export type IronswornDebility =
  | "wounded"
  | "shaken"
  | "unprepared"
  | "encumbered"
  | "maimed"
  | "corrupted"
  | "cursed"
  | "tormented";

export interface IronswornAsset {
  abilities: string[];
  name: string;
  description: string;
  type: IronswornAssetType;
}

export interface IronswornBond {
  name: string;
  description: string;
}

export interface IronswornPlayerCharacterStats {
  edge: number;
  heart: number;
  iron: number;
  shadow: number;
  wits: number;
}

export interface IronswornEquipment {
  name: string;
  description: string;
}

export interface IronswornVow {
  description: string;
  progress: number;
  rank: IronswornChallengeRank;
}

export interface IronswornPlayerCharacterData {
  assets: IronswornAsset[];
  bonds: IronswornBond[];
  debilities: IronswornDebility[];
  equipment: IronswornEquipment[];
  experience: number;
  health: number,
  momentum: number;
  name: "Lucia",
  spirit: 5,
  stats: IronswornPlayerCharacterStats;
  supply: number,
  vows: IronswornVow[];
}

export const IronswornTermDescriptionMapping: Record<keyof (Pick<IronswornPlayerCharacterData, 'health' | 'momentum' | 'spirit' | 'supply'> & IronswornPlayerCharacterStats), string> = {
  edge: "Quickness, agility, and prowess in ranged combat",
  health: "Your current physical condition and stamina",
  heart: "Courage, willpower, empathy, sociability, and loyalty",
  iron: "Physical strength, endurance, aggressiveness, and prowess in close combat",
  momentum: "Represents how you are faring in your quests",
  shadow: "Sneakiness, deceptiveness, and cunning",
  spirit: "Your current mental state",
  supply:
    "An abstract representation of your preparedness, including ammo, food, water, and general upkeep",
  wits: "Expertise, knowledge, and observation",
};

export function getIronswornMomentumAndDebilities(rawMomentum: number, debilities: IronswornDebility[]): Pick<IronswornPlayerCharacterData, 'debilities' | 'momentum'> {
  return {
    debilities,
    momentum: Math.max(-6, Math.min(rawMomentum, 10 - debilities.length)),
  }
}

export function getIronswornResetMomentum(debilities: IronswornDebility[]): number {
  if (debilities.length === 1) return 1;
  if (debilities.length > 1) return 0;

  return 2;
}