'use client';
import React, { useEffect } from 'react';
import { APP_ROUTES, ASSETS, SITE_DATA, LOADING } from '@/config';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { ImageTag, CustomButton, SocialIcons } from '@/app/_components';
import Link from 'next/link';

const Client = () => {
	return (
		<div className='w-full h-full bg-[#f2e8fd] grid grid-cols-12 xss:gap-0'>
			<div className='xss:hidden md:block h-full xss:border-[0px] md:border-r-[4px] border-[#fff] xss:p-[40px_5%] md:p-[40px_10%] md:col-span-4 lgs:col-span-3'>
				<ImageTag
					src={ASSETS.MALE_AVATAR}
					alt='admin avatar'
					className='w-[150px] h-[150px] border-[2px] border-white rounded-[50%] mx-auto'
					priority
				/>
			</div>
			<div className='h-full xss:col-span-12 md:col-span-8 lgs:col-span-9'>
				<div className='w-full h-[60px] shadow-[0_0_5px_var(--color-primary)] bg-white xss:flex md:hidden items-center justify-between'></div>
				<div className='xss:p-[40px_5%] w-full h-full'>
					<div className='before:content-[""] before:absolute before:h-[3px] before:w-[10px] before:rounded-[30px] before:bg-[var(--color-primary)] before:bottom-[-10px] before:left-[10px] after:content-[""] after:absolute after:h-[3px] after:w-[80px] after:rounded-[30px] after:bg-[var(--color-primary)] after:bottom-[-10px] after:left-[25px] relative w-full font-[600] text-[var(--color-primary)] xss:text-[28px] md:text-[30px]'>
						<FlutterDashIcon className='xss:text-[35px] md:text-[40px] mr-[5px]' />
						Admin Dashboard
					</div>

					<div className='w-full min-h-[100vh] border-t-[4px] mt-[40px]'>ccch</div>
					<div className='text-center text-sm text-gray-500 font-[600] py-[40px]'>
						&copy; {new Date().getFullYear()} {SITE_DATA.NAME}
						<br />
						<div className='w-full flex items-center justify-center text-[13px]'>
							Designed & Developed by
							<Link className='mx-1 underline' target='_blank' href={SITE_DATA.DEVELOPER_URL}>
								{SITE_DATA.DEVELOPER_NAME}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Client;
