import { Fragment } from 'react';

import { Hero } from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';

const TEST_DATA = [
	{
		title: 'Getting Started With Next JS',
		date: '2023-01-29',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, libero eu laoreet sagittis, purus risus dignissim tellus, id mollis. ',
		image: 'getting-started-nextjs.png',
		slug: 'getting-started-nextjs',
	},
];

export default function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={TEST_DATA} />
		</Fragment>
	);
}
