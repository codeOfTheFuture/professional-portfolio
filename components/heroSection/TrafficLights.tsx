import styles from "./scss/TrafficLights.module.scss";

const TrafficLights = () => {
	return (
		<div className={styles[`hero__section__content__nav__traffic__lights`]}>
			<div className={styles[`hero__section__content__nav__traffic__lights__dots--red`]}></div>
			<div className={styles[`hero__section__content__nav__traffic__lights__dots--yellow`]}></div>
			<div className={styles[`hero__section__content__nav__traffic__lights__dots--green`]}></div>
		</div>
	);
};

export default TrafficLights;
