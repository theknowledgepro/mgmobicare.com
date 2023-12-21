import { Paper } from '@mui/material';
import { SITE_DATA, ASSETS, APP_ROUTES } from '@/config';
import Link from 'next/link';
import { CustomButton } from '@/app/_components';

const BookAppointment = () => {
	return (
		<Paper
			elevation={3}
			className='mx-auto rounded-[8px] flex items-center justify-center flex-col py-[30px] xss:px-[20px] base:px-[30px] w-full max-w-[800px] h-[max-content] bg-gradient-to-b from-[var(--color-primary)] to-[#f2e8fd]'>
			<div style={{ textShadow: '1px 1px 2px #000' }} className='text-white text-center font-[500] xss:text-[30px] md:text-[35px]'>
				Book Appointment
			</div>
			<div style={{ textShadow: '1px 1px 2px #000' }} className='w-full max-w-[500px] text-center text-white text-[17px] mt-[10px]'>
				Secure peace of mind with ease. Book an appointment now for personalized homecare at {SITE_DATA.NAME}. Your well-being is our top
				priority.
			</div>
			<Link className='' href={APP_ROUTES.CONTACT}>
				<CustomButton
					className='normal-case py-[3px] mx-auto mt-[20px] w-[300px] flex items-center xss:text-[17px] md:text-[22px] font-[600] btn-animated'
					textColor='var(--color-primary)'
					backgroundColor='#fff'>
					Schedule an Appointment
				</CustomButton>
			</Link>
		</Paper>
	);
};

export default BookAppointment;
