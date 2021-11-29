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
}

export default Service;
