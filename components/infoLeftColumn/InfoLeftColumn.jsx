import React, { useState } from "react";
import styles from "./InfoLeftColumn.module.scss";

const InfoLeftColumn = ({ setColorMode, colorModeOptions, colorMode }) => {
  return (
    <div className={styles.infoLeftColumn}>
      <img
        id={styles.profilePic}
        src='assets/mainImg.jpg'
        alt='Picture of Jeff Oliver'
      />
      <h5>Personalize Theme</h5>

      <div id={styles.themeOptionsWrapper}>
        {/* {
          colorModeOptions.map((colorOption, index) => {
            const mode = `styles.${colorOption}`;

            return <div id={mode} className={styles.themeDot} key={index}></div>
          })
        } */}
        <div id={styles.lightMode} className={styles.themeDot} onClick={() => setColorMode("lightMode")}></div>
        <div id={styles.blueMode} className={styles.themeDot} onClick={() => setColorMode("blueMode")}></div>
        <div id={styles.greenMode} className={styles.themeDot} onClick={() => setColorMode("greenMode")}></div>
        <div id={styles.purpleMode} className={styles.themeDot} onClick={() => setColorMode("purpleMode")}></div>
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
