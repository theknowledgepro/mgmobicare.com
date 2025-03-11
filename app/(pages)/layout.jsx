import React from 'react';
import { Header, Footer } from '@/app/_components';

export const metadata = { title: 'MGMOBI CARE' };

export default function RootLayout({ children }) {
	return (
		<React.Fragment>
			<Header />
			{children}
			<Footer />
		</React.Fragment>
	);
}
