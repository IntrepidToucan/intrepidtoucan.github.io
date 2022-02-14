export const SiteAreaData = {
  ENCYCLOPEDIA: {
    id: 'encyclopedia',
  },
  LORE: {
    id: 'lore',
  },
} as const;

export const ThemeId = {
  DARK: 'dark',
  LIGHT: 'light',
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

export const AppNamespace = {
  GLOBAL: 'global',
  LOS_ANGELES: WorldData.LOS_ANGELES.id,
  MARS: WorldData.MARS.id,
} as const;
