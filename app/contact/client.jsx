'use client';
import React from 'react';
import styles from '@/app/app.module.css';

const Client = () => {
	return (
		<div className='w-full h-full min-w-[100vw]'>
			<section className={styles.section}>client</section>
			<section className={`bg-[#ecdcfd] ${styles.section}`}></section>
		</div>
	);
};
export default Client;
