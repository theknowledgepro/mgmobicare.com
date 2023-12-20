import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { SocialIcons, CustomButton } from '@/app/_components';
import Link from 'next/link';
import { SITE_DATA, APP_ROUTES } from '@/config';

const navItems = [
	{ name: 'Home', href: APP_ROUTES.HOME },
	{ name: 'About Us', href: APP_ROUTES.ABOUT },
	{ name: 'Our Services', href: APP_ROUTES.SERVICES },
	{ name: 'Contact Us', href: APP_ROUTES.CONTACT },
	{ name: 'Terms & Conditions', href: APP_ROUTES.TERMS },
	{ name: 'Privacy Policy', href: APP_ROUTES.POLICY }
];

const ContactIcon = ({ icon, texts = [] }) => {
	return (
		<div className='flex flex-col items-center justify-center w-full mb-[20px]'>
			<div className='w-[70px] h-[70px] mb-[30px] text-[var(--color-primary)] rounded-[50%] bg-white flex items-center justify-center'>
				{icon}
			</div>
			<span style={{ textShadow: '1px 1px 2px #000' }} className='text-center text-[18px] font-[600]'>
				{texts[0]}
			</span>
			<span className='text-center text-[15px] font-[600]'>{texts[1]}</span>
		</div>
	);
};

const Footer = () => (
	<footer className='shadow-[0_0_5px_rgba(133,_61,_209,_0.9)] border-t border-t-[var(--color-primary] text-white bg-[var(--color-primary)] '>
		<section className='xss:px-[10px] sm:px-[40px] md:px-[80px] pt-[20px] w-full'>
			<div
				className={`w-full border-b-[1px] border-zinc-200 py-[30px] grid xss:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[20px] gap-y-[30px]`}>
				<div className='col-span-1 flex flex-col items-center justify-start'>
					<div style={{ textShadow: '1px 1px 2px #000' }}>
						Elevate health and well-being with our expert team, bringing quality care to your doorstep.
					</div>
					<CustomButton
						className='normal-case my-[40px] w-full flex items-center text-[17px] font-[600] btn-animated'
						textColor='var(--color-primary)'
						backgroundColor='#fff'>
						<ArrowForwardRoundedIcon className='text-[inherit] mr-2' />
						Schedule a Visit
					</CustomButton>
					<div style={{ textShadow: '1px 1px 2px #000' }} className='w-full flex xss:justify-center sm:justify-start mb-[15px] font-[500]'>
						Connect with us @
					</div>
					<SocialIcons className='gap-[10px] w-full flex xss:justify-center sm:justify-start' />
				</div>

				<div className='col-span-1 flex flex-col items-center justify-start'>
					<ContactIcon
						texts={['Contact us on', <Link href={`tel:${SITE_DATA.CONTACT_TEL}`}>{SITE_DATA.CONTACT_TEL}</Link>]}
						icon={<LocalPhoneRoundedIcon className='text-[40px]' />}
					/>
					<ContactIcon
						texts={['Email us @', <Link href={`mailto:${SITE_DATA.CONTACT_EMAIL}`}>{SITE_DATA.CONTACT_EMAIL}</Link>]}
						icon={<MarkEmailReadRoundedIcon className='text-[40px]' />}
					/>
				</div>

				<div className='col-span-1 flex flex-col items-center justify-start'>
					<ContactIcon texts={['Our Office', SITE_DATA.HEAD_OFFICE]} icon={<LocationOnOutlinedIcon className='text-[40px]' />} />
				</div>

				<div className='col-span-1 flex flex-col items-center justify-start'>
					<div
						style={{ textShadow: '1px 1px 2px #000' }}
						className='flex justify-start w-full mb-[30px] font-[600] before:content-[""] before:absolute before:h-[4px] before:w-[10px] before:rounded-[30px] before:bg-white before:bottom-[-10px] before:left-0 after:content-[""] after:absolute after:h-[4px] after:w-[40px] after:rounded-[30px] after:bg-white after:bottom-[-10px] after:left-[15px] relative items-center xss:text-[18px] sm:text-[25px]'>
						Useful Links
					</div>
					{navItems?.map((nav, index) => (
						<div className='w-full flex items-center justify-start my-[8px] font-[600] duration-300 hover:translate-x-[20px]' key={index}>
							<Link href={nav?.href ?? APP_ROUTES.HOME}>
								<ArrowForwardRoundedIcon className='text-[inherit] mr-2' />
								{nav?.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className='w-full flex flex-col text-center items-center justify-center text-white font-[600] text-[13.5px] py-4'>
				&copy; {new Date().getFullYear()} {SITE_DATA.COPYRIGHT_OWNER} - All Rights Reserved.
			</div>
		</section>
	</footer>
);

export default Footer;
