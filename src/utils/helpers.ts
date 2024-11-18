export function concatStrings(delimiter: string, ...values: string[]): string {
  return values.filter(x => x).join(delimiter);
}

export function displayPlusNumber(num: number): string {
  return num > 0 ? `+${num}` : String(num);
}
