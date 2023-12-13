const host = 'http://mgmobicare.localhost:3000';
module.exports = {
	SITE_DATA: {
		NAME: 'Mgmobi Care',
		OFFICIAL_NAME: 'MGMOBI CARE',
		THEME_COLOR: '#843bd1',
		CONTACT_TEL: '07041960963',
		CONTACT_EMAIL: 'info@mgmobi.com'
	},
	APP_ROUTES: {
		HOME: `${host}/`,
		CONTACT: `${host}/contact`,
		ABOUT: `${host}/about`,
		SERVICES: `${host}/services`,
		POLICY: `${host}/policy`,
		TERMS: `${host}/terms`
	},
	ASSETS: {
		LOGO: ''
	}
};
