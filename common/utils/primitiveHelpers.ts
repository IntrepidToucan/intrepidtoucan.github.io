export function buildStringFromSegments(
  segments: (string | null | undefined)[],
  separator = ' '
): string {
  return segments.filter((segment) => segment).join(separator);
}

export function isNil(val: unknown): val is null | undefined {
  return val === null || val === undefined;
}
