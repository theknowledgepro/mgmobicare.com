import React from 'react';
import ThemeRegistry from '@/app/_theme_regsitry';
import NextTopLoader from 'nextjs-toploader';
import { SITE_DATA } from '@/config';
import { Titillium_Web } from 'next/font/google';
import { Header, Footer } from '@/app/_components';
import '@/styles/index.css';

export const inter = Titillium_Web({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	colorScheme: 'dark',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: SITE_DATA.THEME_COLOR },
		{ media: '(prefers-color-scheme: dark)', color: '#000' }
	]
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} w-full h-full relative overflow-x-hidden`}>
				<div style={{ zIndex: 5000 }}>
					<NextTopLoader
						color={SITE_DATA.THEME_COLOR}
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={true}
						easing='ease'
						speed={200}
						shadow='0 0 10px #843bd1,0 0 5px #843bd1'
					/>
				</div>
				<ThemeRegistry options={{ key: 'mui' }}>
					<Header />
					{children}
					<Footer />
				</ThemeRegistry>
			</body>
		</html>
	);
}
