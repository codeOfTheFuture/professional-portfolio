import React from "react";
import Carousel from "../carousel/Carousel";
import styles from "./SectionPortfolio.module.scss";

const SectionPortfolio = () => {
  return (
    <section className={styles.s3}>
      <div className='main-container'>
        <h3>Projects</h3>
        <Carousel />
      </div>
    </section>
  );
};

export default SectionPortfolio;
