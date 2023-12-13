import React from 'react';
import styles from '@/app/app.module.css';
import { ContactForm, WebBanner } from '@/app/_components';

const Client = () => {
	return (
		<div className='w-full h-full min-w-[100vw]'>
			<WebBanner page='Contact Us' />
			<section className={`bg-[#f2e8fd] ${styles.section}`}>
				<div className='xss:col-span-1 md:col-span-12 text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>WE'RE HERE TO SERVE YOU</span>
					<h2 className='font-[600] text-[2rem]'>Reach Out to Us!</h2>
				</div>
				<ContactForm />
			</section>
		</div>
	);
};

export default Client;
