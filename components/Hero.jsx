import React from "react";
import {
  hero,
  nav,
  heroLight,
  heroBlue,
  heroGreen,
  heroPurple,
  navLight,
  navBlue,
  navGreen,
  navPurple,
} from "../styles/Hero.module.scss";
import DotsWrapper from "./DotWrapper";
import Navigation from "./Navigation";
import InfoLeftColumn from "./InfoLeftColumn";
import InfoRightColumn from "./InfoRightColumn";
import { useTheme } from "../context/ThemeContext";

const Hero = ({ profilePic, whatIDo }) => {
  const { theme } = useTheme();

  let currentTheme = {};

  switch (theme) {
    case "lightMode":
      currentTheme.hero = heroLight;
      currentTheme.nav = navLight;
      break;
    case "blueMode":
      currentTheme.hero = heroBlue;
      currentTheme.nav = navBlue;
      break;
    case "greenMode":
      currentTheme.hero = heroGreen;
      currentTheme.nav = navGreen;
      break;
    case "purpleMode":
      currentTheme.hero = heroPurple;
      currentTheme.nav = navPurple;
      break;
    default:
      currentTheme.hero = heroLight;
      currentTheme.nav = navLight;
      break;
  }

  return (
    <div className={`${hero} ${currentTheme.hero}`}>
      <div className={`${nav} ${currentTheme.nav}`}>
        <DotsWrapper />
        <Navigation />
      </div>
      <InfoLeftColumn profilePic={profilePic} />
      <InfoRightColumn whatIDo={whatIDo} />
    </div>
  );
};

export default Hero;
