import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA, APP_ROUTES } from '@/config';
import AboutClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const title = `About Us | ${SITE_DATA.OFFICIAL_NAME}`;
	const metadata = await generateMetaData({ title });
	return { ...metadata, openGraph: { ...metadata.openGraph, url: APP_ROUTES.ABOUT } };
}

const About = async () => {
	return <AboutClient />;
};

export default About;
