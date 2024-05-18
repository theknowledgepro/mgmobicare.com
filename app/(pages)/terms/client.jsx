'use client';
import React from 'react';
import styles from '@/app/(pages)/app.module.css';
import { WebBanner } from '@/app/_components';
import { SITE_DATA } from '@/config';
import Link from 'next/link';

const Client = () => {
	return (
		<div className='w-full h-full'>
			<WebBanner src='/nurse-feeding-elderly-senior-man-eat-breakfast-nursing-home.jpg' page='Terms' />
		</div>
	);
};

export default Client;
