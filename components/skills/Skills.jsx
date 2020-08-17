import React from "react";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div id={styles.skills}>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>NextJs</li>
        <li>JS - ES6+</li>
        <li>CSS3</li>
        <li>Sass/Less</li>
        <li>CanvasJs</li>
      </ul>

      <ul>
        <li>Google Maps API</li>
        <li>Firebase Auth</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>JSON</li>
        <li>Python</li>
        <li>Sqlite3</li>
      </ul>
    </div>
  );
};

export default Skills;
