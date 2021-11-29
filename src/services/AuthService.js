import Service from './Service';

class AuthService extends Service {
	async login({ email, password }) {
		const { data } = await this.http.post('/auth/login', {
			email,
			password
		});
		if (data.message) return { error: true, message: data.message };
		return data;
	}

	async register({ email, password }) {
		const { data } = await this.http.post('/auth/register', {
			email,
			password
		});
		if (data.message) return { error: true, message: data.message };
		return data;
	}

	async logout() {
		const { status } = await this.http.post('/auth/logout', {});
		if (status === 200) return true;
	}
}

const authService = new AuthService();

export default authService;
