'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA, APP_ROUTES } from '@/config';
import Client from './client';

export async function generateMetadata({ id, searchParams }) {
	const title = `Admin Forgot Password | ${SITE_DATA.OFFICIAL_NAME}`;
	const metadata = await generateMetaData({ title });
	return { ...metadata, openGraph: { ...metadata.openGraph, url: APP_ROUTES.ADMIN_LOGIN } };
}

const Page = async () => {
	return <Client />;
};

export default Page;
