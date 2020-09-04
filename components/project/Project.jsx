import React from "react";
import styles, {
  projectLt,
  projectBl,
  projectGn,
  projectPl,
} from "./Project.module.scss";

const Project = ({ project, colorMode }) => {
  let mode;
  if (colorMode === "lightMode") {
    mode = projectLt;
  } else if (colorMode === "blueMode") {
    mode = projectBl;
  } else if (colorMode === "greenMode") {
    mode = projectGn;
  } else {
    mode = projectPl;
  }

  return (
    <div className={styles.project}>
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
        <h5 className={styles.projectDesc}> {project.about.projectDesc}</h5>
        <p className={styles.projectDescText}>
          {project.about.projectDescText}
        </p>
        <h5 className={styles.techStack}>{project.about.techStack}</h5>
        <p className={styles.techStackList}>{project.about.techStackList}</p>
        <ul className={styles.bulletPoints}>
          {project.about.bulletPoints.map((bPoint, index) => (
            <li className={styles.bPoint} key={index}>
              {bPoint}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
