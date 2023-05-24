import React from "react";
import ContactForm from "./ContactForm";
import styles from "./scss/ContactSection.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme } from "types/typings";

const SectionContact = () => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<section className={styles[`contact__section--${preferredTheme}`]} id="contact">
			<h3>Get In Touch</h3>
			<ContactForm />
		</section>
	);
};

export default SectionContact;
