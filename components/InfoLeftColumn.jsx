import React from "react";
import styles, {
  themeDotLightMode,
  themeDotBlueMode,
  themeDotGreenMode,
  themeDotPurpleMode,
} from "../styles/InfoLeftColumn.module.scss";

const InfoLeftColumn = ({ chooseColorMode, colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = themeDotLightMode;
  if (colorMode === "blueMode") mode = themeDotBlueMode;
  if (colorMode === "greenMode") mode = themeDotGreenMode;
  if (colorMode === "purpleMode") mode = themeDotPurpleMode;

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
          onClick={() => chooseColorMode("lightMode")}
        ></div>

        <div
          id={styles.blueMode}
          className={mode}
          onClick={() => chooseColorMode("blueMode")}
        ></div>
        <div
          id={styles.greenMode}
          className={mode}
          onClick={() => chooseColorMode("greenMode")}
        ></div>
        <div
          id={styles.purpleMode}
          className={mode}
          onClick={() => chooseColorMode("purpleMode")}
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
