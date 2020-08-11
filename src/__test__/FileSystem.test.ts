import { readFile } from '../utils/fileSystem';

describe('FileSystem Read CPUProfile', () => {
  it('Should read valid profiles', async () => {
    const filePath =
      '/Users/zomato/Desktop/hermes-test-profile/f13000.cpuprofile';
    expect(Object.keys(await readFile(filePath))).toEqual([
      'traceEvents',
      'samples',
      'stackFrames',
    ]);
  });
  it('Should throw for invalid paths', async () => {
    const filePath = '';
    expect(await readFile(filePath)).toThrow(
      `ENOENT: no such file or directory, open '${filePath}'`
    );
  });
  it('Should throw for invalid JSON content', async () => {
    // expect(await readFile(filePath)).toThrow(`Unexpected end of JSON input`)
  });

  it('Should throw for empty File', async () => {
    // expect(await readFile(filePath)).toThrow(`${filePath} is empty`)
  });
});