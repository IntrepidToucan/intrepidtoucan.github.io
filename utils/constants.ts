export const APP_NAME = 'Intrepid Toucan';

export const Namespace = {
  GLOBAL: 'global',
} as const;

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
    name: 'Los Angeles',
  },
  MARS: {
    id: 'mars',
    loreData: {
      MAIN: {
        id: 'main',
      },
    },
    name: 'Mars',
  },
} as const;
