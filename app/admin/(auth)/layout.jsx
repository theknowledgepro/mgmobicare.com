import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './auth.module.css';
import { SITE_DATA } from '@/config';
import Link from 'next/link';

export default function RootLayout({ children }) {
	return (
		<div className={`${styles.parent} bg-[#f2e8fd]`}>
			<Paper elevation={3} className={styles.auth_card}>
				{children}
			</Paper>
			<div className='text-center text-sm text-gray-500 font-[600] mt-[40px]'>
				&copy; {new Date().getFullYear()} {SITE_DATA.NAME}
				<br />
				<div className='w-full flex items-center justify-center text-[13px]'>
					Designed & Developed by
					<Link className='mx-1 underline' target='_blank' href={SITE_DATA.DEVELOPER_URL}>
						{SITE_DATA.DEVELOPER_NAME}
					</Link>
				</div>
			</div>
		</div>
	);
}
