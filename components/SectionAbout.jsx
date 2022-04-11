import React from "react";
import AboutMe from "./AboutMe";
import SocialLinks from "./SocialLinks";
import {
  s2Lt,
  s2Bl,
  s2Gn,
  s2Pl,
  aboutWrapper,
} from "../styles/SectionAbout.module.scss";

const SectionAbout = ({ colorMode }) => {
  let mode;
  if (colorMode === "lightMode") {
    mode = s2Lt;
  } else if (colorMode === "blueMode") {
    mode = s2Bl;
  } else if (colorMode === "greenMode") {
    mode = s2Gn;
  } else {
    mode = s2Pl;
  }
  return (
    <section className={mode}>
      <div className='main-container'>
        <div className={aboutWrapper}>
          <AboutMe colorMode={colorMode} />
          <SocialLinks colorMode={colorMode} />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
