import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form id={styles.contactForm}>
      <label htmlFor='name'>Name</label>
      <input className={styles.inputField} type='text' name='name' />

      <label htmlFor='subject'>Subject</label>
      <input className={styles.inputField} type='text' name='subject' />

      <label htmlFor='email'>Email</label>
      <input className={styles.inputField} type='text' name='email' />

      <label htmlFor='message'>Message</label>
      <textarea className={styles.inputField}></textarea>

      <button id={styles.submitBtn} type='submit'>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
