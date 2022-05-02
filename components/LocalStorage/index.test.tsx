import useStorage from './index';

describe('Local storage', () => {
  it('should return undefined if key is unknown', () => {
    const result = useStorage().getItem('unknown-key');

    expect(result).toBe(undefined);
  });

  it('should return value if key is known', () => {
    const keyName = 'known-key';
    const keyValue = 'this is the test value';

    useStorage().setItem(keyName, keyValue);

    const result = useStorage().getItem(keyName);

    useStorage().removeItem(keyName);

    expect(result).toBe(keyValue);
  });
});
