import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const themeAtom = atom('dark');

export const showManualSearchAtom = atom(false);

// const storage = createJSONStorage(() => sessionStorage);

// export const showManualSearchAtom = atomWithStorage(
//   'some-key',
//   'dark',
//   sessionStorage
// );
