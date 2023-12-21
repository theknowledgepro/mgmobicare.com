const logoFile = require('../assets/logo.jpg');
const maleAvatar = require('../assets/male-avatar.jpg');
const femaleAvatar = require('../assets/female-avatar.jpg');

const host = 'http://mgmobicare.localhost:3002';

module.exports = {
	SITE_DATA: {
		NAME: 'Mgmobi Care',
		OFFICIAL_NAME: 'MGMOBI CARE',
		THEME_COLOR: '#843bd1',
		CONTACT_TEL: '07041960963',
		CONTACT_EMAIL: 'info@mgmobi.com',
		HEAD_OFFICE: '23, The Green Ste R, Dover County, Delaware, USA.',
		COPYRIGHT_OWNER: 'Mgmobi Care',
		DEVELOPER_URL: 'https://ajibo.promisedera.com',
		DEVELOPER_NAME: 'Chidera Ajibo P.' // PromisedEra Technologies
	},
	APP_ROUTES: {
		HOME: `${host}/`,
		TESTIMONIALS: `${host}#testimonials`,
		CONTACT: `${host}/contact`,
		ABOUT: `${host}/about`,
		SERVICES: `${host}/services`,
		POLICY: `${host}/policy`,
		TERMS: `${host}/terms`
	},
	API_ROUTES: { CONTACT_FORM_SUBMIT: '/api/contact-form' },
	ASSETS: {
		LOGO: logoFile,
		DEFAULT_AVATAR: maleAvatar,
		MALE_AVATAR: maleAvatar,
		FEMALE_AVATAR: femaleAvatar
	},
	SERVICES: [{ title: '', description: '', icon: '' }]
};
