'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ImageTag } from '@/app/_components';
import { ChangeClassNameAtPosition, HideShowNavbarOnScroll } from '@/utils/use_scroll';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { APP_ROUTES, ASSETS } from '@/config';
import {
	Box,
	IconButton,
	Button,
	List,
	ListItem,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './components.module.css';

const RenderNavigation = ({ nav, handleOpenSideNav, windowLocation, host }) => {
	return (
		<Link onClick={handleOpenSideNav} href={nav.href !== undefined ? nav.href : host} style={{ width: '100%' }}>
			<ListItem
				disablePadding
				className='rounded-[0px] bg-[transparent]'
				sx={{
					display: 'block',
					color: windowLocation === nav.href ? 'var(--color-primary)' : '#000'
				}}>
				<ListItemButton sx={{ minHeight: 48, justifyContent: 'initial', px: 1.5, fontFamily: 'inherit' }}>
					<ListItemIcon sx={{ minWidth: 0, mr: 1, ml: 'auto', justifyContent: 'center', color: '#000' }}>{nav.icon}</ListItemIcon>
					<ListItemText primary={<span className='font-[600]'>{nav.name}</span>} className='text-[15px]' sx={{ opacity: 1 }} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
};

const RenderDropdownNav = ({ nav, handleOpenSideNav, host, windowLocation }) => {
	return (
		<div className='w-full'>
			<Accordion
				className='font-[600] bg-[transparent]'
				disableGutters
				elevation={0}
				// expanded={nav.children.find((index) => index.href === windowLocation)}
			>
				<AccordionSummary
					className='rounded-sm text-[var(--color-primary)] bg-[transparent]'
					sx={{
						padding: '0px auto',
						borderRadius: '0px',
						display: 'flex',
						background: nav.children.find((index) => index.href === windowLocation) && 'var(--navbar-side-hover-bg)',
						color: windowLocation === nav.href ? 'var(--navbar-side-hover-color)' : '#000'
					}}
					expandIcon={<ExpandMoreIcon className='text-[var(--color-primary)]' />}>
					<Box sx={{ minWidth: 0, ml: -0.5, mr: 1, justifyContent: 'center' }}>{nav.icon}</Box>
					<Box sx={{ opacity: 1, width: 'auto' }} className='text-[16px]'>
						{nav.name}
					</Box>
				</AccordionSummary>

				<AccordionDetails
					sx={{
						paddingLeft: '5px',
						padding: '0 0',
						width: '100%',
						border: 'none',
						borderRadius: '3px 0px 0px 3px',
						borderLeft: `4px solid var(--color-primary)`
					}}>
					{nav.children.map((child, index) => (
						<RenderNavigation handleOpenSideNav={handleOpenSideNav} host={host} windowLocation={windowLocation} nav={child} key={index} />
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

const WebHeader = ({ headerOriginalBgColor, host = APP_ROUTES.HOME }) => {
	const pcHeaderRef = useRef(null);
	const sideBarRef = useRef(null);
	const mobileHeaderRef = useRef(null);

	HideShowNavbarOnScroll({ startPosition: 20, targetRef: mobileHeaderRef, className: 'translate-y-[-100vh]' });
	HideShowNavbarOnScroll({ startPosition: 600, targetRef: pcHeaderRef, className: 'translate-y-[-100vh]' });
	ChangeClassNameAtPosition({
		startPosition: 45,
		targetRef: mobileHeaderRef,
		className: 'bg-[var(--color-primary)] shadow-[0px_0px_4px_var(--color-primary)]'
	});
	ChangeClassNameAtPosition({
		startPosition: 45,
		targetRef: pcHeaderRef,
		className: 'bg-[var(--color-primary)] shadow-[0px_0px_4px_var(--color-primary)]'
	});

	const handleOpenSideNav = () => {
		mobileHeaderRef?.current?.classList.toggle('translate-y-[-100vh]');
		sideBarRef?.current?.classList.toggle('translate-x-[-100vw]');
		document.body.classList.toggle('body-sticky');
	};

	const handleDesktopNavClick = (nav) => {
		return setWindowLocation(nav?.href ?? host);
	};

	const [windowLocation, setWindowLocation] = useState(null);
	const [isScrollActive, setIsScrollActive] = useState(false);
	useEffect(() => {
		setWindowLocation(window.location.href);
		const handleFunction = () => {
			if (window.scrollY > 45) setIsScrollActive(true);
			else setIsScrollActive(false);
		};

		window.addEventListener('scroll', handleFunction);
		return () => window.removeEventListener('scroll', handleFunction);
	}, []);

	const NavItems = [
		{ name: 'Home', href: APP_ROUTES.HOME, icon: '', pref: 'pc' },
		{ name: 'About Us', href: APP_ROUTES.ABOUT, icon: '', pref: 'pc' },
		{ name: 'Contact Us', href: APP_ROUTES.CONTACT, icon: '', pref: 'pc' },
		{
			name: 'Our Services',
			href: APP_ROUTES.SERVICES,
			icon: '',
			pref: 'pc',
			children: []
		}
	];

	return (
		<div className={`z-[5000] fixed top-0 left-0 right-0 w-[100vw] h-[max-content] p-0 m-0`}>
			<div
				ref={pcHeaderRef}
				id='pc-header-ref'
				className={`${
					headerOriginalBgColor ? 'header-bg-original' : ''
				} hidden $shadow-[0_0_10px_var(--color-primary)] xss:p-[0px_7%] md:p-[0px_10%] w-full xss:h-[60px] md:h-[75px] border-b border-zinc-300 md:flex justify-between items-center transition-all ease-out duration-300`}>
				<ImageTag
					src={ASSETS.LOGO}
					style={{ width: '50px', height: '50px' }}
					className='bg-white p-[3px] rounded-[50%]'
					alt='logo'
					priority={true}
				/>
				<div className='flex items-center justify-center gap-[25px]'>
					<div className='flex items-center justify-center'>
						{NavItems.filter((index) => index.pref === 'pc').map((nav, i) => (
							<React.Fragment key={i}>
								{nav.children && (
									<div className={`${styles.header_dropdown} mx-2`}>
										<Link
											href={nav?.href ?? host}
											onClick={() => handleDesktopNavClick(nav)}
											className={`${
												nav.children?.find((index) => index?.href === windowLocation)
													? `text-[var(--color-primary)] before:content-[""] before:absolute before:h-[4px] before:w-[10px] before:rounded-[30px] before:bg-[var(--color-primary)] before:bottom-[-10px] before:left-0 after:content-[""] after:absolute after:h-[4px] after:w-[50%] after:rounded-[30px] after:bg-[var(--color-primary)] after:bottom-[-10px] after:left-[15px]`
													: `${isScrollActive ? 'text-white' : 'text-black'}`
											} text-[18px] font-[600] relative`}>
											{nav.name} <ExpandMoreIcon />
										</Link>
										<div className='shadow-[0_0_.2rem_var(--color-primary)] border-[0px] border-[#399197] grid-cols-1 gap-x-2'>
											{nav.children.map((nav, index) => (
												<div
													className='hover:bg-[#843bd113] duration-[200ms] col-span-1 mt-0 px-2 py-2 rounded-[5px]'
													key={index}>
													<Link
														href={nav?.href ?? host}
														onClick={() => handleDesktopNavClick(nav)}
														className={`${
															windowLocation === nav.href
																? `text-[var(--color-primary)] before:content-[""] before:absolute before:h-[4px] before:w-[10px] before:rounded-[30px] before:bg-[var(--color-primary)] before:bottom-[-10px] before:left-0 after:content-[""] after:absolute after:h-[4px] after:w-[50%] after:rounded-[30px] after:bg-[var(--color-primary)] after:bottom-[-10px] after:left-[15px]`
																: 'text-black'
														} text-[18px] font-[600] relative`}>
														{nav.name}
													</Link>
												</div>
											))}
										</div>
									</div>
								)}
								{!nav.children && (
									<div className='mx-2'>
										<Link
											href={nav?.href ?? host}
											onClick={() => handleDesktopNavClick(nav)}
											className={`${
												windowLocation === nav.href
													? `${
															isScrollActive ? 'text-white' : 'text-[var(--color-primary)]'
													  } before:content-[""] before:absolute before:h-[4px] before:w-[10px] before:rounded-[30px] ${
															isScrollActive ? 'before:bg-white' : 'before:bg-[var(--color-primary)]'
													  } before:bottom-[-10px] before:left-0 after:content-[""] after:absolute after:h-[4px] after:w-[50%] after:rounded-[30px] ${
															isScrollActive ? 'after:bg-white' : 'after:bg-[var(--color-primary)]'
													  } after:bottom-[-10px] after:left-[15px]`
													: `${isScrollActive ? 'text-white' : 'text-black'}`
											} text-[18px] font-[600] relative`}>
											{nav.name}
										</Link>
									</div>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
			<div
				ref={mobileHeaderRef}
				id='mobile-header-ref'
				className={`${
					headerOriginalBgColor ? `bg-[var(--color-primary)]` : ''
				} w-full flex md:hidden items-center justify-between p-2 border-b border-zinc-300 $shadow-[0_0_10px_var(--color-primary)] transition-all ease-out duration-300`}>
				<ImageTag
					src={ASSETS.LOGO}
					style={{ width: '50px', height: '50px' }}
					className='bg-white p-[3px] rounded-[50%]'
					alt='logo'
					priority={true}
				/>
				<IconButton onClick={handleOpenSideNav}>
					<MenuIcon className={`text-[28px] ${headerOriginalBgColor || isScrollActive ? 'text-white' : `text-[var(--color-primary)]`}`} />
				</IconButton>
			</div>
			<div
				ref={sideBarRef}
				className='fixed overflow-hidden top-0 left-0 bg-white border-r border-gray-200 shadow-md w-[100vw] h-[100vh] xs:flex md:hidden flex-col p-2 translate-x-[-100vw] transition-all ease-out duration-300'>
				<IconButton className='absolute top-[15px] right-[10px]' onClick={handleOpenSideNav}>
					<CancelIcon className={`text-[var(--color-primary)] text-[28px]`} />
				</IconButton>
				<ImageTag
					src={ASSETS.LOGO}
					style={{ width: '110px', height: '110px' }}
					className='border border-gray-100 bg-white btn-animated rounded-[50%] mx-auto mb-1 p-2 shadow-lg'
					alt='logo'
					priority={true}
				/>

				<List
					className={`flex flex-col text-white items-center justify-center overflow-y-auto overflow-x-hidden mt-[8px] h-full flex pb-[70px]`}>
					{NavItems.map((nav, index) => (
						<React.Fragment key={index}>
							{nav.children && (
								<RenderDropdownNav handleOpenSideNav={handleOpenSideNav} host={host} windowLocation={windowLocation} nav={nav} />
							)}
							{!nav.children && (
								<RenderNavigation handleOpenSideNav={handleOpenSideNav} host={host} windowLocation={windowLocation} nav={nav} />
							)}
						</React.Fragment>
					))}
				</List>
			</div>
		</div>
	);
};

export default WebHeader;
