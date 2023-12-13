'use client';
import styles from './components.module.css';
import Link from 'next/link';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';

const SocialIcons = ({ className }) => {
	const linkedInUrl = 'promisedera.com';
	const facebookUrl = 'promisedera.com';
	const instagramUrl = 'promisedera.com';

	return (
		<div className={`${styles.social_icons} ${className}`}>
			<Link target='_blank' href={`https://${linkedInUrl}`}>
				<LinkedIn className={styles.icon} />
			</Link>
			<Link target='_blank' href={`https://${facebookUrl}`}>
				<FacebookOutlined className={styles.icon} />
			</Link>
			<Link target='_blank' href={`https://${instagramUrl}`}>
				<Instagram className={styles.icon} />
			</Link>
			<Link
				target='_blank'
				href={`https://wa.me/${+2347041960963}?text=Hello,%20Chidera%20Promise,%20My%20name%20is%20_____%20I%20want%20to%20work%20with%20you%20on___"`}>
				<WhatsApp className={styles.icon} />
			</Link>
		</div>
	);
};

export default SocialIcons;
