import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
	return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
	const filePath = path.join(postsDirectory, postIdentifier);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	return {
		slug: postIdentifier.replace(/\.md$/, ''),
		...data,
		content,
	};
}

export function getAllPosts() {
	return getPostsFiles()
		.map((postFile) => getPostData(postFile))
		.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
	return getAllPosts().filter((post) => post.isFeatured);
}
