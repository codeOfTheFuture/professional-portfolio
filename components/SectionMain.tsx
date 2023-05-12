import React from "react";
import Hero from "./Hero";
import styles, {
	lightMode,
	blueMode,
	greenMode,
	purpleMode,
} from "../styles/SectionMain.module.scss";
import { useTheme } from "../context/ThemeContext";

interface Props {
	name: string;
	profilePic: string;
	whatIDo: string;
}

const SectionMain = ({ name, profilePic, whatIDo }: Props) => {
	const { theme } = useTheme();

	let currentTheme;

	switch (theme) {
		case "lightMode":
			currentTheme = lightMode;
			break;
		case "blueMode":
			currentTheme = blueMode;
			break;
		case "greenMode":
			currentTheme = greenMode;
			break;
		case "purpleMode":
			currentTheme = purpleMode;
			break;
		default:
			currentTheme = lightMode;
			break;
	}

	return (
		<section className={("section", styles.sectionMain, currentTheme)}>
			<div className={styles.mainContent}>
				<div className={styles.greeting}>
					<h1>Hi, the name is {name}</h1>
				</div>
				<Hero profilePic={profilePic} whatIDo={whatIDo} />
			</div>
		</section>
	);
};

export default SectionMain;
