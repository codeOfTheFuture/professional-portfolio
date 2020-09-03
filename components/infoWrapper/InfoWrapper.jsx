import React from "react";
import {
  infoWrapper,
  infoWrapperLt,
  infoWrapperBl,
  infoWrapperGn,
  infoWrapperPl,
  navWrapper,
  navWrapperLt,
  navWrapperBl,
  navWrapperGn,
  navWrapperPl,
} from "./InfoWrapper.module.scss";
import DotsWrapper from "../dotsWrapper/dotWrapper";
import Navigation from "../navigation/Navigation";
import InfoLeftColumn from "../infoLeftColumn/InfoLeftColumn";
import InfoRightColumn from "../infoRightColumn/InfoRightColumn";

const InfoWrapper = ({ setColorMode, colorModeOptions, colorMode }) => {
  let mode = {};
  if (colorMode === "lightMode") {
    mode.infoWrapper = infoWrapperLt;
    mode.navWrapper = navWrapperLt;
  } else if (colorMode === "blueMode") {
    mode.infoWrapper = infoWrapperBl;
    mode.navWrapper = navWrapperBl;
  } else if (colorMode === "greenMode") {
    mode.infoWrapper = infoWrapperGn;
    mode.navWrapper = navWrapperGn;
  } else {
    mode.infoWrapper = infoWrapperPl;
    mode.navWrapper = navWrapperPl;
  }

  return (
    <div className={`${infoWrapper} ${mode.infoWrapper}`}>
      <div className={`${navWrapper} ${mode.navWrapper}`}>
        <DotsWrapper />
        <Navigation />
      </div>
      <InfoLeftColumn
        setColorMode={setColorMode}
        colorModeOptions={colorModeOptions}
        colorMode={colorMode}
      />
      <InfoRightColumn colorMode={colorMode} />
    </div>
  );
};

export default InfoWrapper;
