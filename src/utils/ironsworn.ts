export const IRONSWORN_CHALLENGE_RANKS = ['troublesome', 'dangerous', 'formidable', 'extreme', 'epic'] as const;

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
  abilities: [string | null, string | null, string | null];
  name: string;
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
  health: number;
  momentum: number;
  name: string;
  spirit: number;
  stats: IronswornPlayerCharacterStats;
  supply: number;
  vows: IronswornVow[];
}

export const IronswornTermDescriptionMapping: Record<keyof (Pick<IronswornPlayerCharacterData, 'health' | 'momentum' | 'spirit' | 'supply'> & IronswornPlayerCharacterStats) | IronswornChallengeRank, string> = {
  dangerous: "2 progress per milestone",
  edge: "Quickness, agility, and prowess in ranged combat",
  epic: "1 tick per milestone",
  extreme: "2 ticks per milestone",
  formidable: "1 progress per milestone",
  health: "Your current physical condition and stamina",
  heart: "Courage, willpower, empathy, sociability, and loyalty",
  iron: "Physical strength, endurance, aggressiveness, and prowess in close combat",
  momentum: "Represents how you are faring in your quests",
  shadow: "Sneakiness, deceptiveness, and cunning",
  spirit: "Your current mental state",
  supply:
    "An abstract representation of your preparedness, including ammo, food, water, and general upkeep",
  troublesome: "3 progress per milestone",
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