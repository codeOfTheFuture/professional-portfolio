import React from "react";
import styles from "../styles/Project.module.scss";

const ProjectHeading = ({ title, toggle }) => {
  return (
    <div className={styles.headingWrapper}>
      <h5 className={styles.heading}>{title}</h5>
      <span className={styles.toggle} onClick={toggle}>
        View
      </span>
    </div>
  );
};

export default ProjectHeading;
