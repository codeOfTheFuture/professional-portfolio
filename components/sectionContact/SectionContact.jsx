import React from "react";
import ContactForm from "../contactForm/ContactForm";
import styles from "./SectionContact.module.scss";

const SectionContact = () => {
  return (
    <section className={styles.s4}>
      <div className='main-container'>
        <h3>Get In Touch</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionContact;
