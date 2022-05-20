import { tLoginUserData, tRegistrationUserData } from 'types/forms/authForm';
import { fetchProvider } from 'utils/Axios';

class Authorization {
	async login(userLoginData: tLoginUserData) {
		const { data } = await fetchProvider.post('/auth/login', userLoginData);
		if (data.message) return { error: true, message: data.message };
		return data;
	}
	async register({ login, email, password }: tRegistrationUserData) {
		const { data } = await fetchProvider.post('/auth/register', {
			login,
			email,
			password
		});
		if (data.message) return { error: true, message: data.message };
		return data;
	}
	async logout() {
		const response = await fetchProvider.post('/auth/logout');
		return response;
	}
}

export default Authorization;
