import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const createApiDefaultConfig = () => {
	return fetchBaseQuery({
		baseUrl: 'http://localhost:3001/api',
		credentials: 'include'
	});
};
