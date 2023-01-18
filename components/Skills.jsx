import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  skills,
  skillsLt,
  skillsBl,
  skillsGn,
  skillsPl,
} from "../styles/Skills.module.scss";

const Skills = ({ skillsList }) => {
  const { theme } = useTheme();

  let currentTheme;

  switch (theme) {
    case "lightMode":
      currentTheme = skillsLt;
      break;
    case "blueMode":
      currentTheme = skillsBl;
      break;
    case "greenMode":
      currentTheme = skillsGn;
      break;
    case "purpleMode":
      currentTheme = skillsPl;
  }

  return (
    <div className={currentTheme}>
      {/* <ul>
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
      </ul> */}
      <ul className={skills}>
        {skillsList.map(skill => (
          <li key={skill._id}>{skill.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
