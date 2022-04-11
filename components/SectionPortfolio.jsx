import React from "react";
import Carousel from "./Carousel";
import styles, {
  s3Lt,
  s3Bl,
  s3Gn,
  s3Pl,
} from "../styles/SectionPortfolio.module.scss";

const SectionPortfolio = ({ colorMode }) => {
  let s3Mode;

  if (colorMode === "lightMode") {
    s3Mode = s3Lt;
  } else if (colorMode === "blueMode") {
    s3Mode = s3Bl;
  } else if (colorMode === "greenMode") {
    s3Mode = s3Gn;
  } else {
    s3Mode = s3Pl;
  }

  return (
    <section className={s3Mode}>
      <div className='main-container'>
        <div className={styles.projects}>
          <h3>Projects</h3>
          <Carousel colorMode={colorMode} />
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;
