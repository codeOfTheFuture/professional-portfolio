import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProjectDetailsDescription from "./ProjectDetailsDescription";
import ProjectDetailsHeading from "./ProjectDetailsHeading";
import Image from "next/image";
import { urlFor } from "sanity.config";
import { PreferredTheme, Project, Skill } from "types/typings";
import styles from "./scss/Project.module.scss";

interface Props {
	project: Project;
}

const Project = ({ project }: Props) => {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);
	const [isTechStackVisible, setIsTechStackVisible] = useState<boolean>(false);

	const toggleDescription = (): void => {
		setIsDescriptionVisible((prevState: boolean) => !prevState);
	};

	const toggleTechStack = (): void => {
		setIsTechStackVisible((prevState: boolean) => !prevState);
	};

	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<>
			<div className={styles[`project__header`]}>
				<h4>{project.title}</h4>
				<a
					target="_blank"
					href={project.linkToBuild}
					className={styles[`project__header__image__wrapper`]}
				>
					<Image
						className={styles[`project__header__image`]}
						src={urlFor(project.image).url()}
						alt={project.title}
						fill
					/>
				</a>
				<a target="_blank" href={project.linkToGithub}>
					View Github
				</a>
			</div>

			<div className={styles[`project__details--${preferredTheme}`]}>
				<div>
					<ProjectDetailsHeading
						title="Project Description:"
						toggle={toggleDescription}
						isOpen={isDescriptionVisible}
					/>
					<ProjectDetailsDescription
						description={project.description}
						techStack={null}
						detailsList={null}
						isOpen={isDescriptionVisible}
					/>
				</div>

				<div>
					<ProjectDetailsHeading
						title="Tech Stack:"
						toggle={toggleTechStack}
						isOpen={isTechStackVisible}
					/>
					<ProjectDetailsDescription
						description={null}
						techStack={project.techStack.map((skill: Skill) => skill.title).join(" | ")}
						detailsList={project.bulletPoints}
						isOpen={isTechStackVisible}
					/>
				</div>
			</div>
		</>
	);
};

export default Project;
