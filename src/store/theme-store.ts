// store/theme-store.ts
import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark", // Default theme is now dark
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.remove(state.theme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme); // Persist theme in localStorage
      return { theme: newTheme };
    }),
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const theme = savedTheme || "dark"; // Default to dark if not set
    document.documentElement.classList.add(theme);
    set({ theme });
  },
}));
