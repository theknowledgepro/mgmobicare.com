const logoFile = require('../assets/logo-icon.png');
const maleAvatar = require('../assets/male-avatar.jpg');
const femaleAvatar = require('../assets/female-avatar.jpg');

const host = 'https://mgmobicare.com';

module.exports = {
	SITE_DATA: {
		NAME: 'Mgmobi Care',
		OFFICIAL_NAME: 'MGMOBI CARE',
		TWITTER_HANDLE: '',
		THEME_COLOR: '#843bd1',
		CONTACT_TEL: '+01582496949',
		CONTACT_EMAIL: 'info@mgmobicare.com',
		HEAD_OFFICE: '3 sycamore Road Houghton Regis Dunstable LU5 5NQ.',
		COPYRIGHT_OWNER: 'Mgmobi Care',
		DEVELOPER_URL: 'https://ajibo.promisedera.com',
		DEVELOPER_NAME: 'Chidera Ajibo P.', // PromisedEra Technologies
	},
	APP_ROUTES: {
		HOME: `${host}/`,
		TESTIMONIALS: `${host}#testimonials`,
		CONTACT: `${host}/contact`,
		ABOUT: `${host}/about`,
		SERVICES: `${host}/services`,
		POLICY: `${host}/policy`,
		TERMS: `${host}/terms`,

		ADMIN: `${host}/admin`,
		ADMIN_LOGIN: `${host}/admin/login`,
		ADMIN_FORGOT_PASSWORD: `${host}/admin/forgot-password`,
	},
	API_ROUTES: { CONTACT_FORM_SUBMIT: '/api/contact-form' },
	ASSETS: {
		LOGO: logoFile,
		DEFAULT_AVATAR: maleAvatar,
		MALE_AVATAR: maleAvatar,
		FEMALE_AVATAR: femaleAvatar,
	},
	TESTIMONIALS: [
		{
			clientName: 'Mary K.',
			clientRating: 5,
			content: `Choosing Mgmobi Care for my mom's homecare was the best decision. The caregivers are not just skilled professionals but also compassionate individuals. They've become like an extended family, providing exceptional care with a personal touch. Grateful for the peace of mind they've brought into our lives.`,
			clientOccupation: 'Satisfied Client',
			avatar: femaleAvatar,
		},
		{
			clientName: 'John D.',
			clientRating: 4,
			content: `We were impressed by the transparent and collaborative approach of Mgmobi Care. The regular updates and involvement in our loved one's care made all the difference. It's more than a service; it's a partnership. Thank you for the genuine care and support.`,
			clientOccupation: 'Family Member',
			avatar: maleAvatar,
		},
		{
			clientName: 'Robert F.',
			clientRating: 4,
			content: `The trust we've built with Mgmobi Care is unmatched. The careful selection and compassionate delivery of care have made them an integral part of our family. Knowing that our loved ones are in capable hands allows us to focus on cherishing the moments together.`,
			clientOccupation: 'Trusting Client',
			avatar: maleAvatar,
		},
		{
			clientName: 'Emily M.',
			clientRating: 4,
			content: `The dedicated team at Mgmobi Care goes above and beyond. Their commitment to providing not only physical but emotional support has made a significant impact on my parent's quality of life. I'm grateful for the positive and trusting relationship they've nurtured. Thank you for everything!`,
			clientOccupation: 'Grateful Daughter',
			avatar: femaleAvatar,
		},
	],
};
