function log<T extends { toString(): string }>(o: T): T {
  console.log('toString: %s', o.toString());
  return o;
}

export async function genericFunctionUsage() {
  const num1 = 1;
  const num2 = log(num1);

  const str1 = 'abc';
  const str2 = log(str1);

  const buf1 = Buffer.from('abc');
  const buf2 = log(buf1);

  const nul1: Object | null = null;
  const nul2 = log(nul1);

  return [num2, str2, buf2, nul2];
}
