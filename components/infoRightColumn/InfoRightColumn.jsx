import React from "react";
import styles from "./InfoRightColumn.module.scss";

const InfoRightColumn = () => {
  return (
    <div className={styles.rightColumn}>
      <div id={styles.previewShadow}>
        <div id={styles.preview}>
          <div id={styles.cornerTl} className={styles.corner}></div>
          <div id={styles.cornerTr} className={styles.corner}></div>
          <h3>What I Do</h3>
          <p>
            I develop web applications with modern JavaScript frameworks.
            Experienced in object-oriented, functional, and
            reactive-programming.
          </p>
          <div id={styles.cornerBr} className={styles.corner}></div>
          <div id={styles.cornerBl} className={styles.corner}></div>
        </div>
      </div>
    </div>
  );
};

export default InfoRightColumn;
