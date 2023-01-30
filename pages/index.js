import { Fragment } from 'react';

import { Hero } from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

export default function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>IvanRozb's blog</title>
				<meta
					name={'description'}
					content={"It's blog about programming and web development"}
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.featuredPosts} />
		</Fragment>
	);
}

export async function getStaticProps() {
	return {
		props: {
			featuredPosts: getFeaturedPosts(),
		},
	};
}
