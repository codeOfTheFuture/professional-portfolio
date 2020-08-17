import React from "react";
import styles from "./InfoLeftColumn.module.scss";

const InfoLeftColumn = () => {
  return (
    <div className={styles.InfoLeftColumn}>
      <img
        id={styles.profilePic}
        src='assets/mainImg.jpg'
        alt='Picture of Jeff Oliver'
      />
      <h5>Personalize Theme</h5>

      <div id={styles.themeOptionsWrapper}>
        <div id={styles.lightMode} className={styles.themeDot}></div>
        <div id={styles.blueMode} className={styles.themeDot}></div>
        <div id={styles.greenMode} className={styles.themeDot}></div>
        <div id={styles.purpleMode} className={styles.themeDot}></div>
      </div>

      <p id={styles.settingsNote}>
        *Theme settings will be saved for
        <br />
        your next visit
      </p>
    </div>
  );
};

export default InfoLeftColumn;
