import { FormEvent } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./scss/ContactForm.module.scss";
import { PreferredTheme } from "types/typings";

interface RequestOptions {
	method?: string;
	headers?: { [key: string]: string };
	body?: string;
}

const ContactForm = () => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	const formSubmit = async (event: FormEvent<Element>): Promise<void> => {
		const form: HTMLFormElement = event.target as HTMLFormElement;
		const formData: FormData = new FormData(form);

		const requestOptions: RequestOptions = {
			method: form.method,
			headers: { Accept: "application/json" },
			body: JSON.stringify(formData),
		};

		try {
			const response: Response = await fetch(form.action, requestOptions);
			const responseData = await response.json();
			console.log("Response Data: ", responseData);
		} catch (error: any) {
			console.error(error.message);
		}
	};

	return (
		<form
			id="contact__section__form"
			className={styles[`contact__section__form`]}
			method="POST"
			action="https://formspree.io/xyynyqzr"
			target="_blank"
			onSubmit={formSubmit}
		>
			<label htmlFor="name" className={styles[`contact__section__form__label--${preferredTheme}`]}>
				Name
			</label>
			<input className={styles[`contact__section__form__input`]} type="text" name="name" />

			<label
				htmlFor="subject"
				className={styles[`contact__section__form__label--${preferredTheme}`]}
			>
				Subject
			</label>
			<input className={styles[`contact__section__form__input`]} type="text" name="subject" />

			<label htmlFor="email" className={styles[`contact__section__form__label--${preferredTheme}`]}>
				Email
			</label>
			<input className={styles[`contact__section__form__input`]} type="text" name="email" />

			<label
				htmlFor="message"
				className={styles[`contact__section__form__label--${preferredTheme}`]}
			>
				Message
			</label>
			<textarea className={styles[`contact__section__form__input`]}></textarea>

			<button className={styles[`contact__section__form__btn--${preferredTheme}`]} type="submit">
				Send
			</button>
		</form>
	);
};

export default ContactForm;
