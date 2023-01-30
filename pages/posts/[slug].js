import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '@/lib/posts-util';

export default function PostDetailPage(props) {
	return <PostContent post={props.post} />;
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
