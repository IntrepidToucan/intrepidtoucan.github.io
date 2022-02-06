export function buildStringFromSegments(
  segments: (string | null | undefined)[],
  separator = ' '
): string {
  return segments.filter((segment) => segment).join(separator);
}
