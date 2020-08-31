import React, { useState } from "react";
import InfoWrapper from "../infoWrapper/InfoWrapper";
import styles, { lightMode, blueMode } from "./SectionMain.module.scss";

const SectionMain = ({ setColorMode, colorModeOptions, colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = lightMode;
  else if (colorMode === "blueMode") mode = blueMode;

  return (
    <section className={styles.s1, mode}>
      <div className='main-container'>
        <div className={styles.greetingWrapper}>
          <h1>Hi, I'm Jeffrey Oliver</h1>
        </div>
        <InfoWrapper setColorMode={setColorMode} colorModeOptions={colorModeOptions} colorMode={colorMode} />
      </div>
    </section>
  );
};

export default SectionMain;
