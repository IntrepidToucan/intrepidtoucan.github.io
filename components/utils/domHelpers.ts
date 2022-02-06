import kebabCase from 'just-kebab-case';

export function buildBaseClassName(componentName: string): string {
  return `IntrepidToucan-${componentName}`;
}

export function buildDataAttributeName(
  attributeId: string,
  { namespace }: { namespace: string }
): string {
  return `data-intrepid-toucan-${kebabCase(namespace)}-${kebabCase(
    attributeId
  )}`;
}
