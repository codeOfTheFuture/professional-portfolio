import React from "react";
import ContactForm from "../contactForm/ContactForm";
import { s4, s4Lt, s4Bl, s4Gn, s4Pl } from "./SectionContact.module.scss";

const SectionContact = ({ colorMode }) => {
  let mode;
  if (colorMode === "lightMode") {
    mode = s4Lt;
  } else if (colorMode === "blueMode") {
    mode = s4Bl;
  } else if (colorMode === "greenMode") {
    mode = s4Gn;
  } else {
    mode = s4Pl;
  }

  return (
    <section className={`${s4} ${mode}`}>
      <div className='main-container'>
        <h3>Get In Touch</h3>
        <ContactForm colorMode={colorMode} />
      </div>
    </section>
  );
};

export default SectionContact;
