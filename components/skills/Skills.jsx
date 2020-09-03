import React from "react";
import {
  skills,
  skillsLt,
  skillsBl,
  skillsGn,
  skillsPl,
} from "./Skills.module.scss";

const Skills = ({ colorMode }) => {
  let skillsMode;
  if (colorMode === "lightMode") {
    skillsMode = skillsLt;
  } else if (colorMode === "blueMode") {
    skillsMode = skillsBl;
  } else if (colorMode === "greenMode") {
    skillsMode = skillsGn;
  } else {
    skillsMode = skillsPl;
  }

  return (
    <div id={skills} className={skillsMode}>
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
