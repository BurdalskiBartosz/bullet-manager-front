import Service from './Service';

class TaskService extends Service {
	async getTasks(cookie) {
		const { data } = await this.http.get('/task', {
			headers: cookie && { cookie }
		});
		if (data.message) return { error: true, message: data.message };
		return data;
	}
	async createTask({ title, content, type, priority }) {
		const { data } = await this.http.post('/task', {
			title,
			content,
			type,
			priority
		});
		if (data.message) return { error: true, message: data.message };
		return data;
	}
}

const taskService = new TaskService();

export default taskService;
