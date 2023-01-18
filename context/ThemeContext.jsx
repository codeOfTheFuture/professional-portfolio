import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
  theme: "lightMode",
  selectTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("lightMode");

  useEffect(() => {
    if (localStorage.getItem("theme")) setTheme(localStorage.getItem("theme"));
  }, []);

  const selectTheme = theme => {
    if (localStorage.getItem(theme)) {
      let currentTheme = localStorage.getItem("theme");
      currentTheme = theme;
      localStorage.setItem("theme", currentTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
    setTheme(theme);
  };

  const value = {
    theme,
    selectTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
