import HeroContentLeft from "./HeroContentLeft";
import HeroContentRight from "./HeroContentRight";
import TrafficLights from "./TrafficLights";
import HeroNavigation from "./HeroNavigation";
import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme } from "types/typings";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import styles from "./scss/HeroContent.module.scss";

interface Props {
	profilePic: SanityImageSource;
	whatIDo: string;
}

const HeroContent = ({ profilePic, whatIDo }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<div className={`${styles.hero__content} ${styles[`hero__content__${preferredTheme}`]}`}>
			<nav
				className={`${styles.hero__content__nav} ${
					styles[`hero__content__nav__${preferredTheme}`]
				}`}
			>
				<TrafficLights />
				<HeroNavigation />
			</nav>
			<HeroContentLeft profilePic={profilePic} />
			<HeroContentRight whatIDo={whatIDo} />
		</div>
	);
};

export default HeroContent;
