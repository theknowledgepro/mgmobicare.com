'use client';
import React, { useEffect, useRef } from 'react';
import { FlipCard, ImageTag } from '.';
import { useInView } from 'framer-motion';
import { APP_ROUTES } from '@/config';
import Link from 'next/link';
import services from '@/config/services';

const ServiceCard = ({ service, cardWrapperClassName }) => {
	const cardRef = useRef(null);
	const isVisible = useInView(cardRef);

	const handleFlip = () => {
		if (isVisible && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0))
			cardRef.current.classList.toggle('rotate-flip');
	};
	useEffect(() => {
		const timeout = setTimeout(() => handleFlip(), 500);
		return () => clearTimeout(timeout);
	}, [isVisible]);

	return (
		<FlipCard
			ref={cardRef}
			onClick={handleFlip}
			cardWrapperClassName={cardWrapperClassName}
			cardWrapperHeight={'280px'}
			frontContent={
				<div className='w-full h-full relative'>
					<ImageTag priority src={service?.thumbnail} className={`w-full h-full max-h-[290px] rounded-[inherit]`} alt={service?.title} />
					<div className='border-t-[3px] border-[var(--color-primary)] absolute bottom-0 left-0 right-0 w-full bg-white'>
						<div
							style={{ textShadow: '1px 1px 2px #000' }}
							className={`border-t-[3px] border-white text-[20px] text-white bg-[var(--color-primary)] p-2 w-full flex justify-center items-center text-center`}>
							{service?.title}
						</div>
					</div>
				</div>
			}
			rearContent={
				<div className='p-3 flex flex-col items-center justify-center relative w-full h-full'>
					<div className='w-full flex items-center justify-center mb-[10px]'>{service?.icon}</div>
					<div style={{ textShadow: '1px 1px 2px #0003' }} className='w-full text-center text-[20px]'>
						{service?.title}
					</div>
					<div className='pt-3 pb-[25px] text-center w-full'>{service?.summary}</div>
					<Link
						href={`${APP_ROUTES.SERVICES}#${service?.title?.split(' ')?.join('-')?.toLowerCase()}`}
						className='border-t-[3px] border-[var(--color-primary)] absolute bottom-0 left-0 right-0 w-full flex items-end justify-end font-[600] px-[10px] pt-[5px] pb-[10px] bg-white'>
						Learn more
					</Link>
				</div>
			}
		/>
	);
};

const ServicesSection = () => {
	return (
		<div className='w-full grid grid-cols-12 xss:gap-x-0 xss:gap-y-[10px] sm:gap-x-[10px] sm:gap-y-[10px] md:gap-[2rem]'>
			{services?.map((service, index) => (
				<ServiceCard key={index} cardWrapperClassName='xss:col-span-12 sm:col-span-6 md:col-span-4' service={service} />
			))}
		</div>
	);
};

export default ServicesSection;
