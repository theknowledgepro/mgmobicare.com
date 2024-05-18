'use server';
import { SITE_DATA, APP_ROUTES } from '@/config';
import services from '@/config/services';

const generateMetaData = async ({ title }) => {
	return {
		title,
		description:
			'Discover compassionate homecare services tailored to your needs. Personalized care plans, skilled caregivers, and a commitment to well-being.',
		keywords: [
			SITE_DATA.NAME,
			...services?.map((service) => {
				return service?.title;
			}),
			'Homecare',
			'Elderly Care',
			'Personalized Care',
			'Compassionate Assistance',
			'Skilled Caregivers',
			'Holistic Wellness',
			'Specialized Healthcare',
			'In-Home Rehabilitation',
			'Nutritional Counseling',
			'Respite Care',
			'Palliative Support',
			'Adaptive Home Modifications',
			'Transportation Services',
			'Wellness Programs',
			'Senior Living',
			'Memory Care',
			'Chronic Disease Management',
			'Emotional Support',
			'Family Involvement',
			'Transparent Care',
			'Remote Caregiver Support',
			'Home Safety',
			'Rehabilitation Services',
			'Independence',
			'Quality of Life',
			'Social Engagement',
			'Outdoor Mobility',
			'Telehealth Services',
			'Comfortable Living',
			'Dignified Care',
			'Holistic Aging',
			'Companionship',
			'Innovative Technology',
			'Informed Care',
			'Client-Centered Approach',
			'Mindfulness',
			'Nutrient-Rich Meals',
			'Specialized Therapies'
		],
		applicationName: SITE_DATA.NAME,
		metadataBase: new URL(`${APP_ROUTES.HOME}`),
		manifest: '/manifest.json',
		referrer: 'origin-when-cross-origin',
		openGraph: {
			title,
			description:
				'Discover compassionate homecare services tailored to your needs. Personalized care plans, skilled caregivers, and a commitment to well-being.',
			siteName: SITE_DATA.NAME,
			images: [
				{
					url: `${APP_ROUTES.HOME}icons/og.png`,
					width: 800,
					height: 600
				}
			],
			locale: 'en_US',
			type: 'website'
		},
		twitter: {
			card: 'summary',
			title,
			description:
				'Discover compassionate homecare services tailored to your needs. Personalized care plans, skilled caregivers, and a commitment to well-being.',
			images: [`${APP_ROUTES.HOME}icons/og.png`],
			site: SITE_DATA.TWITTER_HANDLE
		},
		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		}
	};
};

export default generateMetaData;
