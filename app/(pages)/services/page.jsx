import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA, APP_ROUTES } from '@/config';
import ServiceClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const title = `Our Services | ${SITE_DATA.OFFICIAL_NAME}`;
	const metadata = await generateMetaData({ title });
	return { ...metadata, openGraph: { ...metadata.openGraph, url: APP_ROUTES.SERVICES } };
}

const Service = async () => {
	return <ServiceClient />;
};

export default Service;
