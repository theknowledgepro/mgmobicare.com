'use client';
import React from 'react';
import styles from '@/app/(pages)/app.module.css';
import { ContactForm, WebBanner } from '@/app/_components';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { SITE_DATA } from '@/config';
import Link from 'next/link';

const ContactIcon = ({ icon, texts = [] }) => {
	return (
		<div className='w-full flex gap-[10px] mb-[30px] items-center justify-start'>
			<div className='w-[70px] h-[70px] text-[var(--color-primary)] rounded-[50%] bg-white flex items-center justify-center'>{icon}</div>
			<div className='w-[calc(100%_-_100px)] flex flex-col'>
				<span className='text-start text-[15px] font-[600]'>{texts[0]}</span>
				<span className='text-start text-[18px] font-[600]'>{texts[1]}</span>
			</div>
		</div>
	);
};

const Client = () => {
	return (
		<div className='w-full h-full'>
			<WebBanner page='Contact Us' />
			<section className={`bg-[#f2e8fd] grid xss:grid-cols-1 md:grid-cols-12 xss:gap-0 md:gap-[2rem] ${styles.section}`}>
				<div className='xss:col-span-1 md:col-span-12 text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>Contact Us</span>
					<h2 className='font-[600] text-[2rem]'>Reach Out to Us!</h2>
				</div>
				<div className='xss:col-span-1 md:col-span-5 xss:text-[16px] md:text-[18px]'>
					<div className='mb-[40px]'>
						Welcome to <span className='font-[600] text-[var(--color-primary)]'>{SITE_DATA.NAME}</span>, where compassionate care meets
						comfort in the familiarity of your home. We understand the importance of personalized support for you or your loved ones, and
						we're here to make that journey seamless.
						<br />
						<br />
						Contacting us is the first step towards a tailored home care experience. Our dedicated team is ready to assist you with any
						questions, concerns, or inquiries you may have. Whether you're exploring options for yourself or a family member, we're
						committed to providing a listening ear and guiding you through the process.
						<br />
						<br />
						Reach out to us through the contact form or via any of our channels below, and one of our friendly representatives will get
						back to you shortly.
					</div>
					<ContactIcon
						texts={['Phone:', <Link href={`tel:${SITE_DATA.CONTACT_TEL}`}>{SITE_DATA.CONTACT_TEL}</Link>]}
						icon={<LocalPhoneRoundedIcon className='text-[40px]' />}
					/>
					<ContactIcon
						texts={['Email:', <Link href={`tel:${SITE_DATA.CONTACT_EMAIL}`}>{SITE_DATA.CONTACT_EMAIL}</Link>]}
						icon={<MarkEmailReadRoundedIcon className='text-[40px]' />}
					/>
					<ContactIcon texts={['Head Office:', SITE_DATA.HEAD_OFFICE]} icon={<LocationOnOutlinedIcon className='text-[40px]' />} />
				</div>
				<div className='xss:col-span-1 md:col-span-7'>
					<ContactForm hideImage />
				</div>
				<div className='xss:col-span-1 md:col-span-12 text-center mt-[40px] xss:text-[16px] md:text-[18px]'>
					Thank you for considering <span className='font-[600] text-[var(--color-primary)]'>{SITE_DATA.NAME}</span> for your home care
					needs. We look forward to supporting you on your journey to enhanced well-being and comfort at home!
				</div>
			</section>
		</div>
	);
};

export default Client;
