import { getIronswornMomentumAndDebilities, type IronswornPlayerCharacterData } from "@utils/index";

export const PlayerCharacter_000: IronswornPlayerCharacterData = {
  ...getIronswornMomentumAndDebilities(2, []),
  assets: [
    {
      name: "Archer",
      type: "combat_talent",
      abilities: ["(If you wield a bow) When you Secure an Advantage, choose your approach and add +1: trust your instincts (roll +wits and take +2 momentum on a strong hit), line up your shot (roll +edge and take +1 momentum on a hit)", null, null],
    },
    {
      name: "Animal Kin",
      type: "path",
      abilities: ["For animal-related moves, add +1 and take +1 momentum on a hit", null, null],

    }, {
      name: "Fated",
      type: "path",
      abilities: ["Limited protection from Face Death or Face Desolation while your background vow is unfulfilled", null, null],
    },
  ],
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