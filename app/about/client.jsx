'use client';
import React from 'react';
import styles from '@/app/app.module.css';
import { WebBanner, ContactForm } from '@/app/_components';
import { SITE_DATA } from '@/config';
import Link from 'next/link';

const Client = () => {
	return (
		<div className='w-full h-full'>
			<WebBanner src='/positive-mother-daughter-enjoying-dramatic-view.jpg' page='About Us' />
			<section className={`bg-[#f2e8fd] ${styles.section}`}>
				<div className='xss:col-span-1 md:col-span-12 text-center mb-[60px] text-[var(--color-primary)]'>
					<h2 className='font-[600] text-[2rem]'>About {SITE_DATA.NAME}</h2>
				</div>
				<div className='w-full grid grid-cols-12 xss:gap-0 md:gap-[2rem]'>
					<div className='text-[17px] xss:col-span-12 md:col-span-7'>
						Welcome to <span className='text-[var(--color-primary)]'>{SITE_DATA.NAME}</span>, a leading provider of personalized homecare
						services.
						<br />
						At <span className='text-[var(--color-primary)]'>{SITE_DATA.NAME}</span>, we understand that every individual is unique, and
						so are their needs. Our dedicated team of experienced professionals is committed to delivering a wide range of services
						tailored to meet the specific requirements of each client.
						<br />
						<br />
						Whether it's assistance with daily activities, medication management, or specialized healthcare needs, we are here to support
						you and your loved ones on the journey to optimal well-being.
						<br />
						<br />
						What sets us apart is our unwavering commitment to quality. We carefully select and train our caregivers to ensure they
						possess not only the necessary skills but also the empathy and compassion needed to create meaningful connections with our
						clients. We believe that building strong, trusting relationships is the foundation of exceptional care.
						<br />
						<br />
						In addition to our skilled and compassionate team, <span className='text-[var(--color-primary)]'>{SITE_DATA.NAME}</span>
						embraces innovation and technology to enhance the overall care experience. We leverage cutting-edge solutions to streamline
						communication, monitor health metrics, and provide real-time updates to families, offering peace of mind and transparency.
						<br />
						<br />
						Our holistic approach to homecare extends beyond physical well-being. We recognize the importance of emotional and social
						fulfillment in the lives of our clients. That's why our services are designed to promote social engagement, mental
						stimulation, and overall happiness.
						<br />
						<br />
						<span className='text-[var(--color-primary)]'>{SITE_DATA.NAME}</span> is not just a service provider; we are your partners in
						care. Our goal is to create a supportive and nurturing environment where individuals can thrive in the comfort of their homes.
						We work closely with families to develop personalized care plans, ensuring that every aspect of a client's life is considered.
						<br />
						<br />
						Experience the <span className='text-[var(--color-primary)]'>{SITE_DATA.NAME}</span> difference—where care is not just a
						service but a commitment to enhancing the quality of life. Whether you or your loved ones require short-term assistance or
						long-term care solutions, we are here for you. Trust us to be your dedicated partner on the journey to a healthier, happier,
						and more fulfilling life.
					</div>
				</div>
			</section>
			<section className={`bg-[#f2e8fd] ${styles.section}`}>
				<div className='w-full text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>WE'RE HERE TO SERVE YOU</span>
					<h2 className='font-[600] text-[2rem]'>Reach Out to Us!</h2>
				</div>
				<ContactForm />
			</section>
		</div>
	);
};

export default Client;
