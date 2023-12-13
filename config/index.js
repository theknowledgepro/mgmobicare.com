const logoFile = require('../assets/logo.jpg');
const host = 'http://mgmobicare.localhost:3000';

module.exports = {
	SITE_DATA: {
		NAME: 'Mgmobi Care',
		OFFICIAL_NAME: 'MGMOBI CARE',
		THEME_COLOR: '#843bd1',
		CONTACT_TEL: '07041960963',
		CONTACT_EMAIL: 'info@mgmobi.com',
		HEAD_OFFICE: '23, The Green Ste R, Dover County, Delaware, USA.'
	},
	APP_ROUTES: {
		HOME: `${host}/`,
		CONTACT: `${host}/contact`,
		ABOUT: `${host}/about`,
		SERVICES: `${host}/services`,
		POLICY: `${host}/policy`,
		TERMS: `${host}/terms`
	},
	API_ROUTES: { CONTACT_FORM_SUBMIT: '/api/contact-form-submit' },
	ASSETS: {
		LOGO: logoFile
	}
};
