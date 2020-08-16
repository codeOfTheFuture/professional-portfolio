import React from "react";
import styles from "./SectionMain.module.scss";

const SectionOne = () => {
  return (
    <section className={styles.s1}>
      <div className='main-container'>
        <h1>Hi, I'm Jeffrey Oliver</h1>
        <p>This is a sentence</p>
        <a href='#'>Link</a>
      </div>
    </section>
  );
};

export default SectionOne;
