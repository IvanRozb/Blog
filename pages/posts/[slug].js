import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

export default function PostDetailPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.post.title}</title>
				<meta name={'description'} content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</Fragment>
	);
}

export async function getStaticProps(context) {
	return {
		props: {
			post: getPostData((context.params.slug += '.md')),
		},
	};
}

export async function getStaticPaths() {
	const postFileNames = getPostsFiles();

	const slugs = postFileNames.map((fileName) =>
		fileName.replace(/\.md$/, '')
	);

	return {
		paths: slugs.map((slug) => ({
			params: {
				slug: slug,
			},
		})),
		fallback: false,
	};
}
