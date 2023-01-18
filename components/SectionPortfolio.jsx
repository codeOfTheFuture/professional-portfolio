import React from "react";
import Carousel from "./Carousel";
import styles, {
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
} from "../styles/SectionPortfolio.module.scss";
import { useTheme } from "../context/ThemeContext";

const SectionPortfolio = ({ projects }) => {
  const { theme } = useTheme();

  let currentTheme;

  switch (theme) {
    case "lightMode":
      currentTheme = lightMode;
      break;
    case "blueMode":
      currentTheme = blueMode;
      break;
    case "greenMode":
      currentTheme = greenMode;
      break;
    case "purpleMode":
      currentTheme = purpleMode;
    default:
      currentTheme = lightMode;
      break;
  }

  return (
    <section className={currentTheme}>
      <div className={styles.mainContainer}>
        <div className={styles.projects}>
          <h3>Projects</h3>
          <Carousel projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;
