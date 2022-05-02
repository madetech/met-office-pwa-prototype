import { HourlyDataLastUpdated } from '../../interfaces/api-data-hourly';

type StorageType = 'session' | 'local';

type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string;
  getItemAsHourlyDataLastUpdated: (
    key: string,
    type?: StorageType
  ) => HourlyDataLastUpdated | null;
  setItem: (key: string, value: string, type?: StorageType) => void;
  removeItem: (key: string, type?: StorageType) => void;
};

export const KEY_LOCAL_ADDRESS = 'local-address';
export const KEY_LOCAL_FORECAST = 'local-forecast';

const useStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' =>
    `${type ?? 'session'}Storage`;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string, type?: StorageType): string => {
    return isBrowser ? window[storageType(type)][key] : '';
  };

  const getItemAsHourlyDataLastUpdated = (
    key: string,
    type?: StorageType
  ): HourlyDataLastUpdated | null => {
    const data = getItem(key, type);

    if (data) {
      console.log('Local storage data: ', data);
      return JSON.parse(data);
    }

    return null;
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
    getItemAsHourlyDataLastUpdated,
    setItem,
    removeItem,
  };
};

export default useStorage;
