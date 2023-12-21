'use client';
import React from 'react';
import styles from '@/app/app.module.css';
import { WebBanner } from '@/app/_components';
import { SITE_DATA } from '@/config';
import Link from 'next/link';

const Client = () => {
	return (
		<div className='w-full h-full'>
			<WebBanner src='/positive-mother-daughter-enjoying-dramatic-view.jpg' page='About Us' />
		</div>
	);
};

export default Client;
