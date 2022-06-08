import React from "react";
import styles, {
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
} from "../styles/Project.module.scss";
import ProjectDetails from "./ProjectDetails";
import ProjectHeading from "./ProjectHeading";

const Project = ({ project, colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = lightMode;
  if (colorMode === "blueMode") mode = blueMode;
  if (colorMode === "greenMode") mode = greenMode;
  if (colorMode === "purpleMode") mode = purpleMode;

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
        <a target='_blank' href={project.link}>
          <img src={project.image} alt={project.title} />
        </a>
        <a className={styles.githubLink} target='_blank' href={project.github}>
          View Github
        </a>
      </div>

      <div className={`${styles.projectAbout} ${mode}`}>
        <div className={styles.projectDesc}>
          <ProjectHeading
            title={project.about.projectDesc}
            toggle={toggleDescription}
            isOpen={isDescriptionVisible}
          />
          <ProjectDetails
            description={project.about.projectDescText}
            techStack={null}
            detailsList={null}
            isOpen={isDescriptionVisible}
          />
        </div>

        <div className={styles.techStack}>
          <ProjectHeading
            title={project.about.techStack}
            toggle={toggleTechStack}
            isOpen={isTechStackVisible}
          />
          <ProjectDetails
            description={null}
            techStack={project.about.techStackList}
            detailsList={project.about.bulletPoints}
            isOpen={isTechStackVisible}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
