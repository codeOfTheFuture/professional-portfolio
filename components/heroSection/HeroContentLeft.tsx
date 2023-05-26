import ThemeOptions from "./ThemeOptions";
import { urlFor } from "sanity.config";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import styles from "./scss/HeroContentLeft.module.scss";
import Image from "next/image";

interface Props {
	profilePic: SanityImageSource;
}

const HeroContentLeft = ({ profilePic }: Props) => {
	return (
		<div className={styles[`content__left`]}>
			<div className={styles[`content__left__profile__picture__wrapper`]}>
				<Image
					className={styles[`content__left__profile__picture`]}
					src={urlFor(profilePic).url()}
					alt="Picture of Jeff Oliver"
					fill
				/>
			</div>

			<h5>Personalize Theme</h5>

			<ThemeOptions />

			<p className={styles[`content__left__settings__note`]}>
				*Theme settings will be saved for
				<br />
				your next visit
			</p>
		</div>
	);
};

export default HeroContentLeft;
