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
			<section className={`bg-[#f2e8fd] grid xss:grid-cols-1 md:grid-cols-12 xss:gap-0 md:gap-[2rem] ${styles.section}`}></section>
		</div>
	);
};

export default Client;
