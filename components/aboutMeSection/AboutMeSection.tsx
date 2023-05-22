import AboutMe from "./AboutMeInfo";
import SocialLinks from "./SocialLinks";
import styles from "./scss/AboutMeSection.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme, Skill, Social } from "types/typings";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Props {
	topExpertise: string;
	resumeUrl: File;
	skills: Skill[];
	socials: Social[];
	image: SanityImageSource;
}

const AboutMeSection = ({ topExpertise, resumeUrl, skills, socials, image }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<section className={styles[`about__me__section--${preferredTheme}`]}>
			<div className={styles[`about__me__section__content`]}>
				<AboutMe topExpertise={topExpertise} resumeUrl={resumeUrl} skills={skills} />
				<SocialLinks socials={socials} image={image} />
			</div>
		</section>
	);
};

export default AboutMeSection;
