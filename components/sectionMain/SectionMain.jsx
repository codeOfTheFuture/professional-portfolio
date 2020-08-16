import React from "react";
import InfoWrapper from "../infoWrapper/InfoWrapper";
import styles from "./SectionMain.module.scss";

const SectionMain = () => {
  return (
    <section className={styles.s1}>
      <div className='main-container'>
        <div className={styles.greetingWrapper}>
          <h1>Hi, I'm Jeffrey Oliver</h1>
        </div>
        <InfoWrapper />
      </div>
    </section>
  );
};

export default SectionMain;
