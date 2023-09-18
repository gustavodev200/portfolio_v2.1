import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "../@types/themeTypes";

interface ToggleThemeProps {
  theme: string;
  toggleTheme: () => void;
}

const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;

const useThemeStore = create(
  persist<ToggleThemeProps>(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "@theme:portfolio",
      getStorage: () => localStorage,
    }
  )
);

export default useThemeStore;
