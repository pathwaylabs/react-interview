import { useContext } from 'react';
import { ThemeModeContext } from '../context';

export interface SetThemeMode {
  mode: string;
  toggleThemeMode: () => void;
}

const useThemeMode = (): SetThemeMode => useContext(ThemeModeContext);

export default useThemeMode;
