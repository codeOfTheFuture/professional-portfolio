import React from "react";
import styles from "../styles/Project.module.scss";

const ProjectDetails = ({ description, techStack, detailsList, isOpen }) => {
  return description
    ? isOpen && <p className={styles.projectDescText}>{description}</p>
    : isOpen && (
        <>
          <p className={styles.techStackList}>{techStack}</p>
          <ul className={styles.detailsList}>
            {detailsList.map((bulletPoint, index) => (
              <li className={styles.bulletPoint} key={index}>
                {bulletPoint}
              </li>
            ))}
          </ul>
        </>
      );
};

export default ProjectDetails;
