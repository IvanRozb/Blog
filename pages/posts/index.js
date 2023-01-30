import AllPosts from '@/components/posts/all-posts';

const TEST_DATA = [
	{
		title: 'Getting Started With Next JS1',
		date: '2023-01-29',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, libero eu laoreet sagittis, purus risus dignissim tellus, id mollis. ',
		image: 'getting-started-nextjs.png',
		slug: 'getting-started-nextjs1',
	},
	{
		title: 'Getting Started With Next JS2',
		date: '2023-01-29',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, libero eu laoreet sagittis, purus risus dignissim tellus, id mollis. ',
		image: 'getting-started-nextjs.png',
		slug: 'getting-started-nextjs2',
	},
	{
		title: 'Getting Started With Next JS3',
		date: '2023-01-29',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, libero eu laoreet sagittis, purus risus dignissim tellus, id mollis. ',
		image: 'getting-started-nextjs.png',
		slug: 'getting-started-nextjs3',
	},
	{
		title: 'Getting Started With Next JS4',
		date: '2023-01-29',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, libero eu laoreet sagittis, purus risus dignissim tellus, id mollis. ',
		image: 'getting-started-nextjs.png',
		slug: 'getting-started-nextjs4',
	},
];

export default function AllPostsPage() {
	return <AllPosts posts={TEST_DATA} />;
}
