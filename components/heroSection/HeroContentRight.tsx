import { PreferredTheme } from "types/typings";
import { useTheme } from "../../context/ThemeContext";
import styles from "./scss/HeroContentRight.module.scss";

interface Props {
	whatIDo: string;
}

const HeroContentRight = ({ whatIDo }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<div className={styles[`preview`]}>
			<div className={styles[`preview__shadow--${preferredTheme}`]}>
				<div className={styles[`preview__content--${preferredTheme}`]}>
					<div
						className={`${styles[`preview__content__corner--${preferredTheme}`]} ${
							styles[`preview__content__corner--top__left`]
						}`}
					></div>
					<div
						className={`${styles[`preview__content__corner--${preferredTheme}`]} ${
							styles[`preview__content__corner--top__right`]
						}`}
					></div>
					<h3>What I Do</h3>
					<p>{whatIDo}</p>
					<div
						className={`${styles[`preview__content__corner--${preferredTheme}`]} ${
							styles[`preview__content__corner--bottom__right`]
						}`}
					></div>
					<div
						className={`${styles[`preview__content__corner--${preferredTheme}`]} ${
							styles[`preview__content__corner--bottom__left`]
						}`}
					></div>
				</div>
			</div>
		</div>
	);
};

export default HeroContentRight;
