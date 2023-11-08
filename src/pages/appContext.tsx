import { createContext, useContext } from 'react'

type AppContextValue = {
  colorScheme: 'light' | 'dark';
  onChange: (color: 'light' | 'dark') => void;
};

export const AppContext = createContext<AppContextValue | null>(null);
export const useAppContext = () => useContext(AppContext);