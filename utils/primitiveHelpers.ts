export function buildStringFromSegments(
  segments: (string | null | undefined)[],
  separator = ' '
): string {
  return segments.filter((str) => str).join(separator);
}
