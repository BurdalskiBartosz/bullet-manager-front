import { rest } from 'msw';

export const taskHandlers = [
	rest.get('http://localhost:3001/api/task', (req, res, ctx) => {
		return res(
			ctx.json([
				{ id: 1, title: 'Mocked value' },
				{ id: 2, title: 'Mocked second value' }
			]),
			ctx.delay(150)
		);
	})
];
