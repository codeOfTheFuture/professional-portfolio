import styles from "./scss/HeroContent.module.scss";
import TrafficLights from "./TrafficLights";
import HeroNavigation from "./HeroNavigation";
import HeroContentLeft from "./HeroContentLeft";
import HeroContentRight from "./HeroContentRight";
import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme } from "types/typings";

interface Props {
	profilePic: string;
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
