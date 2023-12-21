'use client';
import React from 'react';
import styles from '@/app/app.module.css';
import { Paper } from '@mui/material';
import { SITE_DATA, ASSETS, APP_ROUTES } from '@/config';
import { ContactForm, ImageTag, CustomButton, TestimonySection } from '@/app/_components';
import Slider from 'react-slick';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Client = () => {
	const carouselSettings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 20000,
		pauseOnHover: false,
		fade: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const slides = [
		{
			backgroundImage: '/positive-mother-daughter-enjoying-dramatic-view.jpg',
			headline: 'Mgmobi Care...',
			description: ['Trusted Allies in Care...', 'Building trust through personalized care...', 'Dedicated to your well-being, always here...']
		}
	];

	const perksData = [
		{
			title: 'Personalized Care Plans',
			content: `At ${SITE_DATA.NAME}, we understand that each individual has unique needs. Our key feature is the development of
	personalized care plans tailored to address specific requirements.`,
			icon: <SettingsAccessibilityIcon className='text-[70px] text-white' />
		},
		{
			title: 'Trained and Compassionate Caregivers',
			content: `Our key feature is the meticulous selection and training of professionals with essential skills and genuine compassion ensuring clients get physical assistance and emotional support, fostering trust.`,
			icon: <FavoriteIcon className='text-[50px] text-white' />
		},
		{
			title: 'Family Involvement and Support',
			content: `We value family in the care journey. We keep clients' families informed about the care plan, progress, and adjustments. This collaborative approach ensures families are integral partners, fostering a supportive network.`,
			icon: <Diversity1Icon className='text-[50px] text-white' />
		}
	];

	const thumbnails = ['/folder/1.jpg', '/folder/2.jpg', '/folder/3.jpg', '/folder/4.jpg'];

	const testimonials = [
		{
			clientName: 'Mary K.',
			clientRating: 5,
			content: `Choosing ${SITE_DATA.NAME} for my mom's homecare was the best decision. The caregivers are not just skilled professionals but also compassionate individuals. They've become like an extended family, providing exceptional care with a personal touch. Grateful for the peace of mind they've brought into our lives.`,
			clientOccupation: 'Satisfied Client',
			avatar: ASSETS.FEMALE_AVATAR
		},
		{
			clientName: 'John D.',
			clientRating: 4,
			content: `We were impressed by the transparent and collaborative approach of ${SITE_DATA.NAME}. The regular updates and involvement in our loved one's care made all the difference. It's more than a service; it's a partnership. Thank you for the genuine care and support.`,
			clientOccupation: 'Family Member',
			avatar: ASSETS.MALE_AVATAR
		},
		{
			clientName: 'Robert F.',
			clientRating: 4,
			content: `The trust we've built with ${SITE_DATA.NAME} is unmatched. The careful selection and compassionate delivery of care have made them an integral part of our family. Knowing that our loved ones are in capable hands allows us to focus on cherishing the moments together.`,
			clientOccupation: 'Trusting Client',
			avatar: ASSETS.MALE_AVATAR
		},
		{
			clientName: 'Emily M.',
			clientRating: 4,
			content: `The dedicated team at ${SITE_DATA.NAME} goes above and beyond. Their commitment to providing not only physical but emotional support has made a significant impact on my parent's quality of life. I'm grateful for the positive and trusting relationship they've nurtured. Thank you for everything!`,
			clientOccupation: 'Grateful Daughter',
			avatar: ASSETS.FEMALE_AVATAR
		}
	];
	return (
		<div className='w-full h-full min-w-[100vw]'>
			<Slider className='relative' {...carouselSettings}>
				{slides?.map((slide, i) => (
					<div key={i} className={`relative min-h-[99vh] bg-inherit`}>
						<ImageTag
							priority
							className='absolute bg-inherit h-full object-cover w-full '
							src={slide?.backgroundImage}
							style={{ maxHeight: '768px' }}
							alt={`Slide Thumbnail`}
						/>
						<div className={`absolute top-0 start-0 w-full h-full flex items-center`} style={{ background: 'rgba(43, 57, 64, .5)' }}>
							<div
								className={`relative xss:ml-[8px] md:ml-[70px] pt-[100px] pb-[30px] pr-[100px ] border-l-[15px] border-[var(--color-primary)] xss:h-[70%] md:h-[62%] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-[15px] before:bg-[var(--color-primary)] after:content-[''] after:absolute after:top-[100%] after:mt-[-15px] after:left-0 after:w-[100px] after:h-[15px] after:bg-[var(--color-primary)]`}>
								<div className={`flex justify-start`}>
									<div className={`px-3 xss:w-[90vw] md:w-[60vw]`}>
										<h1 className={`line-height-2 xss:text-[30px] md:text-[50px] font-[600] text-white mb-2`}>
											{slide?.headline}
										</h1>
										<div className='xss:text-[17px] md:text-[20px] font-[400] text-white mb-4 pb-2'>
											<Typewriter
												options={{
													strings: slide?.description,
													autoStart: true,
													cursorClassName: 'xss:text-[25px] md:text-[35px] xss:leading-[35px] md:leading-[45px]',
													wrapperClassName: 'xss:text-[17px] md:text-[25px] xss:leading-[25px] md:leading-[35px]',
													loop: true
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<section className={`bg-[#f2e8fd] w-full xss:h-[1000px] md:h-[300px] relative`}>
				<div className='absolute left-0 xss:top-0 md:top-[-110px] bg-transparent xss:p-[10px_5%] md:p-[10px_10%] w-full grid grid-cols-3 xss:gap-y-[10px] xss:gap-x-[0] md:gap-y-0 md:gap-x-[3rem]'>
					{perksData?.map((perk, index) => (
						<Paper
							key={index}
							elevation={4}
							className='xss:col-span-3 md:col-span-1 bg-[#512481ad] rounded-[20px_20px] border-[2px] border-white flex flex-col items-start justify-center py-[30px] px-[30px]'>
							<div>{perk?.icon}</div>
							<div
								style={{ textShadow: '1px 1px 2px #000' }}
								className='font-[500] text-white my-[5px]  before:content-[""] before:absolute before:h-[4px] before:w-[10px] before:rounded-[30px] before:bg-white before:bottom-[-5px] before:left-0 after:content-[""] after:absolute after:h-[4px] after:w-[40px] after:rounded-[30px] after:bg-white after:bottom-[-5px] after:left-[15px] relative text-[22px]'>
								{perk?.title}
							</div>
							<div style={{ textShadow: '1px 1px 2px #000' }} className='mt-[3px] text-[16px] text-white'>
								{perk?.content}
							</div>
						</Paper>
					))}
				</div>
			</section>
			<section className={`bg-[#f2e8fd] xss:p-[60px_5%] md:p-[60px_10%]`}>
				<div className='w-full mb-[40px]'>
					<div className='uppercase w-[max-content] font-[600] xss:pt-[80px] md:pt-[10px] pb-[5px] text-black'>Who we are</div>
					<h2
						style={{ textShadow: '1px 1px 2px #000' }}
						className='font-[600] w-[max-content] text-[2rem] before:content-[""] before:absolute before:h-[4px] before:w-[10px] before:rounded-[30px] before:bg-[var(--color-primary)] before:bottom-[-10px] before:left-0 after:content-[""] after:absolute after:h-[4px] after:w-[40px] after:rounded-[30px] after:bg-[var(--color-primary)] after:bottom-[-10px] after:left-[15px] text-[var(--color-primary)] relative'>
						{SITE_DATA.NAME}
					</h2>
				</div>
				<div className='w-full grid grid-cols-12 xss:gap-y-[20px] md:gap-[2rem]'>
					<div className='text-[17px] xss:col-span-12 md:col-span-7 xss:order-2 md:order-1'>
						Welcome to <span className='text-[var(--color-primary)] font-[600]'>{SITE_DATA.NAME}</span>, a leading provider of
						personalized homecare services.
						<br />
						At <span className='text-[var(--color-primary)] font-[600]'>{SITE_DATA.NAME}</span>, we understand that every individual is
						unique, and so are their needs. Our dedicated team of experienced professionals is committed to delivering a wide range of
						services tailored to meet the specific requirements of each client.
						<br />
						<br />
						Whether it's assistance with daily activities, medication management, or specialized healthcare needs, we are here to support
						you and your loved ones on the journey to optimal well-being.
						<br />
						<br />
						Experience the <span className='text-[var(--color-primary)] font-[600]'>{SITE_DATA.NAME}</span> difference—where care is not
						just a service but a commitment to enhancing the quality of life. Whether you or your loved ones require short-term assistance
						or long-term care solutions, we are here for you. Trust us to be your dedicated partner on the journey to a healthier,
						happier, and more fulfilling life.
						<br />
						<br />
						<Link className='font-[600] text-[var(--color-primary)]' href={APP_ROUTES.ABOUT}>
							Learn more
						</Link>
					</div>
					<div className='xss:col-span-12 md:col-span-5 xss:order-1 md:order-2 h-full'>
						<div className='grid grid-cols-12 gap-0 about-bg'>
							{thumbnails.map((src, i) => (
								<div key={i} className='col-span-6 text-start'>
									<ImageTag
										priority
										className={`${(i === 0 || i === 3) && 'w-full'} ${(i === 1 || i === 2) && 'w-[85%]'} ${
											i === 2 && 'mt-[15%]'
										} border-[2px] max-h-[180px] object-contain border-white`}
										src={src}
										alt='About Us'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section}`}>
				<div className='w-full flex flex-col items-center justify-center mb-[40px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>What we do</span>
					<h2 className='font-[600] text-[2rem]'>Our Services</h2>
				</div>
			</section>
			<section id='testimonials' className={`bg-[#f2e8fd] ${styles.section}`}>
				<div className='w-full text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>What people say</span>
					<h2 className='font-[600] text-[2rem]'>Our Testimonials!</h2>
				</div>
				<TestimonySection testimonials={testimonials} />
			</section>
			<section className={`bg-[#fff] ${styles.section}`}>
				<div className='w-full text-center mb-[60px] text-[var(--color-primary)]'>
					<span className='text-[#000] text-[1rem] font-[600] uppercase'>call us today</span>
					<h2 className='font-[600] text-[2rem]'>Let's Serve You!</h2>
				</div>
				<Paper
					elevation={3}
					className='mx-auto rounded-[8px] flex items-center justify-center flex-col py-[30px] px-[30px] w-full max-w-[800px] h-[300px] bg-gradient-to-b from-[var(--color-primary)] to-[#f2e8fd]'>
					<div style={{ textShadow: '1px 1px 2px #000' }} className='text-white text-[30px]'>
						Book Appointment
					</div>
					<CustomButton
						className='normal-case my-[40px] w-full max-w-[300px] flex items-center text-[22px] font-[600] btn-animated'
						textColor='var(--color-primary)'
						backgroundColor='#fff'>
						Schedule an Appointment
					</CustomButton>
				</Paper>
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
