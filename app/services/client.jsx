'use client';
import React from 'react';
import styles from '@/app/app.module.css';
import { WebBanner, BookAppointment, TestimonialSection, ImageTag, ContactForm } from '@/app/_components';
import services from '@/config/services';
import { TESTIMONIALS } from '@/config';

const Client = () => {
	return (
		<div className='w-full h-full'>
			<WebBanner src='/nurse-feeding-elderly-senior-man-eat-breakfast-nursing-home.jpg' page='Our Services' />
			{services?.map((service, index) => {
				const { title, icon, summary, description, thumbnail } = service;
				return (
					<section
						id={title?.split(' ')?.join('-')?.toLowerCase()}
						key={index}
						className={`${index % 2 === 0 ? 'bg-[#f2e8fd]' : 'bg-[#fff]'} ${
							styles.section
						} mb-[20px] grid grid-cols-12 xss:gap-x-0 xss:gap-y-[10px] md:gap-[2rem]`}>
						<div className={`xss:col-span-12 md:col-span-6 ${index % 2 === 0 ? 'xss:order-2 md:order-1' : 'xss:order-2 md:order-2'}`}>
							<div
								style={{ textShadow: '1px 1px 2px #000' }}
								className={`xss:text-[28px] md:text-[35px] w-full flex items-start justify-start text-[var(--color-primary)] font-[500] text-start`}>
								<span className='mr-1 my-auto'>{icon}</span> {title}
							</div>
							<div className='text-[17px] text-start mt-[10px] mb-[20px]'>{summary}</div>
							<div className='text-[17px] text-start' dangerouslySetInnerHTML={{ __html: description }}></div>
						</div>
						<div
							className={`flex items-center justify-center xss:col-span-12 md:col-span-6 ${
								index % 2 === 0 ? 'xss:order-1 md:order-2' : 'xss:order-1 md:order-1'
							}`}>
							<ImageTag
								alt={title}
								className={`my-auto w-full h-full max-h-[300px] border-[3px] ${
									index % 2 === 0 ? 'border-white' : 'border-[#f2e8fd]'
								} rounded-[5px]`}
								src={thumbnail}
							/>
						</div>
					</section>
				);
			})}
			<section id='testimonials' className={`bg-[#f2e8fd] ${styles.section}`}>
				<div className='w-full text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>What people say</span>
					<h2 className='font-[600] text-[2rem]'>Our Testimonials!</h2>
				</div>
				<TestimonialSection testimonials={TESTIMONIALS} />
			</section>
			<section className={`bg-[#fff] border-t-[4px] border-[var(--color-primary)] ${styles.section}`}>
				<div className='w-full text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>call us today</span>
					<h2 className='font-[600] text-[2rem]'>Let's Serve You!</h2>
				</div>
				<BookAppointment />
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
