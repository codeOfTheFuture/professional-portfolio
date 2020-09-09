import React, { useState } from "react";
import InfoWrapper from "../infoWrapper/InfoWrapper";
import styles, {
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
} from "./SectionMain.module.scss";

const SectionMain = ({ chooseColorMode, colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = lightMode;
  else if (colorMode === "blueMode") mode = blueMode;
  else if (colorMode === "greenMode") mode = greenMode;
  else mode = purpleMode;

  return (
    <section className={(styles.s1, mode)}>
      <div className='main-container'>
        <div className={styles.greetingWrapper}>
          <h1>Hi, I'm Jeffrey Oliver</h1>
        </div>
        <InfoWrapper chooseColorMode={chooseColorMode} colorMode={colorMode} />
      </div>
    </section>
  );
};

export default SectionMain;
