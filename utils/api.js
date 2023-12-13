import { validate } from '@/utils/validate';
import { API_ROUTES } from '@/config';
import axios from 'axios';

export const contactUsFormAPISubmit = async ({ name, email, phone, message, isLoading, setIsLoading, setToast }) => {
	if (validate.email({ email }).errMsg || validate.noEmptyString({ string: name }).errMsg || validate.noEmptyString({ string: message }).errMsg)
		return setToast({ info: 'Please provide a valid email, names and a brief detail of your request!' });

	if (isLoading) return;
	setIsLoading(true);
	try {
		const res = await axios.post(API_ROUTES.CONTACT_FORM_SUBMIT, { name, email, phone, message });
		if (res.status === 200) {
			setToast({ success: res?.data?.message });
			setIsLoading(false);
		}
	} catch (err) {
		setIsLoading(false);
		setToast({ info: 'An error occured while submitting...<br />Please try again!' });
		console.error(err);
	}
};
