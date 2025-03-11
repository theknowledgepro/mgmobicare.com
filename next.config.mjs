/** @type {import('next').NextConfig} */
import PWA from 'next-pwa';
const API_DOMAIN = 'https://services.promisedera.com/api/mgmobicare';

const withPWA = PWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
	cacheOnFrontEndNav: true,
	reloadOnOnline: true,
	register: true,
});

const nextConfig = {
	output: 'export',
	compiler: { styledComponents: true },
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: `/api/:path*`,
				destination: `${API_DOMAIN}/:path*`,
			},
		];
	},
};

export default withPWA(nextConfig);
