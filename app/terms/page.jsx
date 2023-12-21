'use server';
import generateMetaData from '@/utils/generate_metadata';
import { SITE_DATA } from '@/config';
import TermsClient from './client';

export async function generateMetadata({ id, searchParams }) {
	const metadata = await generateMetaData();
	return { ...metadata, title: `Terms | ${SITE_DATA.OFFICIAL_NAME}` };
}

const Terms = async () => {
	return <TermsClient />;
};

export default Terms;
