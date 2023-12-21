const API_DOMAIN = 'https://services.promisedera.com/api/mgmobicare';

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
