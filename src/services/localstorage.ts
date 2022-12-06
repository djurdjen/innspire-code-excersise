export enum LOCAL_STORAGE_KEYS {
  FAVOURITE_FILMS = 'favourite-films',
}

export interface LocalStorageKeyValues {
  [LOCAL_STORAGE_KEYS.FAVOURITE_FILMS]: string[]
}

const localStorageHelper = {
  get: <T extends keyof LocalStorageKeyValues>(storageKey: T): LocalStorageKeyValues[T] => {
    let localStorageData = <LocalStorageKeyValues[T]>{};
    localStorageData = JSON.parse(localStorage.getItem(storageKey) as string);
    return localStorageData;
  },
  set: <T extends keyof LocalStorageKeyValues>(storageKey: T, data: LocalStorageKeyValues[T]): void => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  },
  remove: <T extends keyof LocalStorageKeyValues>(storageKey: T): void => {
    localStorage.removeItem(storageKey);
  }
};

export default localStorageHelper;
