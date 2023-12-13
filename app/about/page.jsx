'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA } from '@/config';
import AboutClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const metadata = await generateMetaData();
	return { ...metadata, title: `About Us | ${SITE_DATA.OFFICIAL_NAME}` };
}

const About = async () => {
	return <AboutClient />;
};

export default About;
