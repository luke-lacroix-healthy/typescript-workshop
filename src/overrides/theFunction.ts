export function readFile(filename: string): Promise<Buffer>;
export function readFile(filename: string, opts: { encoding: BufferEncoding }): Promise<string>;
export async function readFile(
  filename: string,
  opts?: { encoding: BufferEncoding },
): Promise<Buffer | string> {
  const fakeFileContents = Buffer.from('Pretend like I read this from the disk');
  if (opts?.encoding) {
    return fakeFileContents.toString(opts.encoding);
  }
  return fakeFileContents;
}
