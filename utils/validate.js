export const validate = {
	containsSpecialChars: ({ string }) => {
		const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		const errMsg = specialChars.test(string) && 'Special characters are not allowed!';
		return { errMsg };
	},
	noEmptyString: ({ string }) => {
		const errMsg = !string && 'This field is required.';
		return { errMsg };
	},
	email: ({ email }) => {
		// eslint-disable-next-line
		const validateEmail =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const errMsg = (!email && 'Please provide your email address.') || (!validateEmail.test(email) && 'Email address is invalid!');
		return { errMsg };
	},
	file: ({ fileType, types, reject }) => {
		const errMsg = reject ? types.includes(fileType) : !types.includes(fileType);
		return { errMsg };
	}
};
