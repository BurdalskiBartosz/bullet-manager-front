import axios from 'axios';
import { config } from '../config/config';

class Service {
	get http() {
		const instance = axios.create({
			baseURL: `${config.baseUrl}/auth`,
			headers: {},
			withCredentials: true,
			validateStatus: () => true
		});
		return instance;
	}

	async login({ email, password }) {
		const { data } = await this.http.post('/login', {
			email,
			password
		});
		if (data.message) return { error: true };
		return data;
	}

	async register({ email, password }) {
		const { data } = await this.http.post('/register', {
			email,
			password
		});
		if (data.message) return { error: true };
		return data;
	}

	async logout() {
		const { status } = await this.http.post('/logout', {});
		if (status === 200) return true;
	}
}

const service = new Service();

export default service;
