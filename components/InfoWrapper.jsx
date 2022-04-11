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
} from "../styles/InfoWrapper.module.scss";
import DotsWrapper from "./DotWrapper";
import Navigation from "./Navigation";
import InfoLeftColumn from "./InfoLeftColumn";
import InfoRightColumn from "./InfoRightColumn";

const InfoWrapper = ({ chooseColorMode, colorMode }) => {
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
      <InfoLeftColumn chooseColorMode={chooseColorMode} colorMode={colorMode} />
      <InfoRightColumn colorMode={colorMode} />
    </div>
  );
};

export default InfoWrapper;
