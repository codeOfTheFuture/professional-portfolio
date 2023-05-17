import styles from "./scss/HeroContentLeft.module.scss";
import { urlFor } from "sanity.config";
import ThemeOptions from "./ThemeOptions";

interface Props {
	profilePic: string;
}

const HeroContentLeft = ({ profilePic }: Props) => {
	return (
		<div className={styles.hero__content__left}>
			<img
				className={styles.hero__content__left__profile__picture}
				src={urlFor(profilePic).url()}
				alt="Picture of Jeff Oliver"
			/>
			<h5>Personalize Theme</h5>

			<ThemeOptions />

			<p className={styles.settings__note}>
				*Theme settings will be saved for
				<br />
				your next visit
			</p>
		</div>
	);
};

export default HeroContentLeft;
