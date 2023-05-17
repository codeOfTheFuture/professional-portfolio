import styles from "./scss/HeroNavigation.module.scss";

const HeroNavigation = () => {
	return (
		<ul className={styles.hero__navigation}>
			<li>
				<a href="#contact">Contact</a>
			</li>
		</ul>
	);
};

export default HeroNavigation;
