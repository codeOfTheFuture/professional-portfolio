import React from "react";
import {
  contactForm,
  inputField,
  contactLt,
  contactBl,
  contactGn,
  contactPl,
  submitBtn,
  labelLt,
  labelBl,
  labelGn,
  labelPl,
  btnLt,
  btnBl,
  btnGn,
  btnPl,
} from "./ContactForm.module.scss";

const ContactForm = ({ colorMode }) => {
  let mode = {};

  if (colorMode === "lightMode") {
    mode.contact = contactLt;
    mode.label = labelLt;
    mode.btn = btnLt;
  } else if (colorMode === "blueMode") {
    mode.contact = contactBl;
    mode.label = labelBl;
    mode.btn = btnBl;
  } else if (colorMode === "greenMode") {
    mode.contact = contactGn;
    mode.label = labelGn;
    mode.btn = btnGn;
  } else {
    mode.contact = contactPl;
    mode.label = labelPl;
    mode.btn = btnPl;
  }

  return (
    <form id={contactForm} className={mode.contact}>
      <label htmlFor='name' className={mode.label}>
        Name
      </label>
      <input className={inputField} type='text' name='name' />

      <label htmlFor='subject' className={mode.label}>
        Subject
      </label>
      <input className={inputField} type='text' name='subject' />

      <label htmlFor='email' className={mode.label}>
        Email
      </label>
      <input className={inputField} type='text' name='email' />

      <label htmlFor='message' className={mode.label}>
        Message
      </label>
      <textarea className={inputField}></textarea>

      <button id={submitBtn} className={mode.btn} type='submit'>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
