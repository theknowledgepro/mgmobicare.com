'use client';
import { useState, useEffect } from 'react';
import { ImageTag } from '@/app/_components';
import styles from './components.module.css';
import Skeleton from '@mui/material/Skeleton';

const WebBanner = ({ src = '/retirement-home-concept-with-nurse.jpg', page = '' }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const image = new Image();
		image.src = src;
		image.onload = () => {
			setIsLoaded(true);
			console.log('loaded');
		};
	}, [src]);

	return (
		<section className={`${styles.hero_container}`}>
			{!isLoaded && <Skeleton variant='rectangular' className={`${styles.hero} bg-zinc-500 xss:h-[60vh] sm:h-[80vh]`} />}
			<ImageTag src={src} style={{ display: isLoaded ? 'block' : 'none' }} className={styles.hero} />
			<div className={`${styles.hero_overlay}`}>
				<div className={styles.hero_title}>{page}</div>
				<div className={styles.bread_crumb}>
					<span>Home</span>
					<span className='mx-1'>/</span>
					<span>{page}</span>
				</div>
			</div>
		</section>
	);
};

export default WebBanner;
