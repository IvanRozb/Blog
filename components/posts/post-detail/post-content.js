import PostHeader from '@/components/posts/post-detail/post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

export default function PostContent(props) {
	const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={props.post.title} image={imagePath} />
			<ReactMarkdown>{props.post.content}</ReactMarkdown>
		</article>
	);
}
