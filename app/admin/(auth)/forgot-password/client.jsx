'use client';
import React, { useEffect } from 'react';
import { APP_ROUTES, SITE_DATA, ASSETS, LOADING } from '@/config';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import LockPersonOutlined from '@mui/icons-material/LockPersonOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { ImageTag, CustomButton } from '@/app/_components';

const Client = () => {
	const [typePass, setTypePass] = React.useState(false);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
	};

	const handleClickShowPassword = () => setTypePass(!typePass);
	const handleMouseDownPassword = (e) => e.preventDefault();

	return (
		<React.Fragment>
			<ImageTag className='btn-animated rounded-[50%] w-[100px] h-[100px] border-[2px] border-white my-[20px] mx-auto' src={ASSETS.LOGO} />
			<h2
				style={{ textShadow: '1px 1px 2px #0009' }}
				className='font-[600] mb-[20px] text-[var(--color-primary)] text-center mx-auto text-[1.5rem]'>
				Forgot Password?
			</h2>
			<div>
				<TextField
					label='Email Address'
					inputProps={{ className: 'text-black', type: 'email' }}
					sx={{ borderRadius: '5px' }}
					color='primary'
					fullWidth
					className='my-[10px]'
					variant='standard'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<AccountCircleOutlined sx={{ color: SITE_DATA.THEME_COLOR }} />
							</InputAdornment>
						)
					}}
				/>
				<div className='text-gray-500 text-[13px] text-start'>
					Kindly enter your email address to request account password reset instructions.
				</div>

				<Link href={APP_ROUTES.ADMIN_LOGIN}>
					<div className='text-[var(--color-primary)] font-[600] text-[15px] w-full flex items-end justify-end'>Back to Login</div>
				</Link>
			</div>
			<Button
				className='normal-case py-[3px] mx-auto mt-[30px] w-full flex items-center xss:text-[16px] font-[600] btn-animated'
				variant='contained'>
				Request Password Reset
			</Button>
			<Link href={APP_ROUTES.HOME}>
				<div className='text-[var(--color-primary)] mt-[30px] font-[600] text-[15px] w-full flex items-center justify-center'>
					Back to Home
				</div>
			</Link>
		</React.Fragment>
	);
};

export default Client;
