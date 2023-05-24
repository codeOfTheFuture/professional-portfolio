import { Context } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { PreferredTheme, ThemeContext } from "types/typings";

/**
 * ThemeContext represents the context object for managing the preferred theme.
 */
const ThemeContext: Context<ThemeContext> = createContext<ThemeContext>({
	/**
	 * preferredTheme represents the currently selected theme.
	 * It can be one of "light__theme", "blue__theme", "green__theme", or "purple__theme".
	 */
	preferredTheme: "light__theme",
	/**
	 * selectTheme is a function that allows changing the preferred theme.
	 * @param {PreferredTheme} theme - The new theme to be selected.
	 */
	selectTheme: (theme: PreferredTheme) => {
		theme;
	},
});

/**
 * useTheme is a custom hook that provides access to the ThemeContext.
 * @returns {ThemeContext} The ThemeContext object.
 */
export const useTheme = (): ThemeContext => useContext<ThemeContext>(ThemeContext);

export default ThemeContext;
