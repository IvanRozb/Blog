import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';

export default function AllPostsPage(props) {
	return <AllPosts posts={props.posts} />;
}

export async function getStaticProps() {
	return {
		props: {
			posts: getAllPosts(),
		},
		revalidate: 600,
	};
}
