import React, { useState } from "react";
import styles, {
  themeDotLt,
  themeDotBl,
  themeDotGn,
  themeDotPl,
} from "./InfoLeftColumn.module.scss";

const InfoLeftColumn = ({ setColorMode, colorModeOptions, colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = themeDotLt;
  else if (colorMode === "blueMode") mode = themeDotBl;
  else if (colorMode === "greenMode") mode = themeDotGn;
  else mode = themeDotPl;

  return (
    <div className={styles.infoLeftColumn}>
      <img
        id={styles.profilePic}
        src='assets/mainImg.jpg'
        alt='Picture of Jeff Oliver'
      />
      <h5>Personalize Theme</h5>

      <div id={styles.themeOptionsWrapper}>
        <div
          id={styles.lightMode}
          className={mode}
          onClick={() => setColorMode("lightMode")}
        ></div>

        <div
          id={styles.blueMode}
          className={mode}
          onClick={() => setColorMode("blueMode")}
        ></div>
        <div
          id={styles.greenMode}
          className={mode}
          onClick={() => setColorMode("greenMode")}
        ></div>
        <div
          id={styles.purpleMode}
          className={mode}
          onClick={() => setColorMode("purpleMode")}
        ></div>
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
