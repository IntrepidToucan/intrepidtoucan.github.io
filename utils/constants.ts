export const GlobalAreaData = {
  INSPIRATION: {
    id: 'inspiration',
  },
} as const;

export const GlobalData = {
  id: 'global',
} as const;

export const ThemeId = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export const WorldAreaData = {
  ENCYCLOPEDIA: {
    id: 'encyclopedia',
  },
  LORE: {
    id: 'lore',
  },
} as const;

export const WorldData = {
  LOS_ANGELES: {
    id: 'la',
    loreData: {
      MAIN: {
        id: 'main',
      },
    },
  },
  MARS: {
    id: 'mars',
    loreData: {
      MAIN: {
        id: 'main',
      },
    },
  },
} as const;
