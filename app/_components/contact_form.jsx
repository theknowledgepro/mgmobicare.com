'use client';
import React, { useRef, useState } from 'react';
import styles from './components.module.css';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';
import { contactUsFormAPISubmit } from '@/utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import { ImageTag, CustomButton, SocialIcons } from '@/app/_components';
import ContactUsImage from '@/assets/contact-us.png';
import { SITE_DATA } from '@/config';
import { AppContext } from '@/context';

const ContactForm = ({ hideImage }) => {
	const { setToast } = AppContext();
	const nameInputRef = useRef(null);
	const emailInputRef = useRef(null);
	const phoneInputRef = useRef(null);
	const messageInputRef = useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e) => {
		const name = nameInputRef.current?.value;
		const email = emailInputRef.current?.value;
		const phone = phoneInputRef.current?.value;
		const message = messageInputRef.current?.value;
		await contactUsFormAPISubmit({ name, email, phone, message, isLoading, setIsLoading, setToast });
	};

	return (
		<div className={`${styles.contact_form_wrapper} bg-white`}>
			<div className={`flex xss:flex-col base:flex-row gap-[1rem] items-center justify-between border-b border-zinc-300 pb-4`}>
				<h2 className={'xss:text-[25px] md:text-[35px] font-[600]'}>
					Contact <span className='text-primary xss:text-[25px] md:text-[35px]'>Us</span>
				</h2>
				<SocialIcons className='gap-[10px] flex justify-start max-w-[320px]' />
			</div>
			<div className='w-full grid xss:grid-cols-1 md:grid-cols-12 gap-[2rem]'>
				<div className={`xss:col-span-1 xss:order-2 md:order-1 ${hideImage ? 'md:col-span-12' : 'md:col-span-8'} ${styles.contact_form}`}>
					<label htmlFor='nameenter'>Your name</label>
					<input id='nameenter' ref={nameInputRef} type='text' name='name' placeholder="What's the name?" required={true} />
					<label htmlFor='emailenter'>Email Address</label>
					<input id='emailenter' ref={emailInputRef} type='email' name='email' placeholder='Enter your email address' required={true} />

					<label htmlFor='numberenter'>
						Phone number <span className='text-muted'>(Optional)</span>
					</label>
					<input id='numberenter' ref={phoneInputRef} type='number' name='phone' placeholder='Enter your mobile number' />
					<label htmlFor='messageenter'>Message</label>
					<textarea id='messageenter' ref={messageInputRef} required={true} name='message'></textarea>
					<CustomButton
						onClick={handleSubmit}
						backgroundColor='var(--color-primary)'
						textColor='#fff'
						children={isLoading ? <CircularProgress style={{ color: '#000', height: '20px', width: '20px' }} /> : 'Submit!'}
						className={`w-full normal-case text-[16px] font-[600] shadow-[0_0_5px_var(--color-primary)]`}
						variant='contained'
					/>
				</div>
				{!hideImage && (
					<div className='m-auto xss:col-span-1 md:col-span-4 xss:order-1 md:order-2 h-full flex flex-col items-center justify-center'>
						<ImageTag
							alt='Contact Us!'
							className={`${styles.contact_form_logo} xss:mt-8 md:mt-0 rounded-[50%] mx-auto`}
							src={ContactUsImage}
						/>
						<div className='mt-4'>
							<div className='text-[12px] text-primary text-center'>You can also send us a direct mail on:</div>
							<Link href={`mailto:${SITE_DATA.CONTACT_EMAIL}`}>
								<EmailOutlined className={`text-[var(--color-primary)] mr-2 ${styles.icon}`} />
								<span
									className={`text-[0.9rem] font-[600] text-[var(--color-primary)]`}
									dangerouslySetInnerHTML={{ __html: SITE_DATA.CONTACT_EMAIL }}></span>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
