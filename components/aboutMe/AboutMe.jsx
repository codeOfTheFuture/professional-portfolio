import React from "react";
import Skills from "../skills/Skills";
import styles from "./AboutMe.module.scss";

const AboutMe = ({ colorMode }) => {
  return (
    <div className={styles.aboutMe}>
      <h4>More about me</h4>

      <p>
        My most recent position was team lead for the computer science unit at
        Lambda School. This was a contract role where I mentored a team of 8
        students in an agile environment.
      </p>

      <p>
        I am a fully endorsced graduate of Lambda Schools Full-Stack Web
        Development program which included 8 weeks of computer science study in
        python. I am very interested in learning new technologies and
        strengthening my skills as a developer.
      </p>

      <hr />

      <h4>Top Expertise</h4>

      <p>
        Fullstack developer with primary focus on React + NodeJs: <br />
        <a target='_blank' href='assets/Jeff-Oliver-Resume.pdf'>
          Download Resume
        </a>
      </p>

      <Skills colorMode={colorMode} />
    </div>
  );
};

export default AboutMe;
