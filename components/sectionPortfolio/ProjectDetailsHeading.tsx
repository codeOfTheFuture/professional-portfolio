import React from "react";
import styles from "./scss/ProjectDetailsHeading.module.scss";

interface Props {
	title: string;
	isOpen: boolean;
	toggle: () => void;
}

const ProjectDetailsHeading = ({ title, isOpen, toggle }: Props) => {
	return (
		<div className={styles.project__details__heading}>
			<h5 className={styles.project__details__heading__title}>{title}</h5>
			<span className={styles.project__details__heading__toggle} onClick={toggle}>
				{isOpen ? "Hide" : "View"}
			</span>
		</div>
	);
};

export default ProjectDetailsHeading;
