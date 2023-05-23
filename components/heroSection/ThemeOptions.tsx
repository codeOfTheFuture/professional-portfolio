import { useTheme } from "context/ThemeContext";
import styles from "./scss/ThemeOptions.module.scss";
import ThemeOption from "./ThemeOption";
import { PreferredTheme, SelectTheme } from "types/typings";

const ThemeOptions = () => {
	const {
		preferredTheme,
		selectTheme,
	}: { preferredTheme: PreferredTheme; selectTheme: SelectTheme } = useTheme();

	return (
		<div className={styles[`content__left__theme__options`]}>
			<ThemeOption
				className={`${styles[`content__left__theme__options--light`]} ${
					styles[`content__left__theme__options--${preferredTheme}`]
				}`}
				onClick={() => selectTheme("light__theme")}
			/>

			<ThemeOption
				className={`${styles[`content__left__theme__options--blue`]} ${
					styles[`content__left__theme__options--${preferredTheme}`]
				}`}
				onClick={() => selectTheme("blue__theme")}
			/>

			<ThemeOption
				className={`${styles[`content__left__theme__options--green`]} ${
					styles[`content__left__theme__options--${preferredTheme}`]
				}`}
				onClick={() => selectTheme("green__theme")}
			/>

			<ThemeOption
				className={`${styles[`content__left__theme__options--purple`]} ${
					styles[`content__left__theme__options--${preferredTheme}`]
				}`}
				onClick={() => selectTheme("purple__theme")}
			/>
		</div>
	);
};

export default ThemeOptions;
