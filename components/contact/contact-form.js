import classes from './contact-form.module.css';
import { useRef } from 'react';

export function ContactForm() {
	const emailInputRef = useRef('');
	const nameInputRef = useRef('');
	const messageInputRef = useRef('');

	function submitContactHandler(event) {
		event.preventDefault();

		fetch('api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email: emailInputRef.current.value,
				name: nameInputRef.current.value,
				message: messageInputRef.current.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={submitContactHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id={'email'}
							required
							ref={emailInputRef}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id={'name'}
							required
							ref={nameInputRef}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows="5"
						ref={messageInputRef}
					></textarea>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
}
