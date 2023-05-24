import ThemeContext from "context/ThemeContext";
import { ReactNode, useEffect, useState } from "react";
import { PreferredTheme } from "types/typings";

interface Props {
	children: ReactNode;
}

/**
 * ThemeProvider is a component that provides the preferred theme through the ThemeContext.
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const ThemeProvider = ({ children }: Props): JSX.Element => {
	const [preferredTheme, setPreferredTheme] = useState<PreferredTheme>("light__theme");

	useEffect(() => {
		if (localStorage.getItem("theme"))
			setPreferredTheme(localStorage.getItem("theme") as PreferredTheme);
	}, []);

	/**
	 * selectTheme is a function that allows changing the preferred theme.
	 * @param {PreferredTheme} theme - The new theme to be selected.
	 */
	const selectTheme = (theme: PreferredTheme): void => {
		if (localStorage.getItem("theme")) {
			let currentTheme: PreferredTheme = localStorage.getItem("theme") as PreferredTheme;
			currentTheme = theme;
			localStorage.setItem("theme", currentTheme);
		} else {
			localStorage.setItem("theme", theme);
		}
		setPreferredTheme(theme);
	};

	const value = {
		preferredTheme,
		selectTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
