import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const themeAtom = atom('dark');

// const storage = createJSONStorage(() => sessionStorage);
