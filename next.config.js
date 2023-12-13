const API_DOMAIN = 'http://localhost:5000/static';
// const API_DOMAIN = 'https://webservices.promisedera.com/static';

const nextConfig = {
	compiler: { styledComponents: true },
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: `/api/:path*`,
				destination: `${API_DOMAIN}/:path*`
			}
		];
	}
};

module.exports = nextConfig;
