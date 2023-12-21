'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA, APP_ROUTES } from '@/config';
import Client from './client';

export async function generateMetadata({ id, searchParams }) {
	const title = `Privacy Policy | ${SITE_DATA.OFFICIAL_NAME}`;
	const metadata = await generateMetaData({ title });
	return { ...metadata, openGraph: { ...metadata.openGraph, url: APP_ROUTES.POLICY } };
}

const Policy = async () => {
	return <Client />;
};

export default Policy;
