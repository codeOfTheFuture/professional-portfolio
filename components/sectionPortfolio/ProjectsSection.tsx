import Carousel from "./Carousel";
import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme, Project } from "types/typings";
import styles from "./scss/ProjectsSection.module.scss";

interface Props {
	projects: Project[];
}

const ProjectsSection = ({ projects }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<section className={`${styles[`projects__section__${preferredTheme}`]}`}>
			<div className={styles.projects}>
				<h3>Projects</h3>
				<Carousel projects={projects} />
			</div>
		</section>
	);
};

export default ProjectsSection;
