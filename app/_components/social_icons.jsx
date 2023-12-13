'use client';
import styles from './components.module.css';
import Link from 'next/link';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { SITE_DATA } from '@/config';

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
				href={`https://wa.me/${SITE_DATA.CONTACT_TEL}?text=${encodeURIComponent(
					`Hello, ${SITE_DATA.NAME}, My name is _____, and I need an assitance with____`
				)}`}>
				<WhatsApp className={styles.icon} />
			</Link>
		</div>
	);
};

export default SocialIcons;
