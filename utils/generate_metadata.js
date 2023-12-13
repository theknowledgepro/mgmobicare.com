'use server';
import { SITE_DATA } from '@/config';

const generateMetaData = async () => {
	const defaults = {
		description: `${SITE_DATA.NAME} official website.`,
		siteName: SITE_DATA.NAME
	};

	return {
		keywords: [`${SITE_DATA.NAME}`, ''],
		generator: defaults.siteName,
		applicationName: defaults.siteName,
		referrer: 'origin-when-cross-origin',
		metadataBase: new URL(`https://${process.env.DOMAIN}`),
		icons: {
			icon: '/icon.png',
			shortcut: '/shortcut-icon.png',
			apple: '/apple-icon.png',
			other: {
				rel: 'apple-touch-icon-precomposed',
				url: '/apple-touch-icon-precomposed.png'
			}
		},
		openGraph: {
			description: defaults.description,
			siteName: defaults.siteName,
			images: [
				{
					url: 'https://nextjs.org/og.png',
					width: 800,
					height: 600
				}
			],
			locale: 'en_US',
			type: 'website'
		},
		twitter: {
			card: 'app',
			description: defaults.description,
			app: {
				name: 'twitter_app',
				id: {
					iphone: 'twitter_app://iphone',
					ipad: 'twitter_app://ipad',
					googleplay: 'twitter_app://googleplay'
				},
				url: {
					iphone: 'https://iphone_url',
					ipad: 'https://ipad_url'
				}
			}
		},
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		}
	};
};

export default generateMetaData;
