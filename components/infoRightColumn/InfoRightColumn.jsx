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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            saepe accusamus mollitia.
          </p>
          <div id={styles.cornerBr} className={styles.corner}></div>
          <div id={styles.cornerBl} className={styles.corner}></div>
        </div>
      </div>
    </div>
  );
};

export default InfoRightColumn;
