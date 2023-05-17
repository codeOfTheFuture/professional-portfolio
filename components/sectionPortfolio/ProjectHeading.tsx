import React from "react";
import styles from "./scss/Project.module.scss";

const ProjectHeading = ({ title, toggle, isOpen }) => {
	return (
		<div className={styles.headingWrapper}>
			<h5 className={styles.heading}>{title}</h5>
			<span className={styles.toggle} onClick={toggle}>
				{isOpen ? "Hide" : "View"}
			</span>
		</div>
	);
};

export default ProjectHeading;
