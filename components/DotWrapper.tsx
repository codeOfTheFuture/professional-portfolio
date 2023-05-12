import React from "react";
import styles from "../styles/DotsWrapper.module.scss";

const DotWrapper = () => {
  return (
    <div className={styles.dotsWrapper}>
      <div id={styles.dot1} className={styles.browserDot}></div>
      <div id={styles.dot2} className={styles.browserDot}></div>
      <div id={styles.dot3} className={styles.browserDot}></div>
    </div>
  );
};

export default DotWrapper;
