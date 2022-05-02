import useStorage from './index';

describe('Local storage', () => {
  it('should return undefined if key is unknown', () => {
    const result = useStorage().getItem('unknown-key');

    expect(result).toBe(undefined);
  });
});
