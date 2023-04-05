import React from "react";
import { useTheme } from "../context/ThemeContext";
import { urlFor } from "../sanity";
import styles, {
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
} from "../styles/Project.module.scss";
import ProjectDetails from "./ProjectDetails";
import ProjectHeading from "./ProjectHeading";
import Image from "next/image";

const Project = ({ project }) => {
  const { theme } = useTheme();

  let currentTheme;

  switch (theme) {
    case "lightMode":
      currentTheme = lightMode;
      break;
    case "blueMode":
      currentTheme = blueMode;
      break;
    case "greenMode":
      currentTheme = greenMode;
      break;
    case "purpleMode":
      currentTheme = purpleMode;
  }

  const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(false);
  const [isTechStackVisible, setIsTechStackVisible] = React.useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  const toggleTechStack = () => {
    setIsTechStackVisible(!isTechStackVisible);
  };

  return (
    <>
      <div className={styles.projectMain}>
        <h4>{project.title}</h4>
        <a
          target="_blank"
          href={project.linkToBuild}
          className={styles.projectLink}>
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            width={350}
            height={300}
          />
        </a>
        <a
          className={styles.githubLink}
          target="_blank"
          href={project.linkToGithub}>
          View Github
        </a>
      </div>

      <div className={`${styles.projectAbout} ${currentTheme}`}>
        <div className={styles.projectDesc}>
          <ProjectHeading
            title="Project Description:"
            toggle={toggleDescription}
            isOpen={isDescriptionVisible}
          />
          <ProjectDetails
            description={project.description}
            techStack={null}
            detailsList={null}
            isOpen={isDescriptionVisible}
          />
        </div>

        <div className={styles.techStack}>
          <ProjectHeading
            title="Tech Stack:"
            toggle={toggleTechStack}
            isOpen={isTechStackVisible}
          />
          <ProjectDetails
            description={null}
            techStack={project.techStack.map(t => t.title).join(" | ")}
            detailsList={project.bulletPoints}
            isOpen={isTechStackVisible}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
