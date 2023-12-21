'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA, APP_ROUTES } from '@/config';
import ContactClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const title = `Contact Us | ${SITE_DATA.OFFICIAL_NAME}`;
	const metadata = await generateMetaData({ title });
	return { ...metadata, openGraph: { ...metadata.openGraph, url: APP_ROUTES.CONTACT } };
}

const Contact = async () => {
	return <ContactClient />;
};

export default Contact;
