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
		<div className={styles.theme__options}>
			<ThemeOption
				className={`${styles.theme__options__light} ${styles[`theme__options__${preferredTheme}`]}`}
				onClick={() => selectTheme("light__theme")}
			/>

			<ThemeOption
				className={`${styles.theme__options__blue} ${styles[`theme__options__${preferredTheme}`]}`}
				onClick={() => selectTheme("blue__theme")}
			/>

			<ThemeOption
				className={`${styles.theme__options__green} ${styles[`theme__options__${preferredTheme}`]}`}
				onClick={() => selectTheme("green__theme")}
			/>

			<ThemeOption
				className={`${styles.theme__options__purple} ${
					styles[`theme__options__${preferredTheme}`]
				}`}
				onClick={() => selectTheme("purple__theme")}
			/>
		</div>
	);
};

export default ThemeOptions;
