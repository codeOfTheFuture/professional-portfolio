import React from "react";
import Carousel from "./Carousel";
import styles, {
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
} from "../styles/SectionPortfolio.module.scss";

const SectionPortfolio = ({ colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = lightMode;
  if (colorMode === "blueMode") mode = blueMode;
  if (colorMode === "greenMode") mode = greenMode;
  if (colorMode === "purpleMode") mode = purpleMode;

  return (
    <section className={mode}>
      <div className={styles.mainContainer}>
        <div className={styles.projects}>
          <h3>Projects</h3>
          <Carousel colorMode={colorMode} />
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;
