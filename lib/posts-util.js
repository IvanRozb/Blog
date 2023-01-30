import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
	const filePath = path.join(postsDirectory, fileName);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const postSlug = fileName.replace(/\.md$/, '');

	return {
		slug: postSlug,
		...data,
		content,
	};
}

export function getAllPosts() {
	return fs
		.readdirSync(postsDirectory)
		.map((postFile) => getPostData(postFile))
		.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
	return getAllPosts().filter((post) => post.isFeatured);
}
