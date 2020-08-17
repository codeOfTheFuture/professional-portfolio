import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import SocialLinks from "../social links/SocialLinks";
import styles from "./SectionAbout.module.scss";

const SectionAbout = () => {
  return (
    <section className={styles.s2}>
      <div className='main-container'>
        <div className={styles.aboutWrapper}>
          <AboutMe />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
