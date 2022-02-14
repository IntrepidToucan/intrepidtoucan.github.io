import enTranslationMap from '../translations/en.json';

// TODO(i18n): Replace with real translation lib/function.
export function tr(key: keyof typeof enTranslationMap): string {
  return enTranslationMap[key] ?? key;
}
