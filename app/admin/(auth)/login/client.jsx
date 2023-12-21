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
				Admin Login
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
				<TextField
					label='Your Password'
					inputProps={{ className: 'text-black', type: typePass ? 'password' : 'text' }}
					sx={{ borderRadius: '5px' }}
					color='primary'
					fullWidth
					className='my-[10px]'
					variant='standard'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<LockPersonOutlined sx={{ color: SITE_DATA.THEME_COLOR }} />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='start'>
									{typePass ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
				<Link href={APP_ROUTES.ADMIN_FORGOT_PASSWORD}>
					<div className='text-[var(--color-primary)] font-[600] text-[15px] w-full flex items-end justify-end'>Forgot Password?</div>
				</Link>
			</div>
			<Button
				className='normal-case py-[3px] mx-auto mt-[40px] w-full flex items-center xss:text-[16px] font-[600] btn-animated'
				variant='contained'>
				Sign In
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
