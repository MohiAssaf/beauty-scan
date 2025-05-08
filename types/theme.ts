export type ThemeType = "light" | "dark";

export interface ThemeContextProps {
  theme: ThemeType;
  isDark: boolean;
  setTheme: (theme: ThemeType) => Promise<void>;
  toggleTheme: () => Promise<void>;
  isHydrated: boolean;
}
