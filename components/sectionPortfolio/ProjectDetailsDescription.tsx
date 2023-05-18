import styles from "./scss/ProjectDetailsDescription.module.scss";

interface Props {
	description: string | null;
	techStack: string | null;
	detailsList: string[] | null;
	isOpen: boolean;
}

const ProjectDetailsDescription = ({ description, techStack, detailsList, isOpen }: Props) => {
	return description ? (
		<p
			className={
				styles.project__details__description__text &&
				(isOpen
					? styles.project__details__description__show__details
					: styles.project__details__description__hide__details)
			}
		>
			{description}
		</p>
	) : (
		<div
			className={
				isOpen
					? styles.project__details__description__show__details
					: styles.project__details__description__hide__details
			}
		>
			<p className={styles.project__details__description__tech__stack}>{techStack}</p>
			<ul>
				{detailsList?.map((bulletPoint: string) => (
					<li key={bulletPoint}>&bull; {bulletPoint}</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectDetailsDescription;
