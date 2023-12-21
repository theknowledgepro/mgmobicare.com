'use client';
import { ImageTag } from '@/app/_components';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import Link from 'next/link';
import { ASSETS, APP_ROUTES } from '@/config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonyCard = ({ testimony }) => {
	return (
		<div className={`grid grid-cols-12 py-[20px] items-center justify-center w-full `}>
			<div className='xss:col-span-12 md:col-span-5 px-[5px] flex items-center justify-center flex-col'>
				<ImageTag
					className='shadow-[0_0_.5rem_var(--color-primary)] rounded-[50%] w-[200px] h-[200px]'
					alt={testimony?.clientName}
					src={testimony?.avatar ?? ASSETS.DEFAULT_AVATAR}
				/>
			</div>
			<div className='xss:col-span-12 xss:mt-[40px] md:mt-0 md:col-span-7'>
				<i className='blockquote text-black text-[15px]' dangerouslySetInnerHTML={{ __html: testimony?.content }}></i>
				<div className='flex items-center mt-[10px] mb-[15px] xss:justify-center md:justify-start'>
					{[...Array(Math.round(testimony?.clientRating) ?? 5)]?.map((rating, index) => (
						<StarPurple500OutlinedIcon className='text-[16px] text-yellow-400' key={index} />
					))}
					{[...Array(5 - Math.round(testimony?.clientRating) ?? 5)]?.map((rating, index) => (
						<StarPurple500OutlinedIcon className='text-[16px] text-gray-300' key={index} />
					))}
					<i className='ml-2 text-[12px] text-gray-600'>- {testimony?.clientRating ?? 5} star rating</i>
				</div>
				<div className='text-[15px] font-[600] w-full flex items-center xss:justify-center md:justify-start mt-[5px] text-primary'>
					<AccountCircleOutlined className='mr-2 text-[18px]' />
					<span dangerouslySetInnerHTML={{ __html: testimony?.clientName }}></span>
				</div>
				<div className='text-primary text-[12px] mt-[5px] w-full flex items-center xss:justify-center md:justify-start'>
					<InsertLinkOutlinedIcon className='text-[18px] mr-1 rotate-[-45deg]' />
					<Link href={APP_ROUTES.SERVICES} target='_blank'>
						Browse Services
					</Link>
				</div>
				<div
					className='italic xss:text-center md:text-start w-full text-[12px] mt-[2px] text-gray-600'
					dangerouslySetInnerHTML={{ __html: ` - ${testimony?.clientOccupation}` }}></div>
			</div>
		</div>
	);
};

const TestimonySection = ({ testimonials }) => {
	const carouselSetting = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover: false,
		cssEase: 'linear',
		speed: 500,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		customPaging: (i) => <div className='rounded-[50%] h-[8px] w-[8px] bg-[var(--color-primary)] '></div>
	};
	return (
		<div className='p-[8px] flex flex-col items-center justify-center w-full'>
			<Slider className='w-full max-w-[700px] pb-[30px] text-primary' {...carouselSetting}>
				{testimonials?.map((testimony, index) => {
					return <TestimonyCard testimony={testimony} key={index} />;
				})}
			</Slider>
		</div>
	);
};
export default TestimonySection;
