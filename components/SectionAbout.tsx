import React from "react";
import AboutMe from "./AboutMe";
import SocialLinks from "./SocialLinks";
import {
	lightMode,
	blueMode,
	greenMode,
	purpleMode,
	mainContainer,
	aboutWrapper,
} from "../styles/SectionAbout.module.scss";
import { useTheme } from "../context/ThemeContext";

interface Props {
	topExpertise: string;
	resumeUrl: string;
	skills: Skill[];
	socials: Social[];
	image: string;
}

const SectionAbout = ({ topExpertise, resumeUrl, skills, socials, image }: Props) => {
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
	}

	return (
		<section className={currentTheme}>
			<div className={mainContainer}>
				<div className={aboutWrapper}>
					<AboutMe topExpertise={topExpertise} resumeUrl={resumeUrl} skills={skills} />
					<SocialLinks socials={socials} image={image} />
				</div>
			</div>
		</section>
	);
};

export default SectionAbout;
