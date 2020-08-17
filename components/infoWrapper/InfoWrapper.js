import React from "react";
import styles from "./InfoWrapper.module.scss";
import DotsWrapper from "../dotsWrapper/dotWrapper";
import Navigation from "../navigation/Navigation";
import InfoRightColumn from "../infoRightColumn/InfoRightColumn";

const InfoWrapper = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.navWrapper}>
        <DotsWrapper />
        <Navigation />
      </div>
      <div className={styles.leftColumn}></div>
      <InfoRightColumn />
    </div>
  );
};

export default InfoWrapper;
