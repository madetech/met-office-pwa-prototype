type StorageType = 'session' | 'local';

type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string;
  setItem: (key: string, value: string, type?: StorageType) => void;
  removeItem: (key: string, type?: StorageType) => void;
};

export const KEY_LOCAL_ADDRESS = 'local-address';

const useStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' =>
    `${type ?? 'session'}Storage`;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string, type?: StorageType): string => {
    return isBrowser ? window[storageType(type)][key] : '';
  };

  const setItem = (key: string, value: string, type?: StorageType): void => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value);
    }
  };

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
