import axios from 'axios';
import { config } from '../config/config';

class Service {
	get http() {
		const instance = axios.create({
			baseURL: config.baseUrl,
			headers: {},
			withCredentials: true,
			validateStatus: () => true
		});
		return instance;
	}

	async login({ email, password }) {
		const { data } = await this.http.post('/auth/login', {
			email,
			password
		});
		if (data.message) return { error: true };
		return data;
	}

	async register(data) {
		const response = await this.http.post('/auth/register', data);
		console.log(response);
	}

	async logout() {
		const response = await this.http.post('/auth/logout', {});
		console.log(response);
	}
}

const service = new Service();

export default service;
