import React from "react";
import { useTheme } from "../../context/ThemeContext";
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
} from "./scss/ContactForm.module.scss";

const ContactForm = () => {
	const { theme } = useTheme();

	let currentTheme = {};

	switch (theme) {
		case "lightMode":
			currentTheme.contact = contactLt;
			currentTheme.label = labelLt;
			currentTheme.btn = btnLt;
			break;
		case "blueMode":
			currentTheme.contact = contactBl;
			currentTheme.label = labelBl;
			currentTheme.btn = btnBl;
			break;
		case "greenMode":
			currentTheme.contact = contactGn;
			currentTheme.label = labelGn;
			currentTheme.btn = btnGn;
			break;
		case "purpleMode":
			currentTheme.contact = contactPl;
			currentTheme.label = labelPl;
			currentTheme.btn = btnPl;
			break;
		default:
			currentTheme.contact = contactLt;
			currentTheme.label = labelLt;
			currentTheme.btn = btnLt;
			break;
	}

	const formSubmit = event => {
		const form = event.target,
			data = new FormData(form),
			requestOptions = {
				method: form.method,
				headers: { Accept: "application/json" },
				body: JSON.stringify(data),
			};

		fetch(form.action, requestOptions)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	return (
		<form
			id={contactForm}
			className={currentTheme.contact}
			method="POST"
			action="https://formspree.io/xyynyqzr"
			target="_blank"
			onSubmit={formSubmit}
		>
			<label htmlFor="name" className={currentTheme.label}>
				Name
			</label>
			<input className={inputField} type="text" name="name" />

			<label htmlFor="subject" className={currentTheme.label}>
				Subject
			</label>
			<input className={inputField} type="text" name="subject" />

			<label htmlFor="email" className={currentTheme.label}>
				Email
			</label>
			<input className={inputField} type="text" name="email" />

			<label htmlFor="message" className={currentTheme.label}>
				Message
			</label>
			<textarea className={inputField}></textarea>

			<button id={submitBtn} className={currentTheme.btn} type="submit">
				Send
			</button>
		</form>
	);
};

export default ContactForm;
