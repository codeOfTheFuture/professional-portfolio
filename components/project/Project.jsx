import React from "react";
import styles from "./Project.module.scss";

const Project = ({ project }) => {
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

      <div className={styles.projectAbout}>
        <h5>{project.about.projectDesc}</h5>
        <p>{project.about.projectDescText}</p>
        <h5>{project.about.techStack}</h5>
        <p>{project.about.techStackList}</p>
        <ul>
          {project.about.bulletPoints.map((bPoint, index) => (
            <li key={index}>{bPoint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
