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

const SectionContact = ({ colorMode }) => {
  let mode;
  if (colorMode === "lightMode") mode = lightMode;
  if (colorMode === "blueMode") mode = blueMode;
  if (colorMode === "greenMode") mode = greenMode;
  if (colorMode === "purpleMode") mode = purpleMode;

  return (
    <section className={(sectionContact, mode)} id='contact'>
      <div className={mainContainer}>
        <h3>Get In Touch</h3>
        <ContactForm colorMode={colorMode} />
      </div>
    </section>
  );
};

export default SectionContact;
