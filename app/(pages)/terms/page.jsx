import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA, APP_ROUTES } from '@/config';
import TermsClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const title = `Terms | ${SITE_DATA.OFFICIAL_NAME}`;
	const metadata = await generateMetaData({ title });
	return { ...metadata, openGraph: { ...metadata.openGraph, url: APP_ROUTES.TERMS } };
}

const Terms = async () => {
	return <TermsClient />;
};

export default Terms;
