import React from "react";
import styles from "../styles/Project.module.scss";

const ProjectDetails = ({ description, techStack, detailsList, isOpen }) => {
  return description ? (
    <p
      className={
        styles.projectDescText &&
        (isOpen ? styles.showDetails : styles.hideDetails)
      }>
      {description}
    </p>
  ) : (
    <div className={isOpen ? styles.showDetails : styles.hideDetails}>
      <p className={styles.techStackList}>{techStack}</p>
      <ul className={styles.detailsList}>
        {detailsList?.map((bulletPoint, index) => (
          <li className={styles.bulletPoint} key={index}>
            &bull; {bulletPoint}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
