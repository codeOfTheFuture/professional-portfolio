import React from "react";
import AboutMe from "./AboutMe";
import SocialLinks from "./SocialLinks";
import {
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
  mainContainer,
  aboutWrapper,
} from "../styles/SectionAbout.module.scss";

const SectionAbout = ({ colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = lightMode;
  if (colorMode === "blueMode") mode = blueMode;
  if (colorMode === "greenMode") mode = greenMode;
  if (colorMode === "purpleMode") mode = purpleMode;

  return (
    <section className={mode}>
      <div className={mainContainer}>
        <div className={aboutWrapper}>
          <AboutMe colorMode={colorMode} />
          <SocialLinks colorMode={colorMode} />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
