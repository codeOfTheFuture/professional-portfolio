import styles from "./scss/TrafficLights.module.scss";

const TrafficLights = () => {
	return (
		<div className={styles.traffic__lights}>
			<div className={`${styles.traffic__lights__dots} ${styles.traffic__lights__dots__red}`}></div>
			<div
				className={`${styles.traffic__lights__dots} ${styles.traffic__lights__dots__yellow}`}
			></div>
			<div
				className={`${styles.traffic__lights__dots} ${styles.traffic__lights__dots__green}`}
			></div>
		</div>
	);
};

export default TrafficLights;
