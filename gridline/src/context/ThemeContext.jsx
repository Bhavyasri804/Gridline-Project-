import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "gridline-theme";
const ThemeContext = createContext(null);

function getInitialTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light"; // storage can be blocked (private mode), so fall back quietly
  }
}

/**
 * Holds the current theme ("light" or "dark") and a function to switch it.
 * Wrap the app in this provider; any component below can call useTheme().
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Whenever the theme changes, tell the page (the CSS reads this attribute).
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore: the theme still works, it just will not be remembered
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  // Memoised so consumers only re-render when the theme really changes.
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Read the theme from any component inside <ThemeProvider>. */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return context;
}
