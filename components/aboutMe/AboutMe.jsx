import React from "react";
import Skills from "../skills/Skills";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h4>More about me</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum
        debitis esse placeat obcaecati molestias!
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel neque ut
        incidunt quidem magni voluptatum iusto, inventore ducimus eveniet
        dolorum et porro molestias mollitia deleniti?
      </p>

      <hr />

      <h4>Top Expertise</h4>

      <p>
        Fullstack developer with primary focus on React/Redux + Node Js:{" "}
        <a target='_blank' href='#'>
          Download Resume
        </a>
      </p>

      <Skills />
    </div>
  );
};

export default AboutMe;
