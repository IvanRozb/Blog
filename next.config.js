/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		connectingString: `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.mcgcxdw.mongodb.net/${process.env.mongodb_db_name}?retryWrites=true&w=majority`,
	},
};

module.exports = nextConfig;
