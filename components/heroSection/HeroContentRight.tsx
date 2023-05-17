import { PreferredTheme } from "types/typings";
import { useTheme } from "../../context/ThemeContext";
import styles from "./scss/HeroContentRight.module.scss";

interface Props {
	whatIDo: string;
}

const HeroContentRight = ({ whatIDo }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<div className={styles.preview}>
			<div className={styles[`preview__shadow__${preferredTheme}`]}>
				<div className={styles[`preview__content__${preferredTheme}`]}>
					<div
						className={`${styles[`preview__corner__${preferredTheme}`]} ${
							styles.preview__corner__top__left
						}`}
					></div>
					<div
						className={`${styles[`preview__corner__${preferredTheme}`]} ${
							styles.preview__corner__top__right
						}`}
					></div>
					<h3>What I Do</h3>
					<p>{whatIDo}</p>
					<div
						className={`${styles[`preview__corner__${preferredTheme}`]} ${
							styles.preview__corner__bottom__right
						}`}
					></div>
					<div
						className={`${styles[`preview__corner__${preferredTheme}`]} ${
							styles.preview__corner__bottom__left
						}`}
					></div>
				</div>
			</div>
		</div>
	);
};

export default HeroContentRight;
