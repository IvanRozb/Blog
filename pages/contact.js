import { ContactForm } from '@/components/contact/contact-form';
import { Fragment } from 'react';
import Head from 'next/head';

export default function ContactPage() {
	console.log(process.env)

	return (
		<Fragment>
			<Head>
				<title>Contact Me</title>
				<meta name={'description'} content={'Send me your message'} />
			</Head>
			<ContactForm />
		</Fragment>
	);
}
