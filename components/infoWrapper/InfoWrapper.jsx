import React from "react";
import styles from "./InfoWrapper.module.scss";
import DotsWrapper from "../dotsWrapper/dotWrapper";
import Navigation from "../navigation/Navigation";
import InfoLeftColumn from "../infoLeftColumn/InfoLeftColumn";
import InfoRightColumn from "../infoRightColumn/InfoRightColumn";

const InfoWrapper = ({ setColorMode, colorModeOptions, colorMode }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.navWrapper}>
        <DotsWrapper />
        <Navigation />
      </div>
      <InfoLeftColumn setColorMode={setColorMode} colorModeOptions={colorModeOptions} colorMode={colorMode} />
      <InfoRightColumn />
    </div>
  );
};

export default InfoWrapper;
