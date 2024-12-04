export function concatStrings(delimiter: string, ...values: string[]): string {
  return values.filter(x => x).join(delimiter);
}

export function displaySignedNumber(num: number): string {
  if (num > 0) return `+${num}`;
  if (num < 0) return `-${num}`;

  return String(num);
}
