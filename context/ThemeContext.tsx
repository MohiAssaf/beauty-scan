import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContextProps, ThemeType } from "@/types/theme";

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  isDark: false,
  setTheme: async () => {},
  toggleTheme: async () => {},
  isHydrated: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("@theme");
        if (savedTheme === "light" || savedTheme === "dark") {
          setThemeState(savedTheme);
        }
        setIsHydrated(true);
      } catch (error) {
        console.log(error);
        setIsHydrated(false);
      }
    };

    loadTheme();
  }, []);

  const setTheme = async (theme: ThemeType) => {
    try {
      await AsyncStorage.setItem("@theme", theme);
      setThemeState(theme);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    await setTheme(newTheme);
  };

  const value = useMemo(
    () => ({
      theme: theme,
      isDark: theme === "dark",
      setTheme,
      toggleTheme,
      isHydrated,
    }),
    [theme, isHydrated]
  );

  if (!isHydrated) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
