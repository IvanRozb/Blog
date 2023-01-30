import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

export default function AllPostsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta
					name={'description'}
					content={
						'A list of programming-related posts and tutorials'
					}
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getAllPosts(),
		},
		revalidate: 600,
	};
}
