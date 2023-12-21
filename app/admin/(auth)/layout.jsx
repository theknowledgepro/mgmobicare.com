import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './auth.module.css';
import { SITE_DATA } from '@/config';

export default function RootLayout({ children }) {
	return (
		<div className={`${styles.parent} bg-[#f2e8fd]`}>
			<Paper elevation={3} className={styles.auth_card}>
				{children}
			</Paper>
			<div className='text-center text-sm text-gray-500 font-[600] mt-[40px]'>
				&copy; {new Date().getFullYear()} {SITE_DATA.NAME}
			</div>
		</div>
	);
}
