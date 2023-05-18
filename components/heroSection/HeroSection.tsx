import HeroContent from "./HeroContent";
import styles from "./scss/HeroSection.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme } from "types/typings";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Props {
	name: string;
	profilePic: SanityImageSource;
	whatIDo: string;
}

const HeroSection = ({ name, profilePic, whatIDo }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<section className={styles[`hero__section__${preferredTheme}`]}>
			<div className={styles.hero__section__content}>
				<div className={styles.hero__section__greeting}>
					<h1>Hi, the name is {name}</h1>
				</div>
				<HeroContent profilePic={profilePic} whatIDo={whatIDo} />
			</div>
		</section>
	);
};

export default HeroSection;
