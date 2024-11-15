export function concatStrings(delimiter: string, ...values: string[]): string {
  return values.filter(x => x).join(delimiter);
}
