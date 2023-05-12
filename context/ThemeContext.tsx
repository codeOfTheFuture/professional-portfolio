import { ReactNode, useEffect, useState } from "react";
import { Context } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext: Context<{ theme: string; selectTheme: (theme: string) => void }> =
	createContext({
		theme: "lightMode",
		selectTheme: (theme: string) => {
			theme;
		},
	});

export const useTheme = () => useContext(ThemeContext);

interface Props {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState("lightMode");

	useEffect(() => {
		if (localStorage.getItem("theme")) setTheme(localStorage.getItem("theme")!);
	}, []);

	const selectTheme = (theme: string) => {
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

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
