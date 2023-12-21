'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA } from '@/config';
import ServiceClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const metadata = await generateMetaData();
	return { ...metadata, title: `Our Services | ${SITE_DATA.OFFICIAL_NAME}` };
}

const Service = async () => {
	return <ServiceClient />;
};

export default Service;
