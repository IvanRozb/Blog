import PostHeader from '@/components/posts/post-detail/post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const TEST_DATA = {
	title: 'Getting Started With Next JS1',
	date: '2023-01-29',
	image: 'getting-started-nextjs.png',
	slug: 'getting-started-nextjs1',
	content: '# This is the first post',
};

export default function PostContent() {
	const imagePath = `/images/posts/${TEST_DATA.slug}/${TEST_DATA.image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={TEST_DATA.title} image={imagePath} />
			<ReactMarkdown>{TEST_DATA.content}</ReactMarkdown>
		</article>
	);
}
