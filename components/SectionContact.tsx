import React from "react";
import ContactForm from "./ContactForm";
import {
  sectionContact,
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
  mainContainer,
} from "../styles/SectionContact.module.scss";
import { useTheme } from "../context/ThemeContext";

const SectionContact = () => {
  const { theme } = useTheme();

  let currentTheme;

  switch (theme) {
    case "lightMode":
      currentTheme = lightMode;
      break;
    case "blueMode":
      currentTheme = blueMode;
      break;
    case "greenMode":
      currentTheme = greenMode;
      break;
    case "purpleMode":
      currentTheme = purpleMode;
    default:
      currentTheme = lightMode;
      break;
  }

  return (
    <section className={(sectionContact, currentTheme)} id="contact">
      <div className={mainContainer}>
        <h3>Get In Touch</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionContact;
