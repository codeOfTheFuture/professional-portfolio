import React from "react";
import styles from "./InfoWrapper.module.scss";
import DotsWrapper from "../dotsWrapper/dotWrapper";
import Navigation from "../navigation/Navigation";

const InfoWrapper = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.navWrapper}>
        <DotsWrapper />
        <Navigation />
      </div>
      <div className={styles.leftColumn}>left-column</div>
      <div className={styles.rightColumn}>right-column</div>
    </div>
  );
};

export default InfoWrapper;
