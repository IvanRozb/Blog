import classes from './contact-form.module.css';
import { useEffect, useRef, useState } from 'react';
import Notification from '@/components/ui/notification';

async function sendContactData(data) {
	const response = await fetch('api/contact', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) throw new Error(response.statusText);
}

export function ContactForm() {
	const emailInputRef = useRef('');
	const nameInputRef = useRef('');
	const messageInputRef = useRef('');
	const [responseStatus, setResponseStatus] = useState('');
	const [responseError, setResponseError] = useState();

	useEffect(() => {
		if (responseStatus === 'success' || responseStatus === 'error') {
			const timer = setTimeout(() => {
				setResponseStatus(null);
				setResponseError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [responseStatus]);

	async function submitContactHandler(event) {
		event.preventDefault();

		setResponseStatus('pending');
		try {
			await sendContactData({
				email: emailInputRef.current.value,
				name: nameInputRef.current.value,
				message: messageInputRef.current.value,
			});
			setResponseStatus('success');
		} catch (error) {
			setResponseError(error.message);
			setResponseStatus('error');
		}
	}

	let notification;
	if (responseStatus === 'pending') {
		notification = {
			status: responseStatus,
			message: 'Your message is on the way!',
			title: 'Sending message...',
		};
	} else if (responseStatus === 'success') {
		notification = {
			status: responseStatus,
			message: 'Your message is already transferred!',
			title: 'Message has received!',
		};
	} else if (responseStatus === 'error') {
		notification = {
			status: responseStatus,
			message: responseError,
			title: 'Error!',
		};
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
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}
