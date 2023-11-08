import { atom, selector } from 'recoil';
import { UserType } from '@/types/Types';

export const userListState = atom<UserType[]>({
  key: 'userListState',
  default: [],
});

export const pageState = atom<number>({
  key: 'pageState',
  default: 1,
});

export const searchFilterState = atom<string>({
  key: 'searchFilterState',
  default: '',
});

export const nationalityState = atom<string[]>({
  key: 'nationalityState',
  default: [],
});
