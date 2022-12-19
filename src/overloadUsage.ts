import { readFile } from './overrides';

export async function overloadUsage() {
  const file1 = await readFile('test.png');
  file1.split(',');
  file1.byteLength;

  const file2 = await readFile('test.png', { encoding: 'utf-8' });
  file2.split(',');
  file2.bytelength;

  return [file1, file2];
}
