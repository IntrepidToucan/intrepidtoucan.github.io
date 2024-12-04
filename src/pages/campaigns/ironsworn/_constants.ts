import { getIronswornMomentumAndDebilities, type IronswornPlayerCharacterData } from "@utils/index";

export const PlayerCharacter_000: IronswornPlayerCharacterData = {
  ...getIronswornMomentumAndDebilities(2, []),
  assets: [],
  bonds: [],
  equipment: [],
  experience: 0,
  health: 5,
  name: "Lucia",
  spirit: 5,
  stats: {
    edge: 2,
    heart: 3,
    iron: 1,
    shadow: 1,
    wits: 2,
  },
  supply: 5,
  vows: [{
    description: "To found the first great city of the Ironlands",
    progress: 0,
    rank: "epic",
  }]
} as const;