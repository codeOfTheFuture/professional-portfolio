import React from "react";
import { useTheme } from "../context/ThemeContext";
import { urlFor } from "../sanity";
import styles, {
  themeDotLightMode,
  themeDotBlueMode,
  themeDotGreenMode,
  themeDotPurpleMode,
} from "../styles/InfoLeftColumn.module.scss";

const InfoLeftColumn = ({ profilePic }) => {
  const { theme, selectTheme } = useTheme();

  let currentTheme;

  switch (theme) {
    case "lightMode":
      currentTheme = themeDotLightMode;
      break;
    case "blueMode":
      currentTheme = themeDotBlueMode;
      break;
    case "greenMode":
      currentTheme = themeDotGreenMode;
      break;
    case "purpleMode":
      currentTheme = themeDotPurpleMode;
      break;
    default:
      currentTheme = themeDotLightMode;
      break;
  }

  return (
    <div className={styles.infoLeftColumn}>
      <img
        id={styles.profilePic}
        src={urlFor(profilePic).url()}
        alt="Picture of Jeff Oliver"
      />
      <h5>Personalize Theme</h5>

      <div id={styles.themeOptionsWrapper}>
        <div
          id={styles.lightMode}
          className={currentTheme}
          onClick={() => selectTheme("lightMode")}></div>

        <div
          id={styles.blueMode}
          className={currentTheme}
          onClick={() => selectTheme("blueMode")}></div>
        <div
          id={styles.greenMode}
          className={currentTheme}
          onClick={() => selectTheme("greenMode")}></div>
        <div
          id={styles.purpleMode}
          className={currentTheme}
          onClick={() => selectTheme("purpleMode")}></div>
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
