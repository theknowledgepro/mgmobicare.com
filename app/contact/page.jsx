'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA } from '@/config';
import ContactClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const metadata = await generateMetaData();
	return { ...metadata, title: `Contact Us | ${SITE_DATA.OFFICIAL_NAME}` };
}

const Contact = async () => {
	return <ContactClient />;
};

export default Contact;
