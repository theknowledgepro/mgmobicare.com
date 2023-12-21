'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA } from '@/config';
import Client from './client';

export async function generateMetadata({ id, searchParams }) {
	const metadata = await generateMetaData();
	return { ...metadata, title: `Privacy Policy | ${SITE_DATA.OFFICIAL_NAME}` };
}

const Policy = async () => {
	return <Client />;
};

export default Policy;
